from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

app = FastAPI(
    title="THERMO-SCOPE API",
    description="AI-Powered Industrial Thermal Anomaly Intelligence Platform",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Pydantic Models
class HealthResponse(BaseModel):
    status: str
    service: str
    version: str
    timestamp: datetime


class ThermalEvent(BaseModel):
    id: str
    type: str
    latitude: float
    longitude: float
    temperature: float
    brightness: float
    confidence: float
    risk_level: str
    detected_at: datetime
    location_name: str


class Facility(BaseModel):
    id: str
    name: str
    type: str
    latitude: float
    longitude: float
    risk_score: float
    status: str


class Statistics(BaseModel):
    total_events: int
    active_events: int
    critical_alerts: int
    events_by_type: dict
    average_response_time: float


class Alert(BaseModel):
    id: str
    event_id: str
    severity: str
    message: str
    created_at: datetime
    acknowledged: bool


class ClassificationRequest(BaseModel):
    latitude: float
    longitude: float
    temperature: float
    brightness: float
    frp: float  # Fire Radiative Power
    land_cover: str
    proximity_to_infrastructure: float


class ClassificationResponse(BaseModel):
    event_type: str
    confidence: float
    risk_level: str
    reasoning: str


# API Endpoints

@app.get("/api/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    return HealthResponse(
        status="operational",
        service="thermo-scope",
        version="1.0.0",
        timestamp=datetime.now()
    )


@app.get("/api/events")
async def get_events():
    """Get all thermal events"""
    # Mock data for Part 1
    return [
        {
            "id": "TH-001",
            "type": "Industrial Fire",
            "latitude": 19.0760,
            "longitude": 72.8777,
            "temperature": 450.5,
            "brightness": 85.2,
            "confidence": 92.5,
            "risk_level": "HIGH",
            "detected_at": datetime.now().isoformat(),
            "location_name": "Mumbai, Maharashtra"
        },
        {
            "id": "TH-002",
            "type": "Gas Flare",
            "latitude": 23.0225,
            "longitude": 72.5714,
            "temperature": 380.0,
            "brightness": 75.0,
            "confidence": 88.0,
            "risk_level": "MEDIUM",
            "detected_at": datetime.now().isoformat(),
            "location_name": "Ahmedabad, Gujarat"
        },
        {
            "id": "TH-003",
            "type": "Wildfire",
            "latitude": 28.6139,
            "longitude": 77.2090,
            "temperature": 520.0,
            "brightness": 95.0,
            "confidence": 95.0,
            "risk_level": "CRITICAL",
            "detected_at": datetime.now().isoformat(),
            "location_name": "Delhi NCR"
        }
    ]


@app.get("/api/facilities")
async def get_facilities():
    """Get all monitored facilities"""
    # Mock data for Part 1
    return [
        {
            "id": "FAC-001",
            "name": "Jamnagar Refinery",
            "type": "Oil Refinery",
            "latitude": 22.4707,
            "longitude": 70.0577,
            "risk_score": 75.5,
            "status": "Active"
        },
        {
            "id": "FAC-002",
            "name": "NTPC Vindhyachal",
            "type": "Power Plant",
            "latitude": 24.0963,
            "longitude": 82.6115,
            "risk_score": 45.2,
            "status": "Active"
        }
    ]


@app.get("/api/statistics")
async def get_statistics():
    """Get platform statistics"""
    # Mock data for Part 1
    return {
        "total_events": 3,
        "active_events": 2,
        "critical_alerts": 1,
        "events_by_type": {
            "Industrial Fire": 1,
            "Gas Flare": 1,
            "Wildfire": 1
        },
        "average_response_time": 2.5
    }


@app.get("/api/alerts")
async def get_alerts():
    """Get all alerts"""
    # Mock data for Part 1
    return [
        {
            "id": "ALERT-001",
            "event_id": "TH-003",
            "severity": "CRITICAL",
            "message": "Critical wildfire detected near populated area",
            "created_at": datetime.now().isoformat(),
            "acknowledged": False
        }
    ]


@app.get("/api/events/{event_id}")
async def get_event(event_id: str):
    """Get specific event by ID"""
    # Mock data for Part 1
    if event_id == "TH-001":
        return {
            "id": "TH-001",
            "type": "Industrial Fire",
            "latitude": 19.0760,
            "longitude": 72.8777,
            "temperature": 450.5,
            "brightness": 85.2,
            "confidence": 92.5,
            "risk_level": "HIGH",
            "detected_at": datetime.now().isoformat(),
            "location_name": "Mumbai, Maharashtra",
            "description": "Thermal anomaly detected near industrial facility"
        }
    raise HTTPException(status_code=404, detail="Event not found")


@app.post("/api/classify")
async def classify_event(request: ClassificationRequest):
    """Classify a thermal event using AI"""
    # Mock classification for Part 1
    return {
        "event_type": "Industrial Fire",
        "confidence": 87.5,
        "risk_level": "HIGH",
        "reasoning": "High temperature and proximity to industrial infrastructure suggest industrial fire"
    }


if __name__ == "__main__":
    import uvicorn
    print("🔥 Starting THERMO-SCOPE Backend...")
    print("📍 API: http://localhost:8001")
    print("📚 Docs: http://localhost:8001/docs")
    uvicorn.run(app, host="0.0.0.0", port=8001)
