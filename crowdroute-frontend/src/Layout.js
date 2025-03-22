// src/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <div className="text-xl font-bold">CrowdRoute</div>
          <div className="space-x-4">
            <Link to="/map" className="text-blue-500 hover:text-blue-700 transition-colors">Map</Link>
            <Link to="/commodities" className="text-blue-500 hover:text-blue-700 transition-colors">Commodities</Link>
          </div>
        </div>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
