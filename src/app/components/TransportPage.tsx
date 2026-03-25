import { ArrowLeft, Settings, Clock, ChevronRight, Cable, Bus, PhoneCall, Ambulance } from 'lucide-react';
import { useState } from 'react';
import { SkiMap } from './SkiMap';

const TEAL = '#00c8b3';

interface TransportPageProps {
  onBack: () => void;
}

const transportTabs = [
  { icon: Cable, label: 'Lifts' },
  { icon: Bus, label: 'Shuttles' },
  { icon: PhoneCall, label: 'Emergency' },
];

const liftOptions = [
  { label: 'Lift to West Lodge', name: 'Chair 1', status: 'Open', statusColor: '#22c55e' },
  { label: 'Lift to East Lodge', name: 'Chair 2', status: 'Open', statusColor: '#22c55e' },
];

const shuttleOptions = [
  { label: 'Shuttle Service to Parking Lot', name: 'Every 15 mins', status: 'Running', statusColor: TEAL },
];

const essentialServices = [
  { icon: Ambulance, iconColor: '#ef4444', iconBg: '#fff1f0', title: 'Emergency House', sub: 'Located nearby', value: 'Open 24/7', valueColor: '#22c55e' },
  { icon: Bus, iconColor: TEAL, iconBg: `${TEAL}15`, title: 'Shuttle Buses', sub: 'Connects Lodges', value: 'Timely & frequent', valueColor: TEAL },
  { icon: Cable, iconColor: '#0f172a', iconBg: '#f1f5f9', title: 'Lifts', sub: 'From West to East Lodge', value: 'Quick access', valueColor: '#0f172a' },
];

export function TransportPage({ onBack }: TransportPageProps) {
  const [activeTab, setActiveTab] = useState(0);

  const currentOptions = activeTab === 0 ? liftOptions : activeTab === 1 ? shuttleOptions : [];

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
            width: 38,
            height: 38,
            borderRadius: 12,
            background: 'white',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          }}
        >
          <ArrowLeft size={18} color="#0f172a" />
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Transportation
          </div>
          <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
            Get around the resort
          </div>
        </div>
        <button
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: 'white',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          }}
        >
          <Settings size={17} color="#64748b" />
        </button>
      </div>

      {/* ── Transport type tabs ── */}
      <div style={{ padding: '16px 20px 0', display: 'flex', gap: 10 }}>
        {transportTabs.map(({ icon: Icon, label }, i) => (
          <button
            key={label}
            onClick={() => setActiveTab(i)}
            style={{
              flex: 1,
              background: activeTab === i ? TEAL : 'white',
              borderRadius: 16,
              padding: '12px 6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              border: `1.5px solid ${activeTab === i ? TEAL : '#e2e8f0'}`,
              cursor: 'pointer',
              boxShadow: activeTab === i ? `0 4px 14px ${TEAL}35` : '0 1px 6px rgba(0,0,0,0.06)',
              transition: 'all 0.2s',
            }}
          >
            <Icon size={22} color={activeTab === i ? 'white' : '#64748b'} strokeWidth={1.8} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: activeTab === i ? 'white' : '#64748b',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* ── Transport Options section ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Transportation Options
          </span>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>
            Navigate your way around the resort
          </div>
        </div>

        {activeTab === 2 ? (
          <div
            style={{
              marginTop: 12,
              background: '#fff1f0',
              borderRadius: 18,
              padding: '16px',
              border: '1px solid #fecaca',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Ambulance size={24} color="#ef4444" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
                  Emergency Services
                </div>
                <div style={{ fontSize: 12, color: '#ef4444', fontFamily: 'system-ui, sans-serif', fontWeight: 600 }}>
                  Open 24/7 · Always Available
                </div>
              </div>
            </div>
            <button
              style={{
                width: '100%',
                marginTop: 12,
                padding: '12px',
                background: '#ef4444',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                fontSize: 14,
                fontWeight: 700,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Call Emergency House
            </button>
          </div>
        ) : (
          <div
            style={{
              marginTop: 12,
              background: 'white',
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
              border: '1px solid #f1f5f9',
            }}
          >
            {currentOptions.map((opt, i) => (
              <div
                key={opt.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px',
                  borderBottom: i < currentOptions.length - 1 ? '1px solid #f1f5f9' : 'none',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: `${TEAL}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {activeTab === 0 ? <Cable size={22} color={TEAL} strokeWidth={1.8} /> : <Bus size={22} color={TEAL} strokeWidth={1.8} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                    {opt.label}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#0f172a',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {opt.name}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: opt.statusColor,
                    background: `${opt.statusColor}15`,
                    padding: '4px 10px',
                    borderRadius: 8,
                    flexShrink: 0,
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {opt.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Schedule info ── */}
      {activeTab === 1 && (
        <div style={{ padding: '14px 20px 0' }}>
          <div
            style={{
              background: `${TEAL}12`,
              borderRadius: 16,
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              border: `1px solid ${TEAL}30`,
            }}
          >
            <Clock size={16} color={TEAL} />
            <span style={{ fontSize: 13, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
              Next shuttle arrives in <strong style={{ color: TEAL }}>7 minutes</strong>
            </span>
          </div>
        </div>
      )}

      {/* ── Essential Services ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Essential Services
          </span>
        </div>
        <div
          style={{
            background: 'white',
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
            border: '1px solid #f1f5f9',
          }}
        >
          {essentialServices.map((svc, i) => (
            <div
              key={svc.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 16px',
                borderBottom: i < essentialServices.length - 1 ? '1px solid #f1f5f9' : 'none',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: svc.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svc.icon size={20} color={svc.iconColor} strokeWidth={1.8} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#0f172a',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {svc.title}
                </div>
                <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                  {svc.sub}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: svc.valueColor,
                    fontFamily: 'system-ui, sans-serif',
                    textAlign: 'right',
                  }}
                >
                  {svc.value}
                </span>
                <ChevronRight size={14} color="#cbd5e1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Map ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Resort Map & Routes
          </span>
        </div>
        <SkiMap height={200} showLabel="Interactive map of the ski resort and transportation routes" />
      </div>
    </div>
  );
}