import { ArrowLeft, Settings, Volume2, AlertTriangle, Mountain, Snowflake, Thermometer, Flag, Wind, Cable, Building2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { InteractiveTrailMap } from './InteractiveTrailMap';

const TEAL = '#00c8b3';

interface NavigationPageProps {
  onBack: () => void;
}

const cautions = [
  {
    icon: <AlertTriangle size={18} color="#f59e0b" fill="#fef3c7" strokeWidth={2} />,
    bg: '#fffbeb',
    title: 'Thin Cover Ahead',
    subtitle: 'Proceed with caution.',
    distance: '356 m',
  },
  {
    icon: <Mountain size={18} color="#ef4444" strokeWidth={2} />,
    bg: '#fff1f0',
    title: 'Cliff Ahead',
    subtitle: 'Dangerous area!',
    distance: '100 m',
  },
];

const conditions = [
  { icon: <Snowflake size={18} color={TEAL} />, label: 'Snow Depth', value: '12 inches', valueColor: '#0f172a' },
  { icon: <Thermometer size={18} color="#3b82f6" />, label: 'Temperature', value: '28°F', valueColor: '#3b82f6' },
  { icon: <AlertTriangle size={18} color="#22c55e" />, label: 'Avalanche Risk', value: 'Low', valueColor: '#22c55e' },
];

export function NavigationPage({ onBack }: NavigationPageProps) {
  const [voiceOn, setVoiceOn] = useState(true);

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #eafafa 0%, #f4fefd 35%, #ffffff 70%)',
        minHeight: '100%',
        paddingBottom: 20,
      }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px 0',
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: 38, height: 38, borderRadius: 12,
            background: 'white', border: '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', flexShrink: 0,
          }}
        >
          <ArrowLeft size={18} color="#0f172a" />
        </button>
        <span style={{
          fontSize: 17, fontWeight: 700, color: '#0f172a',
          fontFamily: 'system-ui, sans-serif', flex: 1, textAlign: 'center',
        }}>
          Trail Navigation
        </span>
        <button style={{
          width: 38, height: 38, borderRadius: 12,
          background: 'white', border: '1px solid #e2e8f0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        }}>
          <Settings size={17} color="#64748b" />
        </button>
      </div>

      {/* ── Interactive Trail Map ── */}
      <div style={{ marginTop: 14 }}>
        <InteractiveTrailMap />
      </div>

      {/* ── Voice Navigation toggle ── */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{
          background: '#1a2236', borderRadius: 18, padding: '14px 18px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 4px 16px rgba(26,34,54,0.25)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 12,
              background: `${'#00c8b3'}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Volume2 size={18} color="#00c8b3" />
            </div>
            <span style={{ fontSize: 15, fontWeight: 600, color: 'white', fontFamily: 'system-ui, sans-serif' }}>
              Voice Navigation
            </span>
          </div>
          <button
            onClick={() => setVoiceOn(!voiceOn)}
            style={{
              width: 72, height: 32, borderRadius: 16,
              background: voiceOn ? '#00c8b3' : '#374053',
              border: 'none', cursor: 'pointer', position: 'relative',
              transition: 'background 0.25s',
              display: 'flex', alignItems: 'center', padding: '0 4px',
              justifyContent: voiceOn ? 'flex-end' : 'flex-start',
            }}
          >
            <div style={{ width: 24, height: 24, borderRadius: 12, background: 'white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }} />
            <span style={{
              position: 'absolute', left: voiceOn ? 8 : 'auto', right: voiceOn ? 'auto' : 8,
              fontSize: 11, fontWeight: 700, color: voiceOn ? 'white' : '#94a3b8',
              fontFamily: 'system-ui, sans-serif',
            }}>
              {voiceOn ? 'ON' : 'OFF'}
            </span>
          </button>
        </div>
      </div>

      {/* ── Caution Sections ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Caution Sections
          </span>
        </div>
        <div style={{
          background: 'white', borderRadius: 18, overflow: 'hidden',
          boxShadow: '0 2px 14px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9',
        }}>
          {cautions.map((c, i) => (
            <div key={c.title} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
              borderBottom: i < cautions.length - 1 ? '1px solid #f1f5f9' : 'none',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12, background: c.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>{c.title}</div>
                <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>{c.subtitle}</div>
              </div>
              <div style={{
                fontSize: 12, fontWeight: 700, color: '#64748b', fontFamily: 'system-ui, sans-serif',
                background: '#f8fafc', padding: '4px 10px', borderRadius: 8, flexShrink: 0,
              }}>
                {c.distance}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Report Hazard ── */}
      <div style={{ padding: '14px 20px 0' }}>
        <button style={{
          width: '100%', padding: '14px 0', background: 'white',
          border: '1.5px solid #ef4444', borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          cursor: 'pointer', boxShadow: '0 2px 10px rgba(239,68,68,0.12)',
        }}>
          <Flag size={17} color="#ef4444" />
          <span style={{ fontSize: 15, fontWeight: 700, color: '#ef4444', fontFamily: 'system-ui, sans-serif' }}>
            Report Hazard
          </span>
        </button>
      </div>

      {/* ── Current Conditions ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 4 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>Current Conditions</div>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>Know before you go!</div>
        </div>
        <div style={{
          background: 'white', borderRadius: 18, overflow: 'hidden',
          boxShadow: '0 2px 14px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9', marginTop: 12,
        }}>
          {conditions.map((cond, i) => (
            <div key={cond.label} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
              borderBottom: i < conditions.length - 1 ? '1px solid #f1f5f9' : 'none',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12, background: '#f8fafc',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {cond.icon}
              </div>
              <span style={{ flex: 1, fontSize: 14, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>{cond.label}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: cond.valueColor, fontFamily: 'system-ui, sans-serif' }}>{cond.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick tabs ── */}
      <div style={{ padding: '20px 20px 0', display: 'flex', gap: 10 }}>
        {[
          { icon: Wind,       iconColor: '#0ea5e9', bg: '#eff6ff', label: 'Trails'     },
          { icon: Cable,      iconColor: '#00c8b3', bg: '#e6faf8', label: 'Lifts'      },
          { icon: Building2,  iconColor: '#6366f1', bg: '#eef2ff', label: 'Facilities' },
          { icon: ShieldCheck,iconColor: '#22c55e', bg: '#f0fdf4', label: 'Safety'     },
        ].map(({ icon: Icon, iconColor, bg, label }) => (
          <button key={label} style={{
            flex: 1, background: 'white', borderRadius: 16,
            padding: '12px 4px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            boxShadow: '0 2px 10px rgba(0,0,0,0.06)', border: '1px solid #f0f9f9', cursor: 'pointer',
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 11, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={18} color={iconColor} strokeWidth={1.8} />
            </div>
            <span style={{ fontSize: 10, color: '#475569', fontFamily: 'system-ui, sans-serif', fontWeight: 500 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}