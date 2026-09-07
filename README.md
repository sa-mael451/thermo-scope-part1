# THERMO-SCOPE - Part 1 Basic Prototype

**AI-Powered Industrial Thermal Anomaly Intelligence Platform**

This is Part 1 of the THERMO-SCOPE prototype - a basic working version demonstrating the core architecture and UI.

---

## 🎯 What This Version Includes

✅ **Backend (FastAPI)**
- 7 API endpoints (health, events, facilities, statistics, alerts, event detail, classify)
- Mock data responses (3 sample thermal events)
- CORS enabled for frontend communication
- Interactive API docs at `/docs`

✅ **Frontend (React + Vite)**
- Professional command center dark theme UI
- Top navigation with branding
- Left sidebar with event list
- Interactive Leaflet map with OpenStreetMap
- Right panel for event details
- Bottom KPI dashboard
- Responsive layout

✅ **Features Working**
- Event list with search bar
- Map markers (color-coded by event type)
- Event selection (click marker or list item)
- Event detail panel with thermal metrics
- KPI statistics panel
- Frontend ↔ Backend communication

---

## 🚀 Quick Start

### Prerequisites

- **Python 3.10+** (for backend)
- **Node.js 18+** (for frontend)
- **npm** (package manager)

### Installation

#### 1. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

#### 2. Frontend Setup

```bash
cd frontend
npm install
```

### Running the Application

#### Terminal 1: Start Backend

```bash
cd backend
source venv/bin/activate
python main.py
```

**Expected Output:**
```
🔥 Starting THERMO-SCOPE Backend...
📍 API: http://localhost:8001
📚 Docs: http://localhost:8001/docs
INFO:     Uvicorn running on http://0.0.0.0:8001
```

#### Terminal 2: Start Frontend

```bash
cd frontend
npm run dev
```

**Expected Output:**
```
VITE v5.x.x ready in XXX ms

➜  Local:   http://localhost:5173/
```

#### Access the Application

Open your browser and navigate to: **http://localhost:5173**

---

## 📡 API Endpoints

**Base URL:** `http://localhost:8001`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/events` | Get all thermal events |
| GET | `/api/facilities` | Get all monitored facilities |
| GET | `/api/statistics` | Get platform statistics |
| GET | `/api/alerts` | Get all alerts |
| GET | `/api/events/{id}` | Get specific event details |
| POST | `/api/classify` | Classify a thermal event |

**Interactive API Documentation:** http://localhost:8001/docs

---

## 🧪 Test the System

### Backend API Test

```bash
# Test health endpoint
curl http://localhost:8001/api/health

