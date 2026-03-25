import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SignUpPageProps {
  onBack: () => void;
  onSignUp: () => void;
  onLogin: () => void;
}

export function SignUpPage({ onBack, onSignUp, onLogin }: SignUpPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeToTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    
    // Mock sign up - in production, this would create an account
    onSignUp();
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Password strength checker
  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { strength: 0, label: '', color: '#e2e8f0' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#00c8b3'];
    
    return {
      strength: (strength / 4) * 100,
      label: labels[strength - 1] || 'Weak',
      color: colors[strength - 1] || '#ef4444',
    };
  };

  const passwordStrength = getPasswordStrength();

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
          height: 180,
          flexShrink: 0,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1735749330165-cb48e2438aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2llciUyMHNsb3BlcyUyMGFkdmVudHVyZSUyMGFjdGlvbnxlbnwxfHx8fDE3NzM4MDc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Skier action"
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
            Create Account
          </h1>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            Join ClearSlope today
          </p>
        </div>
      </div>

      {/* Sign Up Form */}
      <div
        style={{
          flex: 1,
          padding: '32px 24px 24px',
          overflowY: 'auto',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="fullName"
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                color: '#0f172a',
                marginBottom: 8,
              }}
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              placeholder="John Doe"
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
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
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
          <div style={{ marginBottom: 12 }}>
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
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                placeholder="At least 8 characters"
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

          {/* Password Strength Indicator */}
          {formData.password && (
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  height: 4,
                  background: '#e2e8f0',
                  borderRadius: 2,
                  marginBottom: 6,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${passwordStrength.strength}%`,
                    background: passwordStrength.color,
                    transition: 'all 0.3s',
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 12,
                  color: passwordStrength.color,
                  fontWeight: 600,
                }}
              >
                {passwordStrength.label}
              </span>
            </div>
          )}

          {/* Confirm Password Input */}
          <div style={{ marginBottom: 24 }}>
            <label
              htmlFor="confirmPassword"
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                color: '#0f172a',
                marginBottom: 8,
              }}
            >
              Confirm Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => updateField('confirmPassword', e.target.value)}
                placeholder="Re-enter your password"
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
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <div
                  style={{
                    position: 'absolute',
                    right: 48,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#10b981',
                  }}
                >
                  <Check size={20} />
                </div>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              cursor: 'pointer',
              fontSize: 13,
              color: '#64748b',
              marginBottom: 24,
            }}
          >
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              style={{
                width: 18,
                height: 18,
                cursor: 'pointer',
                accentColor: '#00c8b3',
                marginTop: 2,
                flexShrink: 0,
              }}
            />
            <span>
              I agree to the{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms of Service');
                }}
                style={{ color: '#00c8b3', textDecoration: 'none', fontWeight: 600 }}
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Privacy Policy');
                }}
                style={{ color: '#00c8b3', textDecoration: 'none', fontWeight: 600 }}
              >
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Sign Up Button */}
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
              marginBottom: 24,
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
            Create Account
          </button>

          {/* Log In Link */}
          <div
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: '#64748b',
            }}
          >
            Already have an account?{' '}
            <button
              type="button"
              onClick={onLogin}
              style={{
                background: 'none',
                border: 'none',
                color: '#00c8b3',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
