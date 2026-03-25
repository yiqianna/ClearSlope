import { Home, Calendar, Navigation2, UserCircle } from 'lucide-react';
import { PageType } from '../App';

interface BottomNavBarProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
}

const TEAL = '#00c8b3';
const INACTIVE = '#94a3b8';

const tabs = [
  { id: 'home' as PageType, label: 'Home', icon: Home },
  { id: 'events' as PageType, label: 'Events', icon: Calendar },
  { id: 'transport' as PageType, label: 'Transport', icon: Navigation2 },
  { id: 'profile' as PageType, label: 'Profile', icon: UserCircle },
];

export function BottomNavBar({ activePage, onNavigate }: BottomNavBarProps) {
  const activeTab = activePage === 'navigation' ? 'home' : activePage;

  return (
    <div
      style={{
        height: 64,
        background: '#ffffff',
        borderTop: '1px solid #f1f5f9',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
        flexShrink: 0,
        paddingBottom: 4,
      }}
    >
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              padding: '6px 0',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'opacity 0.15s',
            }}
          >
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  top: -4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 36,
                  height: 3,
                  background: TEAL,
                  borderRadius: '0 0 6px 6px',
                }}
              />
            )}
            <div
              style={{
                width: 40,
                height: 32,
                borderRadius: 12,
                background: isActive ? `${TEAL}18` : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
            >
              <Icon
                size={20}
                color={isActive ? TEAL : INACTIVE}
                strokeWidth={isActive ? 2.5 : 1.8}
              />
            </div>
            <span
              style={{
                fontSize: 10,
                color: isActive ? TEAL : INACTIVE,
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: isActive ? 700 : 400,
                letterSpacing: '0.01em',
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}