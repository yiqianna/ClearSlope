import { Search, Settings, Bell, ShoppingCart, Heart, ChevronRight, Navigation, Trophy, Lightbulb, ShieldCheck, CalendarDays, Moon, ExternalLink } from 'lucide-react';
const imgShape = '';
const imgHelmet = 'https://images.unsplash.com/photo-1582452931783-6370a539b4b3?w=400&q=80';
const imgJacket = 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80';
import { PageType } from '../App';
import { SkiMap } from './SkiMap';

const TEAL = '#00c8b3';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  userName: string;
  userAvatar: string;
}

const gearItems = [
  {
    name: 'Sweet Protection Daymaker MIPS Helmet',
    price: '$95–159',
    originalPrice: null,
    tag: 'Staff Picks',
    img: imgHelmet,
    link: 'https://www.evo.com/shop/accessories/helmets',
    sale: true,
  },
  {
    name: 'Flylow Domino GORE-TEX 3L Jacket – Women\'s',
    price: '$259',
    originalPrice: null,
    tag: 'On Sale',
    img: imgJacket,
    link: 'https://www.evo.com/shop/sale?cmselement=hero&cmscampaign=LastChairSale',
    sale: true,
  },
];

const events = [
  { icon: CalendarDays, iconColor: '#6366f1', name: 'Family Ski Day', date: 'Dec 15, 2023', badge: 'Fun for all ages' },
  { icon: Moon, iconColor: '#0ea5e9', name: 'Night Skiing', date: 'Every Saturday', badge: 'Under the stars!' },
];

const reviews = [
  { name: 'Mark T.', text: 'The trails here are absolutely amazing! Best skiing experience.' },
  { name: 'Emily R.', text: 'Great for families and beginners! Super helpful app.' },
];

const quickActions = [
  { icon: Trophy, label: 'Best Trails' },
  { icon: Lightbulb, label: 'Tips' },
  { icon: ShieldCheck, label: 'Safety' },
];

