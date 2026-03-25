import { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, Locate, Play, Square, ChevronRight } from 'lucide-react';

const TEAL = '#00c8b3';

type Difficulty = 'beginner' | 'intermediate' | 'expert';

const DIFF: Record<Difficulty, { color: string; bg: string; label: string; symbol: string }> = {
  beginner:     { color: '#16a34a', bg: '#dcfce7', label: 'Beginner',     symbol: '●'  },
  intermediate: { color: '#2563eb', bg: '#dbeafe', label: 'Intermediate', symbol: '◆'  },
  expert:       { color: '#0f172a', bg: '#e2e8f0', label: 'Expert',       symbol: '◆◆' },
};

interface TrailDef {
  id: string;
  name: string;
  difficulty: Difficulty;
  color: string;
  pathD: string;
  distance: string;
  time: string;
  vertical: string;
  status: string;
  statusColor: string;
  directions: { text: string; dist: string }[];
}

// ViewBox: 0 0 380 300  |  Summit peak ≈ (190,28)  |  Base Lodge ≈ (190,276)
const TRAILS: TrailDef[] = [
  {
    id: 'summit',
    name: 'Summit Run',
    difficulty: 'beginner',
    color: '#22c55e',
    pathD: 'M 190 28 C 177 83 157 128 163 173 C 169 216 193 246 190 276',
    distance: '1.2 km', time: '8 min', vertical: '380 m',
    status: 'Open · Groomed', statusColor: '#16a34a',
    directions: [
      { text: 'Head south from Summit Station', dist: 'Start' },
      { text: 'Bear left at the green marker post', dist: '300 m' },
      { text: 'Gentle traverse across powder field', dist: '650 m' },
      { text: 'Bear right past Half-Way Hut', dist: '950 m' },
      { text: 'Arrived at Base Lodge', dist: '1.2 km' },
    ],
  },
  {
    id: 'blueridge',
    name: 'Blue Ridge',
    difficulty: 'intermediate',
    color: '#3b82f6',
    pathD: 'M 190 28 C 224 70 262 108 246 152 C 230 194 186 230 190 276',
    distance: '1.8 km', time: '12 min', vertical: '380 m',
    status: 'Open · Groomed', statusColor: '#16a34a',
    directions: [
      { text: 'Head right from Summit Station', dist: 'Start' },
      { text: 'Follow blue markers along east ridge', dist: '450 m' },
      { text: 'Sharp left at Blue Ridge connector', dist: '950 m' },
      { text: 'Navigate through pine tree section', dist: '1.3 km' },
      { text: 'Arrived at Base Lodge', dist: '1.8 km' },
    ],
  },
  {
    id: 'mogul',
    name: 'Mogul Face',
    difficulty: 'expert',
    color: '#1e293b',
    pathD: 'M 190 28 C 246 58 282 108 288 153 C 294 196 257 246 190 276',
    distance: '1.5 km', time: '6 min', vertical: '380 m',
    status: 'Open · Ungroomed', statusColor: '#f59e0b',
    directions: [
      { text: 'Drop in from Summit cliff edge', dist: 'Start' },
      { text: 'Mogul field — aggressive terrain ahead!', dist: '200 m' },
      { text: '⚠ Speed check zone — slow down', dist: '700 m' },
      { text: 'Merge left toward base run', dist: '1.1 km' },
      { text: 'Arrived at Base Lodge', dist: '1.5 km' },
    ],
  },
  {
    id: 'powder',
    name: 'Powder Valley',
    difficulty: 'intermediate',
    color: '#3b82f6',
    pathD: 'M 190 28 C 148 74 104 118 116 165 C 128 210 166 252 190 276',
    distance: '2.1 km', time: '15 min', vertical: '380 m',
    status: 'Open · Groomed', statusColor: '#16a34a',
    directions: [
      { text: 'Head left from Summit Station', dist: 'Start' },
      { text: 'Enter Powder Valley bowl', dist: '500 m' },
      { text: 'Long traverse — enjoy the views!', dist: '1.0 km' },
      { text: 'Bear right at valley exit gate', dist: '1.6 km' },
      { text: 'Arrived at Base Lodge', dist: '2.1 km' },
    ],
  },
];

const INIT_VB = { x: 0, y: 0, w: 380, h: 300 };

