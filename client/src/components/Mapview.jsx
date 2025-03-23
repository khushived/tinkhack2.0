"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/lib/fixLeaflet"; // Fix Leaflet icons

export default function MapView() {
  const position = [9.9816, 76.2999]; // Ernakulam, Kerala

  return (
    <div className="w-full h-full">
      <MapContainer center={position} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Welcome to Ernakulam!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
