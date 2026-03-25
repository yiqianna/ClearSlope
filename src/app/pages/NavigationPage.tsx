import { useState } from 'react';
import { ArrowLeft, Settings, MapPin, AlertTriangle, Thermometer, Layers } from 'lucide-react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-jltte9dqk';

export default function NavigationPage() {
  const navigate = useNavigate();
  const [voiceOn, setVoiceOn] = useState(true);

  const cautionItems = [
    {
      emoji: '⚠️',
      title: 'Thin Cover Ahead',
      distance: '356 m / 0.221 mi',
      detail: 'Proceed with caution.',
      bg: 'bg-amber-50',
    },
    {
      emoji: '🗻',
      title: 'Cliff Ahead',
      distance: '100 m / 0.006 mi',
      detail: 'Dangerous area!',
      bg: 'bg-red-50',
    },
  ];

  const conditions = [
    { emoji: '🌨️', label: 'Snow Depth', value: '12 inches', sub: 'Great coverage' },
    { emoji: '🌡️', label: 'Temperature', value: '28°F', sub: 'Bundle up!' },
    { emoji: '⚠️', label: 'Avalanche Risk', value: 'Low', sub: 'Conditions stable' },
  ];

  return (
    <div className="pb-6">
      {/* Status bar spacer */}
      <div className="h-12" />

      {/* Header */}
      <div className="flex items-center px-5 mb-5 gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80"
        >
          <ArrowLeft size={18} className="text-gray-700" />
        </button>
        <div className="flex-1">
          <h1 className="text-[17px] font-bold text-gray-900">Real Time Ski Navigation</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80">
          <Settings size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Map Card */}
      <div className="px-5 mb-5">
        <div
          className="relative rounded-3xl overflow-hidden shadow-lg"
          style={{ height: '230px', background: '#a8d5d8' }}
        >
          {/* Map SVG */}
          <div className="absolute inset-0">
            <svg
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 336 336"
              className="absolute block w-full h-full"
            >
              <g clipPath="url(#navclip)">
                <path d={svgPaths.p1a7ce000} fill="#c5dfe0" />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p27357e00}
                  fill="white"
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="navclip">
                  <rect fill="white" height="336" width="336" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Pulse location indicator */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#00c8b3]/20 rounded-full animate-ping" />
              <div className="w-5 h-5 bg-[#00c8b3] rounded-full border-2 border-white shadow-lg relative" />
            </div>
          </div>

          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent pt-10 pb-4 px-5">
            <p className="text-white text-sm font-semibold text-center drop-shadow">
              Real-time location of skiers and obstacles
            </p>
          </div>

          {/* Top right pill */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[11px] font-semibold text-gray-700">Live</span>
          </div>
        </div>
      </div>

      {/* Voice Navigation Toggle */}
      <div className="px-5 mb-5">
        <div className="bg-[#374053] rounded-2xl px-5 py-4 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-white font-semibold text-sm">Voice Navigation</p>
            <p className="text-white/50 text-[11px] mt-0.5">
              {voiceOn ? 'Guiding your descent' : 'Navigation muted'}
            </p>
          </div>
          <div className="flex bg-white/10 rounded-full p-1 gap-1">
            <button
              onClick={() => setVoiceOn(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                voiceOn
                  ? 'bg-[#00c8b3] text-white shadow-sm'
                  : 'text-gray-400'
              }`}
            >
              On
            </button>
            <button
              onClick={() => setVoiceOn(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !voiceOn
                  ? 'bg-white/25 text-white shadow-sm'
                  : 'text-gray-400'
              }`}
            >
              Off
            </button>
          </div>
        </div>
      </div>

      {/* Caution Sections */}
      <div className="px-5 mb-4">
        <h2 className="text-base font-bold text-gray-900 mb-3">Caution Sections</h2>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-white overflow-hidden">
          {cautionItems.map(({ emoji, title, distance, detail, bg }, i) => (
            <div
              key={title}
              className={`flex items-center gap-3 px-4 py-4 ${
                i < cautionItems.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div
                className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0 text-xl`}
              >
                {emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{detail}</p>
              </div>
              <span className="text-[11px] font-medium text-gray-500 text-right shrink-0">
                {distance}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Report Hazard */}
      <div className="px-5 mb-5">
        <button className="w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-800 font-semibold text-sm bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <AlertTriangle size={16} className="text-amber-500" />
          Report Hazard
        </button>
      </div>

      {/* Current Conditions */}
      <div className="px-5 mb-4">
        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-900">Current Conditions</h2>
          <p className="text-xs text-gray-400 mt-0.5">Know before you go!</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-white overflow-hidden">
          {conditions.map(({ emoji, label, value, sub }, i) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-4 py-4 ${
                i < conditions.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 text-xl">
                {emoji}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 font-medium">{label}</p>
                <p className="text-[11px] text-gray-400">{sub}</p>
              </div>
              <span className="text-sm font-bold text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
