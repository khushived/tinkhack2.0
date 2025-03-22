// src/App.js
import React, { useState } from 'react';
import './App.css';
import MapView from './MapView';

function App() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="App">
      {!showMap ? (
        <div style={{ padding: '20px' }}>
          <h1>Welcome to CrowdRoute</h1>
          <button onClick={() => setShowMap(true)}>Show Maps</button>
        </div>
      ) : (
        <MapView />
      )}
    </div>
  );
}

export default App;
