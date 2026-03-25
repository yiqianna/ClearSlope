import { useState } from 'react';
import { ArrowLeft, Settings, ChevronRight, Star, Share2, Calendar, List } from 'lucide-react';
import { useNavigate } from 'react-router';
import imgShape from 'figma:asset/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png';
import imgAlpine from 'figma:asset/40e378fc4fbfe1a5be37c5dff58fae6a7637a888.png';
import imgFreestyle from 'figma:asset/205a3c5a7d522dff64ac5bb7001db8f81a3ab95b.png';
import imgClasses from 'figma:asset/faa0f62a0a15f3e0302e3cc88747c0162ee6d00f.png';
import imgPost1 from 'figma:asset/1e08e8cc2f5437eb5205dca8107b7afb23b6d60b.png';
import imgPost2 from 'figma:asset/51f6dbb570e6b292668f2ed6bd299d235a59e047.png';

const events = [
  {
    img: imgAlpine,
    type: 'Competition',
    title: 'Alpine Challenge',
    date: 'Dec 12 – Dec 14',
    tagColor: 'bg-orange-400',
  },
  {
    img: imgFreestyle,
    type: 'Show',
    title: 'Freestyle Fest',
    date: 'Jan 20 – Jan 22',
    tagColor: 'bg-purple-400',
  },
  {
    img: imgClasses,
    type: 'Classes',
    title: 'Learn to Ski',
    date: 'Every Weekend',
    tagColor: 'bg-blue-400',
  },
];

const categoryTabs = [
  { emoji: '🏂', label: 'All Events' },
  { emoji: '📅', label: 'Schedule' },
  { emoji: '⭐', label: 'Reviews' },
];

const tips = [
  { emoji: '🏁', label: 'Check the Weather', detail: 'Stay updated on conditions' },
  { emoji: '🎟️', label: 'Buy Tickets Early', detail: 'Avoid last-minute rush' },
  { emoji: '🧤', label: 'Dress Warmly', detail: 'Layer up for comfort' },
];

const posts = [
  {
    img: imgPost1,
    caption: 'Had a blast at the competition!',
    tags: ['#Skiing', '#Alps'],
    user: 'Lisa',
  },
  {
    img: imgPost2,
    caption: 'Ready for the weekend lessons!',
    tags: ['#Learning', '#SkiClasses'],
    user: 'Mike',
  },
];

export default function EventsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Events');

  return (
    <div className="pb-6">
      {/* Status bar spacer */}
      <div className="h-12" />

      {/* Header */}
      <div className="flex items-center px-5 mb-4 gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80"
        >
          <ArrowLeft size={18} className="text-gray-700" />
        </button>
        <h1 className="flex-1 text-[17px] font-bold text-gray-900">Ski Events</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80">
          <Settings size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Resort Info */}
      <div className="flex items-center gap-3 px-5 mb-5">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white ring-offset-1 shadow-md shrink-0">
          <img src={imgShape} alt="Resort" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Crystal Mountain Ski Resort</p>
          <p className="text-xs text-gray-400 mt-0.5">Find your perfect skiing adventure</p>
        </div>
      </div>

      {/* Upcoming Events Carousel */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-5 mb-3">
          <h2 className="text-base font-bold text-gray-900">Upcoming Events</h2>
          <button className="flex items-center gap-0.5 text-[#00c8b3] text-xs font-semibold">
            See all <ChevronRight size={14} />
          </button>
        </div>
        <div
          className="flex gap-3 overflow-x-auto px-5 pb-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {events.map(({ img, type, title, date, tagColor }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-md border border-gray-50 overflow-hidden shrink-0 w-[148px]"
            >
              <div className="relative h-[120px] bg-gray-100 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute top-2 left-2 ${tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm`}
                >
                  {type}
                </span>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-gray-500 font-medium truncate">{title}</p>
                <p className="text-xs font-bold text-gray-800 mt-0.5 truncate">{date}</p>
                <div className="flex gap-1.5 mt-2">
                  <span className="text-base">🎿</span>
                  <span className="text-base">🏆</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {categoryTabs.map(({ emoji, label }) => {
            const active = activeCategory === label;
            return (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`rounded-2xl p-3 flex flex-col items-center gap-1.5 border transition-all ${
                  active
                    ? 'bg-[#00c8b3]/10 border-[#00c8b3]/30 shadow-sm'
                    : 'bg-white border-white shadow-sm'
                }`}
              >
                <span className="text-2xl">{emoji}</span>
                <span
                  className={`text-[10px] font-semibold ${
                    active ? 'text-[#00c8b3]' : 'text-gray-500'
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ski Event Tips */}
      <div className="px-5 mb-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">Ski Event Tips</h2>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-white overflow-hidden">
          {tips.map(({ emoji, label, detail }, i) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-4 py-3.5 ${
                i < tips.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className="w-9 h-9 bg-[#00c8b3]/10 rounded-xl flex items-center justify-center shrink-0 text-lg">
                {emoji}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Posts */}
      <div className="px-5 mb-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">Community Highlights</h2>
        <div className="grid grid-cols-2 gap-3">
          {posts.map(({ img, caption, tags, user }) => (
            <div
              key={user}
              className="bg-white rounded-2xl shadow-md border border-gray-50 overflow-hidden"
            >
              <div className="h-[110px] overflow-hidden">
                <img
                  src={img}
                  alt={caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2.5">
                <p className="text-[11px] text-gray-700 font-medium leading-tight mb-1.5">
                  {caption}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] bg-[#00c8b3]/10 text-[#00c8b3] px-1.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-gray-200 rounded-full" />
                  <span className="text-[10px] text-gray-500 font-medium">{user}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 flex flex-col gap-3">
        <button className="w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold text-sm bg-white/80 shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <Share2 size={15} />
          Share Event
        </button>
        <button className="w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold text-sm bg-white/80 shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <Calendar size={15} />
          Save to Calendar
        </button>
        <button className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <List size={15} />
          See Full Schedule
        </button>
      </div>
    </div>
  );
}
