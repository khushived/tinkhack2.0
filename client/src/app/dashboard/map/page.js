"use client";

import MapView from "@/components/MapView";
import React, { useState } from "react";

export default function Page() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex flex-col items-center h-screen w-full">
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
        <div className="h-full w-full">
          <MapView />
        </div>
      )}
    </div>
  );
}
