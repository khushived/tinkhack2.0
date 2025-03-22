// src/index.js
import 'leaflet/dist/leaflet.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import MapPage from './MapPage';
import CommoditiesPage from './CommoditiesPage';
import AddCommodity from './AddCommodity';
import EditCommodity from './EditCommodity';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="map" element={<MapPage />} />
          <Route path="commodities" element={<CommoditiesPage />} />
          <Route path="commodities/add" element={<AddCommodity />} />
          <Route path="commodities/edit" element={<EditCommodity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
