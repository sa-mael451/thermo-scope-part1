import { Flame, Search } from 'lucide-react'

const getRiskColor = (riskLevel) => {
  const colors = {
    'CRITICAL': 'text-red-500 bg-red-500/10 border-red-500',
    'HIGH': 'text-orange-500 bg-orange-500/10 border-orange-500',
    'MEDIUM': 'text-yellow-500 bg-yellow-500/10 border-yellow-500',
    'LOW': 'text-green-500 bg-green-500/10 border-green-500',
  }
  return colors[riskLevel] || colors['LOW']
}

const Sidebar = ({ events, selectedEvent, onSelectEvent, loading }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-3">Thermal Events</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-center text-slate-400">
            Loading events...
          </div>
        ) : events.length === 0 ? (
          <div className="p-4 text-center text-slate-400">
            No events found
          </div>
        ) : (
          <div className="p-2">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className={`p-3 mb-2 rounded-lg cursor-pointer transition-all ${
                  selectedEvent?.id === event.id
                    ? 'bg-cyan-500/20 border border-cyan-500'
                    : 'bg-slate-700 border border-slate-600 hover:bg-slate-600'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-white">{event.id}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getRiskColor(event.risk_level)}`}>
                    {event.risk_level}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{event.type}</h3>
                <p className="text-xs text-slate-400 mb-2">{event.location_name}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Temp: {event.temperature}K</span>
                  <span>Conf: {event.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400">
          Total Events: <span className="text-white font-semibold">{events.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
