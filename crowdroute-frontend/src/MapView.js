// src/MapView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import io from 'socket.io-client';

const MapView = () => {
  const [markers, setMarkers] = useState([]);
  // Default center of the map (New York City)
  const defaultPosition = [40.7128, -74.0060];

  // Form state
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [popupText, setPopupText] = useState('');

  // Initialize socket connection
  useEffect(() => {
    const socket = io();

    socket.on('newMarker', (newMarker) => {
      setMarkers(prevMarkers => [...prevMarkers, newMarker]);
    });

    socket.on('markers', (initialMarkers) => {
      setMarkers(initialMarkers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Fallback: Fetch markers from the server
  useEffect(() => {
    axios.get('/api/markers')
      .then(response => setMarkers(response.data))
      .catch(error => console.error("Error fetching markers:", error));
  }, []);

  // Function to handle form submission
  const handleAddMarker = (e) => {
    e.preventDefault();
    // Convert lat and lon to numbers
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);

    // Basic validation
    if (isNaN(latitude) || isNaN(longitude) || popupText.trim() === '') {
      alert("Please provide valid latitude, longitude, and popup text.");
      return;
    }

    axios.post('/api/addMarker', {
      lat: latitude,
      lon: longitude,
      popup: popupText
    })
    .then(response => {
      // Reset form fields after successful submission
      setLat('');
      setLon('');
      setPopupText('');
      // No need to update markers here because Socket.IO will handle it.
    })
    .catch(error => {
      console.error("Error adding marker:", error);
    });
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {/* Form to add a new marker */}
      <div style={{
        position: 'absolute',
        zIndex: 1000,
        top: 10,
        left: 10,
        background: 'white',
        padding: '15px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }}>
        <h3>Add a Marker</h3>
        <form onSubmit={handleAddMarker}>
          <div>
            <label>Latitude: </label>
            <input
              type="text"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="e.g., 40.7128"
              required
            />
          </div>
          <div>
            <label>Longitude: </label>
            <input
              type="text"
              value={lon}
              onChange={(e) => setLon(e.target.value)}
              placeholder="e.g., -74.0060"
              required
            />
          </div>
          <div>
            <label>Popup Text: </label>
            <input
              type="text"
              value={popupText}
              onChange={(e) => setPopupText(e.target.value)}
              placeholder="Marker description"
              required
            />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>
            Add Marker
          </button>
        </form>
      </div>

      <MapContainer center={defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(marker => (
          <Marker key={marker.id} position={[marker.lat, marker.lon]}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