# Expected response:
# {
#   "status": "operational",
#   "service": "thermo-scope",
#   "version": "1.0.0",
#   "timestamp": "2024-..."
# }
```

### Frontend Test

1. Open http://localhost:5173
2. You should see 3 thermal events on the map
3. Click any marker - event details appear on the right
4. Click any event in the left sidebar
5. Check the KPI panel at the bottom

---

## 📊 Current Features

### Backend
- ✅ FastAPI application with CORS
- ✅ 7 RESTful API endpoints
- ✅ Mock data for 3 thermal events
- ✅ Pydantic models for type safety
- ✅ Auto-generated API documentation

### Frontend
- ✅ React 18 with Vite
- ✅ TailwindCSS for styling
- ✅ React-Leaflet for mapping
- ✅ Lucide React for icons
- ✅ Professional command center UI
- ✅ Responsive layout
- ✅ Event list sidebar
- ✅ Interactive map
- ✅ Event detail panel
- ✅ KPI dashboard

---

## 🎨 UI Components

### Top Navigation
- Application branding
- System status indicator

### Left Sidebar
- Event list with search
- Event count
- Click to select event

### Main Map Area
- OpenStreetMap tiles
- Color-coded markers by event type:
  - 🔴 Red: Industrial Fire
  - 🟠 Orange: Gas Flare
  - 🟡 Yellow: Wildfire
  - 🟢 Green: Agricultural Burn
  - 🟣 Purple: Mining Thermal Source
  - ⚪ Gray: Other
- Click marker to view details

### Right Panel (Event Detail)
- Event ID and risk level
- Event type and location
- Thermal metrics (temperature, brightness, confidence)
- Detection timestamp
- Close button

### Bottom KPI Panel
- Total Events
- Active Events
- Critical Alerts
- Average Response Time

---

## 📁 Project Structure

```
Part 1/
├── backend/
│   ├── main.py                  # FastAPI application
│   ├── requirements.txt         # Python dependencies
│   ├── models/                  # (empty for Part 1)
│   ├── services/                # (empty for Part 1)
│   ├── data/                    # (empty for Part 1)
│   └── database/                # (empty for Part 1)
│
├── frontend/
│   ├── package.json             # Node dependencies
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # TailwindCSS config
│   ├── postcss.config.js        # PostCSS config
│   ├── index.html               # Entry HTML
│   └── src/
│       ├── main.jsx             # React entry point
│       ├── App.jsx              # Main application component
│       ├── index.css            # Global styles
│       ├── components/
│       │   ├── Map.jsx          # Leaflet map component
│       │   ├── Sidebar.jsx      # Event list sidebar
│       │   ├── EventDetail.jsx  # Event detail panel
│       │   └── KPIPanel.jsx     # KPI dashboard
│       └── services/
│           └── api.js           # API client functions
│
└── README.md                    # This file
```

---

## 🔧 Technology Stack

### Backend
- **FastAPI** - Modern async Python web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Utility-first CSS
- **React-Leaflet** - Leaflet for React
- **Leaflet** - Interactive maps
- **Lucide React** - Icon library

---

## 🐛 Known Limitations (Part 1)

This is a basic prototype. The following are **NOT** yet implemented:

- ❌ Real satellite data (using mock data)
- ❌ AI classification engine (mock responses)
- ❌ Database (in-memory mock data)
- ❌ Facilities visualization
- ❌ Advanced filtering
- ❌ Real-time updates
- ❌ Alert management
- ❌ Authentication
- ❌ Analytics dashboard
- ❌ Temporal analysis

**These features will be added in subsequent parts.**

---

## ✅ What's Working

1. ✅ Backend server starts on port 8001
2. ✅ Frontend server starts on port 5173
3. ✅ Frontend can fetch data from backend
4. ✅ Map displays with 3 event markers
5. ✅ Markers are color-coded by event type
6. ✅ Clicking marker shows event details
7. ✅ Event list is functional
8. ✅ Event selection works (map ↔ sidebar)
9. ✅ KPI panel displays statistics
10. ✅ Professional UI/UX with dark theme

---

## 🎓 Next Steps (Future Parts)

**Part 2:** Add real data and classification
- Load 120+ simulated thermal events
- Implement AI classification logic
- Add risk assessment
- Create facilities database

**Part 3:** Advanced features
- Alert management system
- Analytics dashboard with charts
- Temporal analysis
- Event simulation

**Part 4:** Polish and production-ready
- Database integration (SQLite)
- Authentication
- Deployment configuration
- Performance optimization

---

## 📞 Troubleshooting

### Port Already in Use

**Backend (port 8001):**
```bash
# Kill process on port 8001
lsof -ti:8001 | xargs kill -9
```

**Frontend (port 5173):**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### CORS Errors

Make sure the backend is running on port 8001 before starting the frontend.

### Map Not Loading

Check that you have internet connection (OpenStreetMap tiles require internet).

### No Events Showing

Check the browser console (F12) for errors. Make sure the backend API is returning data:
```bash
curl http://localhost:8001/api/events
```

---

## 🎉 Status

**✅ PART 1 COMPLETE**

This basic prototype demonstrates:
- ✅ Working backend API
- ✅ Working frontend UI
- ✅ Frontend ↔ Backend communication
- ✅ Interactive map
- ✅ Event visualization
- ✅ Professional command center aesthetic

**Ready for Part 2 development!**

---

**Version:** 1.0.0 (Part 1 - Basic Prototype)  
**Last Updated:** September 7, 2026  
**Status:** ✅ Working
