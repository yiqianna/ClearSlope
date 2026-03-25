import { useState } from 'react';
import { ArrowLeft, Settings, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-b6aokfyvby';

const categoryTabs = [
  { emoji: '🚡', label: 'Lifts' },
  { emoji: '🚌', label: 'Shuttles' },
  { emoji: '🚑', label: 'Emergency' },
];

const transportOptions = [
  { label: 'Lift to West Lodge', title: 'Chair 1', status: 'Running', statusColor: 'text-green-500' },
  { label: 'Lift to East Lodge', title: 'Chair 2', status: 'Running', statusColor: 'text-green-500' },
  { label: 'Shuttle Service to Parking Lot', title: 'Every 15 mins', status: 'On Schedule', statusColor: 'text-blue-500' },
];

const essentialServices = [
  { emoji: '🚑', label: 'Emergency House', detail: 'Located nearby', value: 'Open 24/7', bg: 'bg-red-50' },
  { emoji: '🚌', label: 'Shuttle Buses', detail: 'Connects Lodges', value: 'Timely & frequent', bg: 'bg-blue-50' },
  { emoji: '🚡', label: 'Lifts', detail: 'From West to East Lodge', value: 'Quick access', bg: 'bg-sky-50' },
];

export default function TransportPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Lifts');

  return (
    <div className="pb-6">
      {/* Status bar spacer */}
      <div className="h-12" />

      {/* Header */}
      <div className="flex items-center px-5 mb-1 gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80"
        >
          <ArrowLeft size={18} className="text-gray-700" />
        </button>
        <div className="flex-1">
          <h1 className="text-[17px] font-bold text-gray-900">Transportation</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Want to get home? To another lodge?
          </p>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80">
          <Settings size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Category Tabs */}
      <div className="px-5 mt-5 mb-5">
        <div className="grid grid-cols-3 gap-3">
          {categoryTabs.map(({ emoji, label }) => {
            const active = activeTab === label;
            return (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`rounded-2xl p-3.5 flex flex-col items-center gap-2 border transition-all ${
                  active
                    ? 'bg-[#00c8b3]/10 border-[#00c8b3]/30 shadow-sm'
                    : 'bg-white/80 border-white shadow-sm'
                }`}
              >
                <span className="text-2xl">{emoji}</span>
                <span
                  className={`text-[11px] font-semibold ${
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

      {/* Transportation Options */}
      <div className="px-5 mb-5">
        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-900">Transportation Options</h2>
          <p className="text-xs text-gray-400 mt-0.5">Navigate your way around the resort</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-white overflow-hidden">
          {transportOptions.map(({ label, title, status, statusColor }, i) => (
            <div
              key={title}
              className={`flex items-center px-4 py-4 ${
                i < transportOptions.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-gray-400 font-medium">{label}</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{title}</p>
              </div>
              <span className={`text-[11px] font-semibold ${statusColor} shrink-0`}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Essential Services */}
      <div className="px-5 mb-5">
        <h2 className="text-base font-bold text-gray-900 mb-3">Essential Services</h2>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-white overflow-hidden">
          {essentialServices.map(({ emoji, label, detail, value, bg }, i) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-4 py-4 ${
                i < essentialServices.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div
                className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0 text-xl`}
              >
                {emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{detail}</p>
              </div>
              <span className="text-[11px] font-semibold text-gray-600 text-right shrink-0 max-w-[80px] text-right leading-tight">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Map */}
      <div className="px-5 mb-4">
        <div
          className="relative rounded-3xl overflow-hidden shadow-lg"
          style={{ height: '200px', background: '#a8d5d8' }}
        >
          {/* Map SVG */}
          <div className="absolute inset-0">
            <svg
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 336 336"
              className="absolute block w-full h-full"
            >
              <g clipPath="url(#transportclip)">
                <path d={svgPaths.p1a7ce000} fill="#c5dfe0" />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p27357e00}
                  fill="white"
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="transportclip">
                  <rect fill="white" height="336" width="336" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Location pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#00c8b3]/20 rounded-full" />
              <div className="w-4 h-4 bg-[#00c8b3] rounded-full border-2 border-white shadow-lg relative" />
            </div>
          </div>

          {/* Route pills */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
              <div className="w-2 h-2 bg-[#00c8b3] rounded-full" />
              <span className="text-[10px] font-semibold text-gray-700">West Lodge</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-[10px] font-semibold text-gray-700">East Lodge</span>
            </div>
          </div>

          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent pt-8 pb-4 px-5">
            <p className="text-white text-sm font-semibold text-center drop-shadow">
              Interactive resort & transport map
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
