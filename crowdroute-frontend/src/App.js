// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MapView from './MapView';
import Commodities from './Commodities';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">CrowdRoute</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/map">Map</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/commodities">Commodities</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/map" element={<MapView />} />
          <Route path="/commodities" element={<Commodities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
