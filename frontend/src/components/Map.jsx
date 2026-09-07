import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Create custom colored markers
const createColoredIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  })
}

const getMarkerColor = (type) => {
  const colors = {
    'Industrial Fire': '#ef4444',
    'Gas Flare': '#f97316',
    'Wildfire': '#eab308',
    'Agricultural Burn': '#22c55e',
    'Mining Thermal Source': '#8b5cf6',
    'Other': '#6b7280',
  }
  return colors[type] || '#6b7280'
}

const Map = ({ events, selectedEvent, onSelectEvent }) => {
  const center = [20.5937, 78.9629] // India center
  const zoom = 5

  return (
    <div className="w-full h-full">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {events.map((event) => (
          <Marker
            key={event.id}
            position={[event.latitude, event.longitude]}
            icon={createColoredIcon(getMarkerColor(event.type))}
            eventHandlers={{
              click: () => onSelectEvent(event),
            }}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold text-base mb-1">{event.type}</h3>
                <p className="text-gray-600 mb-1">{event.location_name}</p>
                <p className="text-xs">
                  <span className="font-semibold">Risk:</span> {event.risk_level}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Confidence:</span> {event.confidence}%
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
