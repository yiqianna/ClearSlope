import { useState } from 'react';
import {
  User,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  ChevronRight,
  LogOut,
  MapPin,
  Star,
  Award,
  Snowflake,
  ArrowLeft,
  Users,
  Phone,
  MessageSquare,
  Medal,
  Crown,
  Play,
  Trophy,
  Map,
  Wifi,
  Mountain,
  AlertOctagon,
} from 'lucide-react';

const TEAL = '#00c8b3';
const TEAL_LIGHT = '#e6faf8';
const TEAL_DARK = '#009e8c';

interface ProfilePageProps {
  onLogout: () => void;
  userName: string;
  onNameChange: (name: string) => void;
  userAvatar: string;
  onAvatarChange: (url: string) => void;
}

const stats = [
  { icon: Snowflake, label: 'Runs Today', value: '7' },
  { icon: Award, label: 'Level', value: 'Expert' },
  { icon: Star, label: 'Favorites', value: '12' },
  { icon: MapPin, label: 'Trails', value: '24' },
];

const badges = [
  { icon: Play, iconColor: '#00c8b3', bg: '#e6faf8', label: 'First Run' },
  { icon: Crown, iconColor: '#f59e0b', bg: '#fef3c7', label: 'Slope King' },
  { icon: Snowflake, iconColor: '#0ea5e9', bg: '#eff6ff', label: 'Snow Day' },
  { icon: Trophy, iconColor: '#6366f1', bg: '#eef2ff', label: 'Top Scorer' },
];

const helpArticles = [
  {
    icon: Map,
    iconColor: '#00c8b3',
    title: 'How to Use the Ski Navigation',
    desc: 'Learn how to effectively use our navigation tools on the mountain.',
    author: 'John Doe',
    time: '3 min read',
  },
  {
    icon: Wifi,
    iconColor: '#6366f1',
    title: 'Troubleshooting GPS Issues',
    desc: 'Get tips for resolving GPS-related problems while skiing.',
    author: 'Jane Smith',
    time: '5 min read',
  },
  {
    icon: Shield,
    iconColor: '#22c55e',
    title: 'Best Practices for Safety',
    desc: 'Stay safe on the slopes with our recommended practices.',
    author: 'ClearSlope Team',
    time: '4 min read',
  },
];

const helpReviews = [
  { name: 'Alex', text: 'The navigation tools are incredibly useful & easy to use!', stars: 5 },
  { name: 'Jamie', text: 'Had a great experience thanks to the help page.', stars: 5 },
];

const quickLinks = [
  { icon: Users, iconColor: TEAL, bg: `${TEAL}18`, label: 'Join Our Community', desc: 'Connect with fellow skiers' },
  { icon: Phone, iconColor: '#6366f1', bg: '#eef2ff', label: 'Talk to an Expert', desc: 'Live support available' },
  { icon: MessageSquare, iconColor: '#f59e0b', bg: '#fffbeb', label: 'Feedback Form', desc: 'Help us improve' },
];