export function InteractiveTrailMap() {
  const [selectedId, setSelectedId] = useState('summit');
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dotPos, setDotPos] = useState({ x: 190, y: 28 });
  const [currentStep, setCurrentStep] = useState(0);
  const [arrived, setArrived] = useState(false);
  const [vb, setVb] = useState(INIT_VB);
  const [trailLens, setTrailLens] = useState<Record<string, number>>({});

  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});
  const animRef = useRef<number>();
  const startTimeRef = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const isPanning = useRef(false);
  const lastPtr = useRef({ x: 0, y: 0 });

  const trail = TRAILS.find(t => t.id === selectedId)!;
  const diffStyle = DIFF[trail.difficulty];
  const trailLen = trailLens[selectedId] || 0;

  // Measure path lengths after mount
  useEffect(() => {
    const t = setTimeout(() => {
      const lens: Record<string, number> = {};
      TRAILS.forEach(tr => {
        const el = pathRefs.current[tr.id];
        if (el) lens[tr.id] = el.getTotalLength();
      });
      setTrailLens(lens);
    }, 150);
    return () => clearTimeout(t);
  }, []);

  // Navigation animation
  useEffect(() => {
    if (!isNavigating) return;
    const pathEl = pathRefs.current[selectedId];
    if (!pathEl) return;
    const totalLen = pathEl.getTotalLength();
    startTimeRef.current = 0;
    const DURATION = 22000; // 22 s traverse

    const animate = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const p = Math.min((ts - startTimeRef.current) / DURATION, 1);
      setProgress(p);
      const pt = pathEl.getPointAtLength(p * totalLen);
      setDotPos({ x: pt.x, y: pt.y });
      const dirs = TRAILS.find(t => t.id === selectedId)!.directions;
      setCurrentStep(Math.min(Math.floor(p * dirs.length), dirs.length - 1));
      if (p < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setIsNavigating(false);
        setArrived(true);
      }
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [isNavigating, selectedId]);

  const startNav = () => {
    setProgress(0);
    setCurrentStep(0);
    setDotPos({ x: 190, y: 28 });
    setArrived(false);
    setIsNavigating(true);
  };

  const stopNav = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsNavigating(false);
    setProgress(0);
    setCurrentStep(0);
    setDotPos({ x: 190, y: 28 });
    setArrived(false);
  };

  const selectTrail = (id: string) => { stopNav(); setSelectedId(id); };

  // Pan
  const onPtrDown = (e: React.PointerEvent<SVGSVGElement>) => {
    isPanning.current = true;
    lastPtr.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  };
  const onPtrMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isPanning.current || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const sx = vb.w / rect.width;
    const sy = vb.h / rect.height;
    const dx = (e.clientX - lastPtr.current.x) * sx;
    const dy = (e.clientY - lastPtr.current.y) * sy;
    lastPtr.current = { x: e.clientX, y: e.clientY };
    setVb(v => ({ ...v, x: v.x - dx, y: v.y - dy }));
  };
  const onPtrUp = () => { isPanning.current = false; };

  const zoomIn  = () => setVb(v => ({ x: v.x + v.w * 0.15, y: v.y + v.h * 0.15, w: v.w * 0.7,   h: v.h * 0.7   }));
  const zoomOut = () => setVb(v => ({ x: v.x - v.w * 0.1,  y: v.y - v.h * 0.1,  w: Math.min(v.w / 0.7, 560), h: Math.min(v.h / 0.7, 440) }));
  const resetView = () => { setVb(INIT_VB); };

  const remainingDist = (() => {
    const d = parseFloat(trail.distance);
    return `${(d * (1 - progress)).toFixed(1)} km`;
  })();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: 'white' }}>

      {/* ── SVG Map ── */}
      <div style={{ position: 'relative', width: '100%', height: 252, overflow: 'hidden' }}>
        <svg
          ref={svgRef}
          style={{ width: '100%', height: '100%', cursor: isPanning.current ? 'grabbing' : 'grab', userSelect: 'none', display: 'block' }}
          viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
          preserveAspectRatio="xMidYMid meet"
          onPointerDown={onPtrDown}
          onPointerMove={onPtrMove}
          onPointerUp={onPtrUp}
          onPointerLeave={onPtrUp}
        >
          <defs>
            <linearGradient id="tmSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b2dff5" />
              <stop offset="100%" stopColor="#d8eef8" />
            </linearGradient>
            <linearGradient id="tmSnow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e8f4f8" />
            </linearGradient>
            <radialGradient id="tmDotGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={trail.color} stopOpacity="0.45" />
              <stop offset="100%" stopColor={trail.color} stopOpacity="0" />
            </radialGradient>
            <filter id="tmShadow">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Sky */}
          <rect x="-20" y="-20" width="420" height="340" fill="url(#tmSky)" />

          {/* Mountain snow fill */}
          <path d="M 190 12 L 48 105 L 10 175 L 0 300 L 380 300 L 375 162 L 325 88 Z" fill="url(#tmSnow)" opacity="0.93" />
          <path d="M 190 12 L 142 55 L 108 86 L 82 138 L 70 198 L 95 300 L 285 300 L 310 198 L 300 135 L 272 76 L 236 50 Z" fill="white" opacity="0.58" />

          {/* Tree clusters – left */}
          <ellipse cx="66"  cy="196" rx="28" ry="20" fill="#2d6a4f" opacity="0.38" />
          <ellipse cx="50"  cy="213" rx="20" ry="14" fill="#1b4332" opacity="0.32" />
          <ellipse cx="82"  cy="210" rx="17" ry="12" fill="#2d6a4f" opacity="0.30" />
          <ellipse cx="52"  cy="256" rx="22" ry="14" fill="#1b4332" opacity="0.27" />
          <ellipse cx="38"  cy="248" rx="15" ry="11" fill="#2d6a4f" opacity="0.24" />
          <ellipse cx="74"  cy="260" rx="14" ry="10" fill="#1b4332" opacity="0.22" />

          {/* Tree clusters – right */}
          <ellipse cx="314" cy="188" rx="26" ry="18" fill="#2d6a4f" opacity="0.35" />
          <ellipse cx="330" cy="205" rx="18" ry="13" fill="#1b4332" opacity="0.30" />
          <ellipse cx="320" cy="254" rx="20" ry="13" fill="#1b4332" opacity="0.25" />
          <ellipse cx="338" cy="248" rx="14" ry="10" fill="#2d6a4f" opacity="0.22" />

          {/* Contour lines */}
          {[68, 114, 160, 206, 252].map((y, i) => (
            <path key={y} d={`M -20 ${y} Q 95 ${y - 3} 190 ${y - 4} Q 285 ${y - 5} 400 ${y}`}
              stroke="#a0c8d8" strokeWidth="0.85" fill="none" opacity={0.55 - i * 0.06} />
          ))}

          {/* Gondola lift */}
          <path d="M 316 273 L 283 28" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="7,4" opacity="0.72" />
          {[0.25, 0.5, 0.75].map((t, i) => (
            <circle key={i} cx={316 + (283 - 316) * t} cy={273 + (28 - 273) * t} r="3.5" fill="#f59e0b" opacity="0.85" />
          ))}

          {/* Chair 2 lift */}
          <path d="M 63 192 L 190 28" stroke="#f59e0b" strokeWidth="1.6" fill="none" strokeDasharray="6,4" opacity="0.62" />
          {[0.4, 0.72].map((t, i) => (
            <circle key={i} cx={63 + (190 - 63) * t} cy={192 + (28 - 192) * t} r="3" fill="#f59e0b" opacity="0.78" />
          ))}

          {/* All trails dimmed */}
          {TRAILS.map(tr => (
            <path
              key={tr.id}
              ref={el => { pathRefs.current[tr.id] = el; }}
              d={tr.pathD}
              stroke={tr.color}
              strokeWidth={tr.id === selectedId ? 5.5 : 3.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={tr.id === selectedId ? 0.28 : 0.18}
            />
          ))}

          {/* Selected trail – full highlight (when not navigating) */}
          {!isNavigating && (
            <path d={trail.pathD} stroke={trail.color} strokeWidth={5.5}
              fill="none" strokeLinecap="round" opacity={0.88} />
          )}

          {/* Traversed portion during navigation */}
          {isNavigating && trailLen > 0 && (
            <path
              d={trail.pathD}
              stroke={trail.color}
              strokeWidth={6}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={trailLen}
              strokeDashoffset={trailLen * (1 - progress)}
            />
          )}

          {/* ── Facility markers ── */}
          {/* Summit Station */}
          <polygon points="190,10 182,26 198,26" fill="#ef4444" filter="url(#tmShadow)" />
          <rect x="182" y="25" width="16" height="9" rx="2" fill="#ef4444" filter="url(#tmShadow)" />
          <text x="190" y="32" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="800">TOP</text>

          {/* Base Lodge */}
          <rect x="173" y="272" width="34" height="18" rx="4" fill="#0f172a" opacity="0.88" filter="url(#tmShadow)" />
          <text x="190" y="284.5" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="800">BASE</text>

          {/* Half-Way Hut */}
          <circle cx="167" cy="175" r="6" fill="white" stroke="#94a3b8" strokeWidth="1.5" filter="url(#tmShadow)" />
          <text x="167" y="178.5" textAnchor="middle" fontSize="7">🏔</text>

          {/* Gondola station bottom */}
          <circle cx="316" cy="273" r="5.5" fill="#f59e0b" opacity="0.92" />
          <text x="316" y="276.5" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="800">G</text>

          {/* Chair 2 mid-station */}
          <circle cx="63" cy="192" r="4.5" fill="#f59e0b" opacity="0.85" />

          {/* ── Navigation dot (animated) ── */}
          {(isNavigating || arrived) && (
            <>
              {/* Pulse ring */}
              <circle cx={dotPos.x} cy={dotPos.y} r="16" fill={trail.color} opacity="0.18">
                <animate attributeName="r" values="12;20;12" dur="1.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.18;0;0.18" dur="1.4s" repeatCount="indefinite" />
              </circle>
              {/* Outer ring */}
              <circle cx={dotPos.x} cy={dotPos.y} r="10" fill={trail.color} opacity="0.28" />
              {/* Main dot */}
              <circle cx={dotPos.x} cy={dotPos.y} r="7" fill={trail.color} stroke="white" strokeWidth="2.5" />
              {/* Center */}
              <circle cx={dotPos.x} cy={dotPos.y} r="2.5" fill="white" />
              {/* Direction arrow cap */}
              <circle cx={dotPos.x} cy={dotPos.y} r="7" fill="none" stroke={trail.color} strokeWidth="1" opacity="0.5" />
            </>
          )}

          {/* Static user dot at summit (not navigating) */}
          {!isNavigating && !arrived && (
            <>
              <circle cx="190" cy="28" r="10" fill="#3b82f6" opacity="0.18">
                <animate attributeName="r" values="8;13;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.18;0;0.18" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="190" cy="28" r="7"   fill="#3b82f6" stroke="white" strokeWidth="2.5" />
              <circle cx="190" cy="28" r="2.5" fill="white" />
            </>
          )}
        </svg>

        {/* ── Floating controls ── */}
        <div style={{ position: 'absolute', right: 10, top: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {([{ Icon: ZoomIn, action: zoomIn }, { Icon: ZoomOut, action: zoomOut }, { Icon: Locate, action: resetView }] as const).map(({ Icon, action }, i) => (
            <button key={i} onClick={action} style={{
              width: 32, height: 32, borderRadius: 9,
              background: 'white', border: '1px solid #e2e8f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
            }}>
              <Icon size={15} color="#374151" />
            </button>
          ))}
        </div>

        {/* ── Difficulty legend ── */}
        <div style={{
          position: 'absolute', left: 10, top: 10,
          background: 'rgba(255,255,255,0.92)', borderRadius: 10,
          padding: '7px 9px', backdropFilter: 'blur(4px)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        }}>
          {(['beginner', 'intermediate', 'expert'] as Difficulty[]).map((d, i) => (
            <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: i < 2 ? 3 : 0 }}>
              <span style={{ fontSize: 8, color: DIFF[d].color, fontWeight: 800 }}>{DIFF[d].symbol}</span>
              <span style={{ fontSize: 8.5, color: '#475569', fontWeight: 500 }}>{DIFF[d].label}</span>
            </div>
          ))}
        </div>

        {/* ── Navigating badge ── */}
        {isNavigating && (
          <div style={{
            position: 'absolute', bottom: 10, left: 10,
            background: 'rgba(15,23,42,0.82)', borderRadius: 10,
            padding: '5px 11px', display: 'flex', alignItems: 'center', gap: 6,
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 11, color: 'white', fontWeight: 700 }}>Live Navigation</span>
          </div>
        )}

        {/* ── Zoom hint ── */}
        {!isNavigating && (
          <div style={{
            position: 'absolute', bottom: 10, right: 10,
            background: 'rgba(255,255,255,0.88)', borderRadius: 8,
            padding: '4px 9px', backdropFilter: 'blur(4px)',
          }}>
            <span style={{ fontSize: 9.5, color: '#64748b', fontWeight: 500 }}>Drag to pan · pinch to zoom</span>
          </div>
        )}
      </div>

      {/* ── Trail Selector ── */}
      <div style={{
        display: 'flex', gap: 8, overflowX: 'auto', padding: '10px 14px 8px',
        background: '#f8fafc', borderTop: '1px solid #e8f4f4',
        scrollbarWidth: 'none',
      }}>
        {TRAILS.map(tr => {
          const ds = DIFF[tr.difficulty];
          const active = tr.id === selectedId;
          return (
            <button key={tr.id} onClick={() => selectTrail(tr.id)} style={{
              flexShrink: 0, padding: '6px 13px', borderRadius: 20,
              background: active ? tr.color : 'white',
              border: `2px solid ${active ? tr.color : '#e2e8f0'}`,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5,
              boxShadow: active ? `0 2px 10px ${tr.color}44` : '0 1px 4px rgba(0,0,0,0.06)',
              transition: 'all 0.2s',
            }}>
              <span style={{ fontSize: 9, color: active ? 'white' : ds.color, fontWeight: 800 }}>{ds.symbol}</span>
              <span style={{ fontSize: 12, color: active ? 'white' : '#374151', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {tr.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Navigation Panel ── */}
      <div style={{ background: 'white', padding: '12px 16px 16px', borderTop: '1px solid #f1f5f9' }}>

        {/* Trail header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3 }}>
              <span style={{ fontSize: 15, fontWeight: 800, color: '#0f172a' }}>{trail.name}</span>
              <span style={{
                fontSize: 9.5, fontWeight: 700, color: 'white',
                background: trail.color, borderRadius: 6, padding: '2px 7px',
              }}>
                {diffStyle.symbol} {diffStyle.label}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: trail.statusColor }} />
              <span style={{ fontSize: 11, color: '#64748b' }}>{trail.status}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {[
              { label: 'Distance', val: isNavigating ? remainingDist : trail.distance },
              { label: 'Est. Time', val: trail.time },
              { label: 'Drop', val: trail.vertical },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{item.val}</div>
                <div style={{ fontSize: 9, color: '#94a3b8', fontWeight: 500, marginTop: 1 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrived banner */}
        {arrived && (
          <div style={{
            background: '#f0fdf4', borderRadius: 12, padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
            border: '1px solid #bbf7d0',
          }}>
            <span style={{ fontSize: 20 }}>🎿</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#15803d' }}>You've arrived at Base Lodge!</div>
              <div style={{ fontSize: 11, color: '#16a34a' }}>Great run on {trail.name}</div>
            </div>
          </div>
        )}

        {/* Live direction card */}
        {isNavigating && !arrived && (
          <div style={{
            background: '#f8fafc', borderRadius: 12, padding: '10px 12px',
            marginBottom: 10, border: '1px solid #e2e8f0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Direction icon */}
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: trail.color + '20',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <ChevronRight size={18} color={trail.color} strokeWidth={2.5} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>
                  {trail.directions[currentStep].text}
                </div>
                <div style={{ fontSize: 11, color: '#64748b' }}>
                  {trail.directions[currentStep].dist}
                  {currentStep < trail.directions.length - 1 && (
                    <span style={{ color: '#94a3b8' }}>
                      {' · '}Then: {trail.directions[Math.min(currentStep + 1, trail.directions.length - 1)].text.split(' ').slice(0, 4).join(' ')}…
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Progress bar */}
            <div style={{ marginTop: 10, height: 4, background: '#e2e8f0', borderRadius: 3 }}>
              <div style={{
                height: '100%', width: `${progress * 100}%`,
                background: `linear-gradient(90deg, ${trail.color}aa, ${trail.color})`,
                borderRadius: 3, transition: 'width 0.15s linear',
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              <span style={{ fontSize: 10, color: '#94a3b8' }}>
                Step {currentStep + 1} of {trail.directions.length}
              </span>
              <span style={{ fontSize: 10, color: '#94a3b8' }}>
                {remainingDist} remaining
              </span>
            </div>
          </div>
        )}

        {/* CTA button */}
        <button
          onClick={isNavigating ? stopNav : startNav}
          style={{
            width: '100%', padding: '13px 0', borderRadius: 14,
            background: isNavigating
              ? 'linear-gradient(135deg,#ef4444,#dc2626)'
              : `linear-gradient(135deg,${TEAL},#00a898)`,
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: isNavigating
              ? '0 4px 14px rgba(239,68,68,0.35)'
              : `0 4px 14px ${TEAL}55`,
            transition: 'all 0.2s',
          }}
        >
          {isNavigating
            ? <Square size={16} color="white" fill="white" />
            : <Play size={16} color="white" fill="white" />}
          <span style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>
            {isNavigating ? 'Stop Navigation' : arrived ? 'Navigate Again' : 'Start Navigation'}
          </span>
        </button>
      </div>
    </div>
  );
}
