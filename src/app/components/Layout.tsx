import { Outlet, useNavigate, useLocation } from 'react-router';
import { Home, Calendar, MapPin, Phone } from 'lucide-react';

const TABS = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Calendar, label: 'Events', path: '/events' },
  { icon: MapPin, label: 'Transport', path: '/transport' },
  { icon: Phone, label: 'Help', path: '/help' },
];

function getActiveTab(pathname: string) {
  if (pathname === '/' || pathname === '/navigation') return '/';
  if (pathname.startsWith('/events')) return '/events';
  if (pathname.startsWith('/transport')) return '/transport';
  if (pathname.startsWith('/help')) return '/help';
  return '/';
}

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeTab = getActiveTab(pathname);

  return (
    <div
      className="h-full flex flex-col"
      style={{
        background:
          'linear-gradient(180deg, #ffffff 0%, #baeee9 28%, #95ced6 52%, #e8f8f6 80%, #ffffff 100%)',
      }}
    >
      {/* Scrollable page content */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="shrink-0 bg-white border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.07)]">
        <div className="flex items-center justify-around px-2 py-2.5">
          {TABS.map(({ icon: Icon, label, path }) => {
            const active = activeTab === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className="flex flex-col items-center gap-1 px-4 py-1 rounded-2xl relative transition-all active:scale-95"
              >
                {active && (
                  <span className="absolute -top-0.5 w-6 h-1 bg-[#00c8b3] rounded-full" />
                )}
                <Icon
                  size={22}
                  className={active ? 'text-[#00c8b3]' : 'text-gray-400'}
                  strokeWidth={active ? 2.5 : 1.8}
                />
                <span
                  className={`text-[10px] font-medium ${
                    active ? 'text-[#00c8b3]' : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
