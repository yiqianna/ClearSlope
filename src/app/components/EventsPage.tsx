import { ArrowLeft, Settings, Calendar, Star, ChevronRight, Share2, BookmarkPlus, CloudSun, Ticket, Wind, Trophy, Zap } from 'lucide-react';
import { useState } from 'react';
const imgShape = '';
const imgEvent1 = 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&q=80';
const imgEvent3 = 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80';
import { ImageWithFallback } from './figma/ImageWithFallback';

const TEAL = '#00c8b3';

interface EventsPageProps {
  onBack: () => void;
  userAvatar: string;
  userName: string;
}

const events = [
  {
    tag: 'Competition',
    tagColor: '#ef4444',
    title: 'Alpine Challenge',
    date: 'Dec 12–14, 2023',
    img: imgEvent1,
  },
  {
    tag: 'Night Event',
    tagColor: '#6366f1',
    title: 'Night Skiing',
    date: 'Every Saturday',
    img: 'https://images.unsplash.com/photo-1640894761944-249c892ec611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80',
  },
  {
    tag: 'Classes',
    tagColor: TEAL,
    title: 'Learn to Ski',
    date: 'Every Weekend',
    img: imgEvent3,
  },
];

const tips = [
  { icon: CloudSun, iconColor: '#f59e0b', bg: '#fffbeb', title: 'Check the Weather', sub: 'Stay updated on conditions' },
  { icon: Ticket, iconColor: '#6366f1', bg: '#eef2ff', title: 'Buy Tickets Early', sub: 'Avoid last-minute rush' },
  { icon: Wind, iconColor: '#0ea5e9', bg: '#eff6ff', title: 'Dress Warmly', sub: 'Layer up for comfort' },
];

const filterTabs = ['All Events', 'Schedule', 'Reviews'];

export function EventsPage({ onBack, userAvatar, userName }: EventsPageProps) {
  const [activeFilter, setActiveFilter] = useState(0);

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
          Ski Events
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

      {/* ── Resort info ── */}
      <div style={{ padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            overflow: 'hidden',
            border: `2.5px solid ${TEAL}`,
            flexShrink: 0,
          }}
        >
          <img src={userAvatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Hey, {userName.split(' ')[0]}! 🎿
          </div>
          <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
            Find your perfect skiing adventure
          </div>
        </div>
      </div>

      {/* ── Section title ── */}
      <div style={{ padding: '18px 20px 0' }}>
        <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
          Upcoming Events
        </span>
      </div>

      {/* ── Event cards (horizontal scroll) ── */}
      <div style={{ padding: '12px 20px 0', display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4 }}>
        {events.map((event) => (
          <div
            key={event.title}
            style={{
              flexShrink: 0,
              width: 156,
              background: 'white',
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 2px 14px rgba(0,0,0,0.08)',
              border: '1px solid #f1f5f9',
            }}
          >
            <div style={{ height: 120, position: 'relative', overflow: 'hidden' }}>
              <img
                src={event.img as string}
                alt={event.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {event.tag && (
                <div
                  style={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    background: event.tagColor,
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
                    {event.tag}
                  </span>
                </div>
              )}
            </div>
            <div style={{ padding: '10px 12px' }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#0f172a',
                  fontFamily: 'system-ui, sans-serif',
                  marginBottom: 3,
                }}
              >
                {event.title}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Calendar size={11} color="#64748b" />
                <span
                  style={{
                    fontSize: 11,
                    color: '#64748b',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {event.date}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: 8, background: '#e6faf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Trophy size={13} color="#00c8b3" strokeWidth={1.8} />
                </div>
                <div style={{ width: 24, height: 24, borderRadius: 8, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={13} color="#f59e0b" strokeWidth={1.8} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Filter tabs ── */}
      <div style={{ padding: '16px 20px 0', display: 'flex', gap: 8 }}>
        {filterTabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(i)}
            style={{
              flex: 1,
              padding: '10px 6px',
              borderRadius: 12,
              background: activeFilter === i ? TEAL : 'white',
              border: `1.5px solid ${activeFilter === i ? TEAL : '#e2e8f0'}`,
              cursor: 'pointer',
              boxShadow: activeFilter === i ? `0 4px 12px ${TEAL}35` : '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: activeFilter === i ? 'white' : '#64748b',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* ── Event Tips ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Ski Event Tips
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
          {tips.map((tip, i) => (
            <div
              key={tip.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '13px 16px',
                borderBottom: i < tips.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: tip.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <tip.icon size={19} color={tip.iconColor} strokeWidth={1.8} />
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
                  {tip.title}
                </div>
                <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                  {tip.sub}
                </div>
              </div>
              <ChevronRight size={16} color="#cbd5e1" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Social Posts ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Community Posts
          </span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            {
              img: 'https://images.unsplash.com/photo-1699400873127-ea182f7583fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80',
              caption: 'Had a blast at the competition!',
              tags: ['#Skiing', '#Alps'],
              user: 'Lisa',
            },
            {
              img: 'https://images.unsplash.com/photo-1707885437265-1debb3cf49cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80',
              caption: 'Ready for the weekend lessons!',
              tags: ['#Learning', '#SkiClasses'],
              user: 'Mike',
            },
          ].map((post) => (
            <div
              key={post.user}
              style={{
                flex: 1,
                background: 'white',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ height: 110, overflow: 'hidden' }}>
                <ImageWithFallback
                  src={post.img}
                  alt={post.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '10px 10px 8px' }}>
                <p
                  style={{
                    fontSize: 11,
                    color: '#0f172a',
                    fontFamily: 'system-ui, sans-serif',
                    margin: '0 0 6px',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {post.caption}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 10,
                        color: TEAL,
                        background: `${TEAL}15`,
                        padding: '2px 7px',
                        borderRadius: 6,
                        fontFamily: 'system-ui, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      background: '#e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: '#64748b',
                        fontWeight: 700,
                        fontFamily: 'system-ui, sans-serif',
                      }}
                    >
                      {post.user[0]}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      color: '#64748b',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {post.user}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div style={{ padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { label: 'Share Event', icon: <Share2 size={16} color="#0f172a" />, outlined: true },
          { label: 'Save to Calendar', icon: <BookmarkPlus size={16} color="#0f172a" />, outlined: true },
          { label: 'See Full Schedule', icon: null, outlined: false },
        ].map((btn) => (
          <button
            key={btn.label}
            style={{
              width: '100%',
              padding: '14px 0',
              background: btn.outlined ? 'white' : '#0f1f2e',
              border: btn.outlined ? '1.5px solid #e2e8f0' : 'none',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
              boxShadow: btn.outlined ? 'none' : '0 4px 16px rgba(15,31,46,0.3)',
            }}
          >
            {btn.icon}
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: btn.outlined ? '#0f172a' : 'white',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {btn.label}
            </span>
          </button>
        ))}
      </div>

      {/* ── Star rating section ── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
            Event Reviews
          </span>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto' }}>
          {[
            { name: 'Sarah K.', text: 'Amazing competition, well-organized!', stars: 5 },
            { name: 'Tom B.', text: 'Great atmosphere, will come back!', stars: 5 },
          ].map((review) => (
            <div
              key={review.name}
              style={{
                flexShrink: 0,
                width: 200,
                background: 'white',
                borderRadius: 16,
                padding: '14px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    background: `${TEAL}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: 12, color: TEAL, fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}>
                    {review.name[0]}
                  </span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
                  {review.name}
                </span>
              </div>
              <div style={{ display: 'flex', marginBottom: 8 }}>
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={13} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>
              <p
                style={{
                  fontSize: 12,
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