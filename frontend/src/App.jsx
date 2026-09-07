import { useState, useEffect } from 'react'
import { Satellite, Activity, AlertTriangle, Database } from 'lucide-react'
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import EventDetail from './components/EventDetail'
import KPIPanel from './components/KPIPanel'
import { fetchEvents, fetchStatistics } from './services/api'

function App() {
  const [events, setEvents] = useState([])
  const [statistics, setStatistics] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [eventsData, statsData] = await Promise.all([
        fetchEvents(),
        fetchStatistics()
      ])
      setEvents(eventsData)
      setStatistics(statsData)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      {/* Top Navigation */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Satellite className="w-8 h-8 text-cyan-400" />
            <div>
              <h1 className="text-2xl font-bold text-white">THERMO-SCOPE</h1>
              <p className="text-sm text-slate-400">AI-Powered Industrial Thermal Anomaly Intelligence Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-400">
              <Activity className="w-5 h-5" />
              <span className="text-sm font-medium">System Operational</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-80 bg-slate-800 border-r border-slate-700 overflow-y-auto">
          <Sidebar 
            events={events} 
            selectedEvent={selectedEvent}
            onSelectEvent={setSelectedEvent}
            loading={loading}
          />
        </aside>

        {/* Map Area */}
        <main className="flex-1 relative">
          <Map 
            events={events} 
            selectedEvent={selectedEvent}
            onSelectEvent={setSelectedEvent}
          />
        </main>

        {/* Right Panel - Event Detail */}
        {selectedEvent && (
          <aside className="w-96 bg-slate-800 border-l border-slate-700 overflow-y-auto">
            <EventDetail 
              event={selectedEvent} 
              onClose={() => setSelectedEvent(null)}
            />
          </aside>
        )}
      </div>

      {/* Bottom KPI Panel */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <KPIPanel statistics={statistics} loading={loading} />
      </footer>
    </div>
  )
}

export default App
