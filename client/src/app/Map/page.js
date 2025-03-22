"use client";

import MapView from "@/components/Mapview";
import React from "react";
import { useState } from "react";

const page = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="flex flex-col items-center">
      {!showMap ? (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Welcome to CrowdRoute Map</h1>
          <button
            onClick={() => setShowMap(true)}
            className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-all duration-300"
          >
            Show Maps
          </button>
        </div>
      ) : (
        <MapView />
      )}
    </div>
  );
};

export default page;
