import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginPageProps {
  onBack: () => void;
  onLogin: () => void;
  onSignUp: () => void;
}

export function LoginPage({ onBack, onLogin, onSignUp }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would validate credentials
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#f8fafc',
        position: 'relative',
      }}
    >
      {/* Header with Image */}
      <div
        style={{
          position: 'relative',
          height: 220,
          flexShrink: 0,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1671185251262-7ac8fedc2942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwbW91bnRhaW4lMjBsYW5kc2NhcGUlMjBwZWFrc3xlbnwxfHx8fDE3NzM4MDc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Mountain peaks"
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
            background: 'linear-gradient(180deg, rgba(0, 200, 179, 0.3) 0%, rgba(0, 200, 179, 0.6) 100%)',
          }}
        />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Title */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 24,
          }}
        >
          <h1
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: '#fff',
              marginBottom: 4,
              letterSpacing: '-0.02em',
            }}
          >
            Welcome Back
          </h1>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            Log in to access your account
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div
        style={{
          flex: 1,
          padding: '32px 24px 24px',
          overflowY: 'auto',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                color: '#0f172a',
                marginBottom: 8,
              }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
                background: '#fff',
                fontSize: 15,
                color: '#0f172a',
                outline: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00c8b3';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 200, 179, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: 16 }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                color: '#0f172a',
                marginBottom: 8,
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '14px 48px 14px 16px',
                  borderRadius: 12,
                  border: '1px solid #e2e8f0',
                  background: '#fff',
                  fontSize: 15,
                  color: '#0f172a',
                  outline: 'none',
                  transition: 'all 0.2s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00c8b3';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 200, 179, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b',
                  padding: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 32,
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
                fontSize: 14,
                color: '#64748b',
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: 18,
                  height: 18,
                  cursor: 'pointer',
                  accentColor: '#00c8b3',
                }}
              />
              Remember me
            </label>
            
            <button
              type="button"
              onClick={() => alert('Password reset link sent to your email')}
              style={{
                background: 'none',
                border: 'none',
                color: '#00c8b3',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: 14,
              background: 'linear-gradient(135deg, #00c8b3 0%, #00a89a 100%)',
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              marginBottom: 16,
              boxShadow: '0 4px 12px rgba(0, 200, 179, 0.3)',
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
            Log In
          </button>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
            <span style={{ fontSize: 12, color: '#94a3b8' }}>OR</span>
            <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
          </div>

          {/* Social Login Buttons */}
          <div style={{ marginBottom: 24 }}>
            <button
              type="button"
              onClick={() => alert('Google sign-in coming soon')}
              style={{
                width: '100%',
                padding: '14px 24px',
                borderRadius: 12,
                background: '#fff',
                color: '#0f172a',
                fontSize: 15,
                fontWeight: 600,
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
                marginBottom: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                  fill="#4285F4"
                />
                <path
                  d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                  fill="#34A853"
                />
                <path
                  d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                  fill="#FBBC05"
                />
                <path
                  d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => alert('Apple sign-in coming soon')}
              style={{
                width: '100%',
                padding: '14px 24px',
                borderRadius: 12,
                background: '#000',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#000';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2.42a4.44 4.44 0 0 0-3 1.53 4.17 4.17 0 0 0-1 2.72 3.52 3.52 0 0 0 2.94-1.48zM10 20c1.42 0 2.05-.93 3.82-.93 1.8 0 2.23.91 3.85.91 1.59 0 2.67-1.45 3.66-2.88a10.36 10.36 0 0 0 1.67-3.4c-3.61-1.4-4.18-6.68-.57-7.87A5.42 5.42 0 0 0 18 3.35a6.42 6.42 0 0 0-4.06 1.44 3.63 3.63 0 0 1-2.12.61 4.16 4.16 0 0 1-2.14-.71A6.53 6.53 0 0 0 6.06 3.3C3.25 3.3.85 5.52.85 9.15A10.84 10.84 0 0 0 2.36 14c.92 1.64 2.14 3.7 3.82 3.7 1.56 0 2.03-.94 3.47-.94z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Sign Up Link */}
          <div
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: '#64748b',
            }}
          >
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSignUp}
              style={{
                background: 'none',
                border: 'none',
                color: '#00c8b3',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
