import { X, MapPin, Thermometer, Eye, AlertCircle, Calendar } from 'lucide-react'

const getRiskColor = (riskLevel) => {
  const colors = {
    'CRITICAL': 'text-red-500 bg-red-500/10 border-red-500',
    'HIGH': 'text-orange-500 bg-orange-500/10 border-orange-500',
    'MEDIUM': 'text-yellow-500 bg-yellow-500/10 border-yellow-500',
    'LOW': 'text-green-500 bg-green-500/10 border-green-500',
  }
  return colors[riskLevel] || colors['LOW']
}

const EventDetail = ({ event, onClose }) => {
  if (!event) return null

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Event Details</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Event ID and Risk */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Event ID</span>
            <span className="text-sm font-mono text-white">{event.id}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Risk Level</span>
            <span className={`text-sm px-3 py-1 rounded-full border font-semibold ${getRiskColor(event.risk_level)}`}>
              {event.risk_level}
            </span>
          </div>
        </div>

        {/* Event Type */}
        <div className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <h3 className="text-2xl font-bold text-white mb-2">{event.type}</h3>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{event.location_name}</span>
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3">Location</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Latitude</span>
              <span className="font-mono text-white">{event.latitude.toFixed(4)}°</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Longitude</span>
              <span className="font-mono text-white">{event.longitude.toFixed(4)}°</span>
            </div>
          </div>
        </div>

        {/* Thermal Metrics */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3">Thermal Metrics</h4>
          <div className="space-y-3">
            <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-slate-400">Temperature</span>
                </div>
                <span className="text-lg font-bold text-white">{event.temperature}K</span>
              </div>
            </div>
            <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-400">Brightness</span>
                </div>
                <span className="text-lg font-bold text-white">{event.brightness}</span>
              </div>
            </div>
            <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-slate-400">Confidence</span>
                </div>
                <span className="text-lg font-bold text-white">{event.confidence}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detection Time */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3">Detection Information</h4>
          <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>{new Date(event.detected_at).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        {event.description && (
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Description</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {event.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventDetail
