import { ArrowLeft, Settings, ChevronRight, Star, Users, Phone, MessageSquare } from 'lucide-react';

const TEAL = '#00c8b3';

interface HelpPageProps {
  onBack: () => void;
}

const articles = [
  {
    icon: '🗺️',
    title: 'How to Use the Ski Navigation',
    desc: 'Learn how to effectively use our navigation tools on the mountain.',
    author: 'John Doe',
    time: '3 min read',
  },
  {
    icon: '📡',
    title: 'Troubleshooting GPS Issues',
    desc: 'Get tips for resolving GPS-related problems while skiing.',
    author: 'Jane Smith',
    time: '5 min read',
  },
  {
    icon: '🛡️',
    title: 'Best Practices for Safety',
    desc: 'Stay safe on the slopes with our recommended practices.',
    author: 'ClearSlope Team',
    time: '4 min read',
  },
];

const reviews = [
  { name: 'Alex', text: 'The navigation tools are incredibly useful & easy to use!', stars: 5 },
  { name: 'Jamie', text: 'Had a great experience thanks to the help page.', stars: 5 },
];

const quickLinks = [
  { icon: <Users size={18} color={TEAL} />, bg: `${TEAL}18`, label: 'Join Our Community', desc: 'Connect with fellow skiers' },
  { icon: <Phone size={18} color="#6366f1" />, bg: '#eef2ff', label: 'Talk to an Expert', desc: 'Live support available' },
  { icon: <MessageSquare size={18} color="#f59e0b" />, bg: '#fffbeb', label: 'Feedback Form', desc: 'Help us improve' },
];

export function HelpPage({ onBack }: HelpPageProps) {
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
        <span
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: '#0f172a',
            fontFamily: 'system-ui, sans-serif',
            flex: 1,
            textAlign: 'center',
          }}
        >
          Help Center
        </span>
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

      {/* ── Hero banner ── */}
      <div style={{ padding: '16px 20px 0' }}>
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
              position: 'absolute',
              top: -20,
              right: -20,
              width: 100,
              height: 100,
              borderRadius: 50,
              background: `${TEAL}20`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -30,
              right: 40,
              width: 60,
              height: 60,
              borderRadius: 30,
              background: `${TEAL}15`,
            }}
          />
          <div style={{ fontSize: 28, marginBottom: 8 }}>🎿</div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
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
            <span style={{ fontSize: 13, fontWeight: 700, color: 'white', fontFamily: 'system-ui, sans-serif' }}>
              Browse Resources
            </span>
            <ChevronRight size={14} color="white" />
          </button>
        </div>
      </div>

      {/* ── Helpful Resources ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 4 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Helpful Resources
          </div>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>
            Find answers to common questions
          </div>
        </div>

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
          {articles.map((article, i) => (
            <div
              key={article.title}
              style={{
                display: 'flex',
                gap: 12,
                padding: '14px 16px',
                borderBottom: i < articles.length - 1 ? '1px solid #f1f5f9' : 'none',
                cursor: 'pointer',
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
                  fontSize: 22,
                }}
              >
                {article.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
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
                    fontSize: 12,
                    color: '#64748b',
                    fontFamily: 'system-ui, sans-serif',
                    lineHeight: 1.4,
                    marginBottom: 8,
                  }}
                >
                  {article.desc}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 11,
                      background: `${TEAL}22`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: TEAL,
                        fontWeight: 700,
                        fontFamily: 'system-ui, sans-serif',
                      }}
                    >
                      {article.author[0]}
                    </span>
                  </div>
                  <span
                    style={{ fontSize: 11, color: '#64748b', fontFamily: 'system-ui, sans-serif', fontWeight: 500 }}
                  >
                    {article.author}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: '#94a3b8',
                      fontFamily: 'system-ui, sans-serif',
                      marginLeft: 'auto',
                    }}
                  >
                    {article.time}
                  </span>
                </div>
              </div>
              <ChevronRight size={16} color="#cbd5e1" style={{ flexShrink: 0, marginTop: 4 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── User Reviews ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 6 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            What Users Are Saying
          </div>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>
            Real feedback from our users
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', marginTop: 12, paddingBottom: 2 }}>
          {reviews.map((review) => (
            <div
              key={review.name}
              style={{
                flexShrink: 0,
                width: 200,
                background: 'white',
                borderRadius: 18,
                padding: '14px 16px',
                boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    background: `${TEAL}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      color: TEAL,
                      fontWeight: 700,
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {review.name[0]}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#0f172a',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {review.name}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={13} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: '#475569',
                  fontFamily: 'system-ui, sans-serif',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick Links ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Quick Links
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
          {quickLinks.map((link, i) => (
            <button
              key={link.label}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 16px',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: i < quickLinks.length - 1 ? '1px solid #f1f5f9' : 'none',
                background: 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: link.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {link.icon}
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
                  {link.label}
                </div>
                <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                  {link.desc}
                </div>
              </div>
              <ChevronRight size={16} color="#cbd5e1" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Emergency CTA ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            borderRadius: 18,
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(239,68,68,0.3)',
          }}
        >
          <span style={{ fontSize: 28 }}>🆘</span>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: 'white',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Emergency Help
            </div>
            <div
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Tap to contact ski patrol immediately
            </div>
          </div>
          <ChevronRight size={18} color="white" />
        </div>
      </div>
    </div>
  );
}