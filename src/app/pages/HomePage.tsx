import { useState } from 'react';
import { Search, Settings, ChevronRight, Star, ShoppingCart, Heart, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router';
import imgShape from 'figma:asset/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png';
import imgHelmet from 'figma:asset/6f5025f4086512ca85f36937b3bd15667b068c26.png';
import imgJacket from 'figma:asset/931eb8bd0abbfe74395463be3d829b4064c0948c.png';
import svgPaths from '../../imports/svg-4j9557mllg';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [favs, setFavs] = useState<Record<string, boolean>>({});

  const gearItems = [
    { img: imgHelmet, name: 'Safety Helmet', price: '$80', badge: 'Top Rated' },
    { img: imgJacket, name: 'Ski Jacket Pro', price: '$120', badge: null },
  ];

  const events = [
    { emoji: '📅', title: 'Family Ski Day', date: 'Dec 15, 2023', detail: 'Fun for all ages' },
    { emoji: '🥳', title: 'Night Skiing', date: 'Every Saturday', detail: 'Under the stars' },
  ];

  const reviews = [
    { name: 'Mark T.', text: 'The trails here are amazing! Best ski resort ever.' },
    { name: 'Emily R.', text: 'Great for families and beginners! Highly recommended.' },
  ];

  return (
    <div className="pb-6">
      {/* Status bar spacer */}
      <div className="h-12" />

      {/* App Header */}
      <div className="flex items-center justify-between px-5 mb-2">
        <h1
          className="text-[32px] text-[#00c8b3] tracking-tight"
          style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 800 }}
        >
          ClearSlope
        </h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80">
          <Settings size={18} className="text-gray-600" />
        </button>
      </div>

      {/* User Greeting */}
      <div className="flex items-center gap-3 px-5 py-3 mb-1">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white ring-offset-1 shadow-md shrink-0">
          <img src={imgShape} alt="User avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-[15px] font-semibold text-gray-900">Hello, Skiier! 👋</p>
          <p className="text-xs text-gray-500">Ready for your next adventure?</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-5 mb-5">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white px-4 py-3">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Find a ski resort or use location..."
            className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
          />
          <button className="bg-[#00c8b3] rounded-xl p-2 shrink-0 shadow-sm">
            <Search size={13} className="text-white" />
          </button>
        </div>
        <p className="text-[11px] text-gray-400 mt-1.5 px-1">
          Enter ski resort name or location
        </p>
      </div>

      {/* Map Card */}
      <div className="px-5 mb-5">
        <button
          onClick={() => navigate('/navigation')}
          className="w-full rounded-3xl overflow-hidden shadow-lg relative active:scale-[0.98] transition-transform"
          style={{ height: '195px', background: '#a8d5d8' }}
        >
          {/* Map SVG background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute" style={{ inset: '41.65% -22.83% -27.93% 31.94%' }}>
              <svg
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 346.29 289.88"
                className="absolute block w-full h-full"
              >
                <path d={svgPaths.p16044c00} fill="#c8dfe0" />
              </svg>
            </div>
            <div className="absolute" style={{ inset: '-9% -19.55% -8.26% -7.61%' }}>
              <svg
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 484.488 393.995"
                className="absolute block w-full h-full"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p3d6a7200}
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Pin */}
          <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <MapPin size={34} className="text-[#00c8b3] drop-shadow-md" fill="#00c8b3" strokeWidth={1.5} color="white" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1.5 bg-black/10 rounded-full blur-[2px]" />
            </div>
          </div>

          {/* Gradient overlay + text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pt-8 pb-4 px-5">
            <p className="text-white text-sm font-semibold text-center drop-shadow">
              You are at Crystal Mountain Ski Resort
            </p>
            <p className="text-white/75 text-[11px] text-center mt-0.5">
              Tap to start your adventure →
            </p>
          </div>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { emoji: '🥇', label: 'Best Trails', color: 'from-amber-50 to-yellow-50' },
            { emoji: '💡', label: 'Tips', color: 'from-sky-50 to-cyan-50' },
            { emoji: '🏅', label: 'Safety', color: 'from-emerald-50 to-teal-50' },
          ].map(({ emoji, label, color }) => (
            <button
              key={label}
              className={`bg-gradient-to-br ${color} rounded-2xl shadow-sm border border-white p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform`}
            >
              <span className="text-2xl">{emoji}</span>
              <span className="text-[11px] text-gray-600 font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommended Gear */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-5 mb-3">
          <h2 className="text-base font-bold text-gray-900">Recommended Gear</h2>
          <button className="flex items-center gap-0.5 text-[#00c8b3] text-xs font-semibold">
            See all <ChevronRight size={14} />
          </button>
        </div>
        <div
          className="flex gap-3 overflow-x-auto px-5 pb-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {gearItems.map(({ img, name, price, badge }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-md border border-gray-50 overflow-hidden shrink-0 w-[155px]"
            >
              <div className="relative h-[130px] bg-gray-50 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                {badge && (
                  <span className="absolute top-2 left-2 bg-[#00c8b3] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {badge}
                  </span>
                )}
                <button
                  onClick={() =>
                    setFavs((f) => ({ ...f, [name]: !f[name] }))
                  }
                  className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm"
                >
                  <Heart
                    size={12}
                    className={favs[name] ? 'text-red-500' : 'text-gray-400'}
                    fill={favs[name] ? '#ef4444' : 'none'}
                  />
                </button>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-gray-400 font-medium">{name}</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{price}</p>
                <button className="mt-2 w-full flex items-center justify-center gap-1.5 bg-gray-900 text-white text-[11px] font-semibold rounded-xl py-1.5 active:opacity-80">
                  <ShoppingCart size={11} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-gray-900">Upcoming Events</h2>
          <button
            onClick={() => navigate('/events')}
            className="flex items-center gap-0.5 text-[#00c8b3] text-xs font-semibold"
          >
            See all <ChevronRight size={14} />
          </button>
        </div>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-white overflow-hidden">
          {events.map(({ emoji, title, date, detail }, i) => (
            <div
              key={title}
              className={`flex items-center gap-3 px-4 py-3.5 ${
                i < events.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className="w-10 h-10 bg-[#00c8b3]/10 rounded-xl flex items-center justify-center shrink-0 text-xl">
                {emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{date}</p>
              </div>
              <p className="text-[11px] text-gray-500 text-right shrink-0 max-w-[80px] leading-tight">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-2">
        <div className="flex items-center justify-between px-5 mb-3">
          <h2 className="text-base font-bold text-gray-900">What Skiers Are Saying</h2>
        </div>
        <div
          className="flex gap-3 overflow-x-auto px-5 pb-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {reviews.map(({ name, text }) => (
            <div
              key={name}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-white p-4 shrink-0 w-[195px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[#00c8b3]/15 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#00c8b3]">{name[0]}</span>
                </div>
                <span className="text-xs font-semibold text-gray-800">{name}</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={11} fill="#FFC700" className="text-[#FFC700]" />
                ))}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