export function HomePage({ onNavigate, userName, userAvatar }: HomePageProps) {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #eafafa 0%, #f4fefd 35%, #ffffff 70%)',
        minHeight: '100%',
        paddingBottom: 20,
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 20px 0',
        }}
      >
        <span
          style={{
            fontFamily: "'Roboto Slab', Georgia, serif",
            fontSize: 28,
            fontWeight: 800,
            color: TEAL,
            letterSpacing: '-0.5px',
          }}
        >
          ClearSlope
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          {[Bell, Settings].map((Icon, i) => (
            <button
              key={i}
              style={{
                width: 36,
                height: 36,
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
              <Icon size={17} color="#64748b" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Greeting ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px 0' }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 23,
            overflow: 'hidden',
            border: `2.5px solid ${TEAL}`,
            flexShrink: 0,
            boxShadow: `0 0 0 3px ${TEAL}22`,
          }}
        >
          <img src={userAvatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#0f172a',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Hello, {userName.split(' ')[0]}! 👋
          </div>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
            Ready for your next adventure?
          </div>
        </div>
      </div>

      {/* ── Search bar ── */}
      <div style={{ padding: '14px 20px 0' }}>
        <div
          style={{
            background: 'white',
            borderRadius: 16,
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
            border: '1px solid #e8f4f4',
          }}
        >
          <Search size={17} color="#94a3b8" />
          <span
            style={{
              flex: 1,
              fontSize: 13,
              color: '#94a3b8',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Find a ski resort or location...
          </span>
          <button
            style={{
              background: '#0f1f2e',
              borderRadius: 10,
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <Search size={15} color="white" />
          </button>
        </div>
      </div>

      {/* ── Hero Map Card ── */}
      <div style={{ padding: '14px 20px 0', position: 'relative' }}>
        <div
          onClick={() => onNavigate('navigation')}
          style={{ cursor: 'pointer', borderRadius: 20, overflow: 'hidden', position: 'relative' }}
        >
          <SkiMap height={200} showLabel="Crystal Mountain Ski Resort" showGoogleMaps={false} />
          {/* Navigate pill */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: TEAL,
              borderRadius: 12,
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: '0 2px 8px rgba(0,200,179,0.4)',
            }}
          >
            <Navigation size={13} color="white" />
            <span
              style={{
                fontSize: 11,
                color: 'white',
                fontWeight: 700,
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Navigate
            </span>
          </div>
        </div>
      </div>

      {/* ── Quick Actions ── */}
      <div style={{ padding: '14px 20px 0', display: 'flex', gap: 10 }}>
        {quickActions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            style={{
              flex: 1,
              background: 'white',
              borderRadius: 18,
              padding: '14px 6px 12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              border: '1px solid #f0f9f9',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                background: '#e6faf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={22} color="#00c8b3" strokeWidth={1.8} />
            </div>
            <span
              style={{
                fontSize: 11,
                color: '#475569',
                fontFamily: 'system-ui, sans-serif',
                fontWeight: 600,
              }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* ── Recommended Gear ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Recommended Gear" seeAllHref="https://www.evo.com" />
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4 }}>
          {gearItems.map((item) => (
            <div
              key={item.name}
              onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
              style={{
                flexShrink: 0,
                width: 162,
                background: 'white',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 2px 14px rgba(0,0,0,0.08)',
                border: '1px solid #f0f9f9',
                cursor: 'pointer',
              }}
            >
              <div style={{ height: 130, position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }}
                />
                {item.tag && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      background: item.sale ? '#ef4444' : TEAL,
                      borderRadius: 8,
                      padding: '3px 9px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: 'white',
                        fontWeight: 700,
                        fontFamily: 'system-ui, sans-serif',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>
              <div style={{ padding: '10px 12px 12px' }}>
                <div
                  style={{
                    fontSize: 11,
                    color: '#64748b',
                    fontFamily: 'system-ui, sans-serif',
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: '#ef4444',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {item.price}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: '#94a3b8',
                      fontFamily: 'system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    ON SALE
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.link, '_blank', 'noopener,noreferrer');
                    }}
                    style={{
                      flex: 1,
                      background: TEAL,
                      borderRadius: 10,
                      padding: '7px 0',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 5,
                    }}
                  >
                    <ShoppingCart size={12} color="white" />
                    <span
                      style={{
                        fontSize: 11,
                        color: 'white',
                        fontWeight: 700,
                        fontFamily: 'system-ui, sans-serif',
                      }}
                    >
                      Buy
                    </span>
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      width: 32,
                      background: '#fff1f0',
                      borderRadius: 10,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Heart size={14} color="#f43f5e" />
                  </button>
                </div>
                <div
                  style={{
                    marginTop: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <ExternalLink size={11} color="#94a3b8" />
                  <span
                    style={{
                      fontSize: 10,
                      color: '#94a3b8',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    View on evo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Upcoming Events ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Upcoming Events" />
        <div
          style={{
            background: 'white',
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
            border: '1px solid #f0f9f9',
          }}
        >
          {events.map((event, i) => (
            <div
              key={event.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '13px 16px',
                borderBottom: i < events.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  background: `${TEAL}18`,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <event.icon size={22} color={event.iconColor} strokeWidth={1.8} />
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
                  {event.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: '#64748b',
                    fontFamily: 'system-ui, sans-serif',
                    marginTop: 2,
                  }}
                >
                  {event.date}
                </div>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: TEAL,
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: 700,
                  textAlign: 'right',
                  maxWidth: 80,
                }}
              >
                {event.badge}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Reviews ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="What Skiers Are Saying" />
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 2 }}>
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
                border: '1px solid #f0f9f9',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}
              >
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
              <div
                style={{
                  fontSize: 13,
                  color: '#f59e0b',
                  letterSpacing: 1,
                  marginBottom: 8,
                }}
              >
                ★★★★★
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
    </div>
  );
}

function SectionHeader({ title, seeAllHref }: { title: string; seeAllHref?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
      }}
    >
      <span
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: '#0f172a',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {title}
      </span>
      {seeAllHref && (
        <button
          style={{
            fontSize: 12,
            color: '#00c8b3',
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 600,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: 0,
          }}
          onClick={() => window.open(seeAllHref, '_blank', 'noopener,noreferrer')}
        >
          See all <ChevronRight size={13} />
        </button>
      )}
    </div>
  );
}