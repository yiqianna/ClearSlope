import { ExternalLink, MapPin } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Crystal+Mountain+Ski+Resort+Washington';

interface SkiMapProps {
  height?: number;
  showLabel?: string;
  mapsUrl?: string;
  showGoogleMaps?: boolean;
}

export function SkiMap({ height = 220, showLabel, mapsUrl = GOOGLE_MAPS_URL, showGoogleMaps = true }: SkiMapProps) {
  const openMaps = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        width: '100%',
        height,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(160deg, #9ecece 0%, #7db8b8 50%, #a5cbcb 100%)',
      }}
    >
      {/* Map SVG */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 350 220"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Terrain fill */}
        <path d="M 210 130 Q 290 140 350 190 L 350 220 L 210 220 Z" fill="rgba(148,185,185,0.65)" />
        <path d="M 260 60 Q 310 80 350 100 L 350 160 L 250 140 Z" fill="rgba(148,185,185,0.4)" />

        {/* Main trails */}
        <path d="M 40 10 L 180 90 L 310 210" stroke="white" strokeWidth="11" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 80 0 L 200 100 L 340 175" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <path d="M 0 80 L 180 75 L 350 85" stroke="white" strokeWidth="11" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 0 130 L 140 120 L 260 155 L 350 140" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
        <path d="M 150 0 L 155 220" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.75" />
        <path d="M 220 0 L 200 80 L 220 220" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.55" />
        <path d="M 0 190 L 200 180 L 280 200" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>

      {/* Location pin */}
      <div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            background: '#00c8b3',
            borderRadius: 17,
            border: '3px solid white',
            boxShadow: '0 4px 16px rgba(0,200,179,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MapPin size={16} color="white" fill="white" strokeWidth={1} />
        </div>
        <div style={{ width: 2, height: 6, background: 'rgba(0,200,179,0.8)' }} />
        <div style={{ width: 8, height: 4, background: 'rgba(0,200,179,0.3)', borderRadius: 4 }} />
      </div>

      {/* Overlay gradient + label */}
      {showLabel && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(0deg, rgba(0,0,0,0.58) 0%, transparent 100%)',
            padding: '40px 16px 14px',
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: 2,
            }}
          >
            You are at
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'white', fontFamily: 'system-ui, sans-serif' }}>
            {showLabel}
          </div>
        </div>
      )}

      {/* Google Maps button */}
      {showGoogleMaps && (
        <button
          onClick={openMaps}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'white',
            borderRadius: 10,
            padding: '6px 10px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
          }}
        >
          {/* Google Maps "G" colored dot */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
            <circle cx="12" cy="9" r="2.8" fill="white" />
          </svg>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#1a73e8',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.01em',
            }}
          >
            Google Maps
          </span>
          <ExternalLink size={10} color="#1a73e8" />
        </button>
      )}
    </div>
  );
}