import { ImageWithFallback } from './figma/ImageWithFallback';

interface WelcomePageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function WelcomePage({ onGetStarted, onLogin }: WelcomePageProps) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #00c8b3 0%, #00a89a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1707873951299-08177e5ea02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2klMjByZXNvcnQlMjBtb3VudGFpbiUyMHNub3clMjBzdW5yaXNlfGVufDF8fHx8MTc3MzgwNzQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Mountain resort"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0, 200, 179, 0.7) 0%, rgba(0, 168, 154, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 24px 40px',
        }}
      >
        {/* Logo and Title */}
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                d="M24 4L6 18L24 28L42 18L24 4Z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M24 28L6 18V36L24 44V28Z"
                fill="white"
                opacity="0.7"
              />
              <path
                d="M24 28V44L42 36V18L24 28Z"
                fill="white"
                opacity="0.5"
              />
            </svg>
          </div>
          
          <h1
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: '#fff',
              marginBottom: 8,
              letterSpacing: '-0.02em',
            }}
          >
            ClearSlope
          </h1>
          
          <p
            style={{
              fontSize: 18,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 12,
            }}
          >
            Your Ultimate Ski Resort Companion
          </p>
          
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.5,
              maxWidth: 300,
            }}
          >
            Real-time trail maps, lift status, events, and everything you need for the perfect day on the slopes.
          </p>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Features */}
          <div style={{ marginBottom: 32 }}>
            {[
              { icon: '🗺️', text: 'Live Trail Maps & Hazard Reports' },
              { icon: '🎿', text: 'Real-Time Lift & Transport Status' },
              { icon: '🎉', text: 'Events, Classes & Competitions' },
              { icon: '🆘', text: 'Emergency Services & Help Center' },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <span style={{ fontSize: 20 }}>{feature.icon}</span>
                <span style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.9)' }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <button
            onClick={onGetStarted}
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: 14,
              background: '#fff',
              color: '#00c8b3',
              fontSize: 16,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              marginBottom: 12,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.2s',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Get Started
          </button>

          <button
            onClick={onLogin}
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: 14,
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Already have an account? Log In
          </button>
        </div>
      </div>
    </div>
  );
}
