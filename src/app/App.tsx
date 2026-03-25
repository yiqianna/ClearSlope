import { useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { HomePage } from './components/HomePage';
import { NavigationPage } from './components/NavigationPage';
import { EventsPage } from './components/EventsPage';
import { TransportPage } from './components/TransportPage';
import { ProfilePage } from './components/ProfilePage';
import { BottomNavBar } from './components/BottomNavBar';

export type PageType = 'home' | 'navigation' | 'events' | 'transport' | 'profile';
export type AuthScreen = 'welcome' | 'login' | 'signup' | null;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>('welcome');
  const [activePage, setActivePage] = useState<PageType>('home');
  const [userName, setUserName] = useState('Alex Johnson');
  const [userAvatar, setUserAvatar] = useState(
    'https://images.unsplash.com/photo-1672437738193-cb484d5e2831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80'
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    setAuthScreen(null);
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setAuthScreen(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthScreen('welcome');
    setActivePage('home');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #a8d8d8 0%, #7fbfbf 50%, #a8d8d8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      {/* Phone Frame */}
      <div style={{ position: 'relative', width: 390, height: 844, flexShrink: 0 }}>
        {/* Phone body */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 46,
            background: 'linear-gradient(180deg, #1c1c2e 0%, #111120 100%)',
            boxShadow:
              '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}
        />
        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -4, top: 120, width: 4, height: 30, background: '#2a2a3e', borderRadius: '4px 0 0 4px' }} />
        <div style={{ position: 'absolute', left: -4, top: 165, width: 4, height: 50, background: '#2a2a3e', borderRadius: '4px 0 0 4px' }} />
        <div style={{ position: 'absolute', left: -4, top: 225, width: 4, height: 50, background: '#2a2a3e', borderRadius: '4px 0 0 4px' }} />
        <div style={{ position: 'absolute', right: -4, top: 150, width: 4, height: 70, background: '#2a2a3e', borderRadius: '0 4px 4px 0' }} />

        {/* Screen */}
        <div
          style={{
            position: 'absolute',
            inset: 4,
            borderRadius: 43,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            background: '#fff',
          }}
        >
          {/* Status bar */}
          <div
            style={{
              height: 44,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              paddingLeft: 26,
              paddingRight: 22,
              paddingBottom: 6,
              background: 'transparent',
            }}
          >
            <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700, color: '#0f172a' }}>
              9:41
            </span>
            <div style={{ width: 90, height: 20, background: '#0f172a', borderRadius: 12 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {/* Signal */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <rect x="0" y="7" width="3" height="5" rx="0.8" fill="#0f172a" />
                <rect x="4.5" y="5" width="3" height="7" rx="0.8" fill="#0f172a" />
                <rect x="9" y="2.5" width="3" height="9.5" rx="0.8" fill="#0f172a" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill="#0f172a" opacity="0.3" />
              </svg>
              {/* Battery */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <div
                  style={{
                    width: 21,
                    height: 11,
                    border: '1.5px solid #0f172a',
                    borderRadius: 3,
                    padding: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ width: '75%', height: '100%', background: '#0f172a', borderRadius: 1 }} />
                </div>
                <div style={{ width: 2, height: 5, background: '#0f172a', borderRadius: 1 }} />
              </div>
            </div>
          </div>

          {/* Page content */}
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {!isAuthenticated && authScreen === 'welcome' && (
                <WelcomePage
                  onGetStarted={() => setAuthScreen('signup')}
                  onLogin={() => setAuthScreen('login')}
                />
              )}
              {!isAuthenticated && authScreen === 'login' && (
                <LoginPage
                  onBack={() => setAuthScreen('welcome')}
                  onLogin={handleLogin}
                  onSignUp={() => setAuthScreen('signup')}
                />
              )}
              {!isAuthenticated && authScreen === 'signup' && (
                <SignUpPage
                  onBack={() => setAuthScreen('welcome')}
                  onSignUp={handleSignUp}
                  onLogin={() => setAuthScreen('login')}
                />
              )}
              {isAuthenticated && activePage === 'home' && <HomePage onNavigate={setActivePage} userName={userName} userAvatar={userAvatar} />}
              {isAuthenticated && activePage === 'navigation' && <NavigationPage onBack={() => setActivePage('home')} />}
              {isAuthenticated && activePage === 'events' && <EventsPage onBack={() => setActivePage('home')} userAvatar={userAvatar} userName={userName} />}
              {isAuthenticated && activePage === 'transport' && <TransportPage onBack={() => setActivePage('home')} />}
              {isAuthenticated && activePage === 'profile' && <ProfilePage onLogout={handleLogout} userName={userName} onNameChange={setUserName} userAvatar={userAvatar} onAvatarChange={setUserAvatar} />}
            </div>
            {isAuthenticated && <BottomNavBar activePage={activePage} onNavigate={setActivePage} />}
          </div>
        </div>
      </div>
    </div>
  );
}