// ── Help Center sub-view ────────────────────────────────────────────────────
function HelpCenter({ onBack }: { onBack: () => void }) {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #eafafa 0%, #f4fefd 35%, #ffffff 70%)',
        minHeight: '100%',
        paddingBottom: 24,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '20px 16px 0',
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
            flexShrink: 0,
          }}
        >
          <ArrowLeft size={18} color="#0f172a" />
        </button>
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 17,
            color: '#0f172a',
          }}
        >
          Help Center
        </span>
      </div>

      {/* Hero banner */}
      <div style={{ padding: '16px 16px 0' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #1a2236 0%, #0f1f2e 100%)',
            borderRadius: 20,
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', top: -20, right: -20,
              width: 100, height: 100, borderRadius: 50,
              background: `${TEAL}20`,
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: -30, right: 40,
              width: 60, height: 60, borderRadius: 30,
              background: `${TEAL}15`,
            }}
          />
          <div style={{ width: 48, height: 48, borderRadius: 16, background: `${TEAL}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
            <Mountain size={26} color={TEAL} strokeWidth={1.8} />
          </div>
          <div
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: 6,
            }}
          >
            Need help on the slopes?
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: 14,
              lineHeight: 1.5,
            }}
          >
            Find answers, guides, and expert support to make your ski adventure amazing.
          </div>
          <button
            style={{
              background: TEAL,
              borderRadius: 12,
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontSize: 13, color: 'white', fontFamily: 'system-ui, sans-serif' }}>
              Browse Resources
            </span>
            <ChevronRight size={14} color="white" />
          </button>
        </div>
      </div>

      {/* Helpful Resources */}
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 15, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Helpful Resources
          </div>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>
            Find answers to common questions
          </div>
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
          {helpArticles.map((article, i) => {
            const Icon = article.icon;
            return (
              <div
                key={article.title}
                style={{
                  display: 'flex',
                  gap: 12,
                  padding: '14px 16px',
                  borderBottom: i < helpArticles.length - 1 ? '1px solid #f1f5f9' : 'none',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 14,
                    background: `${article.iconColor}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={article.iconColor} strokeWidth={1.8} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 14,
                      color: '#0f172a',
                      fontFamily: 'system-ui, sans-serif',
                      marginBottom: 3,
                      lineHeight: 1.3,
                    }}
                  >
                    {article.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12, color: '#64748b',
                      fontFamily: 'system-ui, sans-serif',
                      lineHeight: 1.4, marginBottom: 8,
                    }}
                  >
                    {article.desc}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div
                      style={{
                        width: 22, height: 22, borderRadius: 11,
                        background: `${TEAL}22`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <span style={{ fontSize: 10, color: TEAL, fontFamily: 'system-ui, sans-serif' }}>
                        {article.author[0]}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                      {article.author}
                    </span>
                    <span style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'system-ui, sans-serif', marginLeft: 'auto' }}>
                      {article.time}
                    </span>
                  </div>
                </div>
                <ChevronRight size={16} color="#cbd5e1" style={{ flexShrink: 0, marginTop: 4 }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* User Reviews */}
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 15, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            What Users Are Saying
          </div>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>
            Real feedback from our users
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 2 }}>
          {helpReviews.map((review) => (
            <div
              key={review.name}
              style={{
                flexShrink: 0, width: 200,
                background: 'white', borderRadius: 18,
                padding: '14px 16px',
                boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div
                  style={{
                    width: 30, height: 30, borderRadius: 15,
                    background: `${TEAL}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: 13, color: TEAL, fontFamily: 'system-ui, sans-serif' }}>
                    {review.name[0]}
                  </span>
                </div>
                <span style={{ fontSize: 13, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
                  {review.name}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={13} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>
              <p style={{ fontSize: 13, color: '#475569', fontFamily: 'system-ui, sans-serif', lineHeight: 1.5, margin: 0 }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ fontSize: 15, color: '#0f172a', fontFamily: 'system-ui, sans-serif', marginBottom: 12 }}>
          Quick Links
        </div>
        <div
          style={{
            background: 'white', borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
            border: '1px solid #f1f5f9',
          }}
        >
          {quickLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <button
                key={link.label}
                style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 16px',
                  border: 'none',
                  borderBottom: i < quickLinks.length - 1 ? '1px solid #f1f5f9' : 'none',
                  background: 'transparent', cursor: 'pointer', textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: link.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color={link.iconColor} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                    {link.desc}
                  </div>
                </div>
                <ChevronRight size={16} color="#cbd5e1" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Emergency CTA */}
      <div style={{ padding: '20px 16px 0' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            borderRadius: 18, padding: '16px 20px',
            display: 'flex', alignItems: 'center', gap: 14,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(239,68,68,0.3)',
          }}
        >
          <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <AlertOctagon size={26} color="white" strokeWidth={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, color: 'white', fontFamily: 'system-ui, sans-serif' }}>
              Emergency Help
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontFamily: 'system-ui, sans-serif' }}>
              Tap to contact ski patrol immediately
            </div>
          </div>
          <ChevronRight size={18} color="white" />
        </div>
      </div>
    </div>
  );
}

// ── Main Profile view ───────────────────────────────────────────────────────
export function ProfilePage({ onLogout, userName, onNameChange, userAvatar, onAvatarChange }: ProfilePageProps) {
  const [view, setView] = useState<'main' | 'help'>('main');
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(userName);

  if (view === 'help') {
    return <HelpCenter onBack={() => setView('main')} />;
  }

  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Edit Profile', subtitle: 'Update your personal info', action: undefined as (() => void) | undefined },
        { icon: Bell, label: 'Notifications', subtitle: 'Manage your alerts', action: undefined as (() => void) | undefined },
        { icon: Shield, label: 'Privacy & Security', subtitle: 'Control your data', action: undefined as (() => void) | undefined },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: Settings, label: 'App Settings', subtitle: 'Theme, language & more', action: undefined as (() => void) | undefined },
        { icon: HelpCircle, label: 'Help Center', subtitle: 'FAQs, guides & support', action: () => setView('help') },
      ],
    },
  ];

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #eafafa 0%, #f4fefd 30%, #ffffff 65%)',
        minHeight: '100%',
        paddingBottom: 24,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${TEAL} 0%, ${TEAL_DARK} 100%)`,
          padding: '28px 20px 56px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', top: -40, right: -40,
            width: 160, height: 160, borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: -20, left: -30,
            width: 120, height: 120, borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 12,
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            My Profile
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: 72, height: 72, borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src={userAvatar}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute', bottom: 2, right: 2,
                  width: 18, height: 18, borderRadius: '50%',
                  background: '#22c55e', border: '2px solid white',
                }}
              />
            </div>

            <div>
              {editingName ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        onNameChange(nameInput.trim() || userName);
                        setEditingName(false);
                      }
                      if (e.key === 'Escape') setEditingName(false);
                    }}
                    autoFocus
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.5)',
                      borderRadius: 8,
                      padding: '4px 10px',
                      outline: 'none',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      width: 140,
                    }}
                  />
                  <button
                    onClick={() => {
                      onNameChange(nameInput.trim() || userName);
                      setEditingName(false);
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.25)',
                      border: 'none',
                      borderRadius: 8,
                      padding: '4px 10px',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: 12,
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, cursor: 'pointer' }}
                  onClick={() => { setNameInput(userName); setEditingName(true); }}
                >
                  <h2
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontSize: 20, color: '#ffffff',
                      margin: 0,
                    }}
                  >
                    {userName}
                  </h2>
                  <User size={14} color="rgba(255,255,255,0.6)" />
                </div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={12} color="rgba(255,255,255,0.8)" />
                <span
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: 13, color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  ClearSlope Resort Member
                </span>
              </div>
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  marginTop: 8,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 20, padding: '3px 10px',
                }}
              >
                <Star size={11} color="#fbbf24" fill="#fbbf24" />
                <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 11, color: '#fff' }}>
                  Gold Member
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats card */}
      <div style={{ padding: '0 16px', marginTop: -30, position: 'relative', zIndex: 2 }}>
        <div
          style={{
            background: '#ffffff', borderRadius: 20,
            padding: '16px 8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            display: 'flex', justifyContent: 'space-around',
          }}
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 4, flex: 1,
              }}
            >
              <div
                style={{
                  width: 36, height: 36, borderRadius: 12,
                  background: TEAL_LIGHT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 2,
                }}
              >
                <Icon size={16} color={TEAL} />
              </div>
              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 15, color: '#0f172a' }}>
                {value}
              </span>
              <span
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 10, color: '#94a3b8',
                  textAlign: 'center', letterSpacing: '0.01em',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div style={{ padding: '20px 16px 0' }}>
        <p
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 13, color: '#64748b',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Achievements
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          {badges.map(({ icon: Icon, iconColor, bg, label }) => (
            <div
              key={label}
              style={{
                flex: 1, background: '#ffffff', borderRadius: 14,
                padding: '12px 6px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 6,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={18} color={iconColor} strokeWidth={1.8} />
              </div>
              <span
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 9, color: '#64748b',
                  textAlign: 'center', letterSpacing: '0.01em',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <div key={section.title} style={{ padding: '20px 16px 0' }}>
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 13, color: '#64748b',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            {section.title}
          </p>
          <div
            style={{
              background: '#ffffff', borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            {section.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  <button
                    onClick={item.action}
                    style={{
                      width: '100%',
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '14px 16px',
                      background: 'transparent', border: 'none',
                      cursor: 'pointer', textAlign: 'left',
                    }}
                  >
                    <div
                      style={{
                        width: 38, height: 38, borderRadius: 12,
                        background: TEAL_LIGHT,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color={TEAL} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          fontSize: 14, color: '#0f172a',
                          margin: 0, marginBottom: 2,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          fontSize: 12, color: '#94a3b8',
                          margin: 0,
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                    <ChevronRight size={16} color="#cbd5e1" />
                  </button>
                  {idx < section.items.length - 1 && (
                    <div style={{ height: 1, background: '#f8fafc', marginLeft: 68 }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Log Out Button */}
      <div style={{ padding: '20px 16px 0' }}>
        <button
          onClick={onLogout}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 10, padding: '15px',
            background: '#fff5f5',
            border: '1.5px solid #fecaca',
            borderRadius: 18, cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#fee2e2'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#fff5f5'; }}
        >
          <LogOut size={18} color="#ef4444" />
          <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 15, color: '#ef4444' }}>
            Log Out
          </span>
        </button>
      </div>

      {/* App version */}
      <p
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 11, color: '#cbd5e1',
          textAlign: 'center', marginTop: 20,
        }}
      >
        ClearSlope v2.1.0
      </p>
    </div>
  );
}