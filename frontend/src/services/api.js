const API_BASE_URL = 'http://localhost:8001/api'

export const fetchEvents = async () => {
  const response = await fetch(`${API_BASE_URL}/events`)
  if (!response.ok) throw new Error('Failed to fetch events')
  return response.json()
}

export const fetchStatistics = async () => {
  const response = await fetch(`${API_BASE_URL}/statistics`)
  if (!response.ok) throw new Error('Failed to fetch statistics')
  return response.json()
}

export const fetchEvent = async (eventId) => {
  const response = await fetch(`${API_BASE_URL}/events/${eventId}`)
  if (!response.ok) throw new Error('Failed to fetch event')
  return response.json()
}

export const classifyEvent = async (data) => {
  const response = await fetch(`${API_BASE_URL}/classify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Failed to classify event')
  return response.json()
}

export const fetchHealth = async () => {
  const response = await fetch(`${API_BASE_URL}/health`)
  if (!response.ok) throw new Error('Failed to fetch health status')
  return response.json()
}
