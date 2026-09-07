import { Activity, AlertTriangle, TrendingUp, Database } from 'lucide-react'

const KPICard = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
    <div className={`p-2 rounded-lg ${color}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  </div>
)

const KPIPanel = ({ statistics, loading }) => {
  if (loading || !statistics) {
    return (
      <div className="p-4">
        <div className="text-center text-slate-400">Loading statistics...</div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        <KPICard
          icon={Database}
          label="Total Events"
          value={statistics.total_events}
          color="bg-blue-500/20 text-blue-400"
        />
        <KPICard
          icon={Activity}
          label="Active Events"
          value={statistics.active_events}
          color="bg-green-500/20 text-green-400"
        />
        <KPICard
          icon={AlertTriangle}
          label="Critical Alerts"
          value={statistics.critical_alerts}
          color="bg-red-500/20 text-red-400"
        />
        <KPICard
          icon={TrendingUp}
          label="Avg Response Time"
          value={`${statistics.average_response_time}h`}
          color="bg-purple-500/20 text-purple-400"
        />
      </div>
    </div>
  )
}

export default KPIPanel
