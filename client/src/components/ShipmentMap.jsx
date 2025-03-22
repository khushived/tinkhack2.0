"use client";

import { MapPin, Truck, Package } from "lucide-react";

export function ShipmentMap() {
  return (
    <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden rounded-b-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <MapPin className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
          <p>Interactive map would display here with:</p>
          <ul className="list-disc list-inside text-left max-w-md mx-auto mt-2">
            <li className="flex items-center gap-2 mt-1">
              <Truck className="h-4 w-4 text-blue-500" /> Driver locations (blue
              pins)
            </li>
            <li className="flex items-center gap-2 mt-1">
              <Package className="h-4 w-4 text-green-500" /> Delivery
              destinations (green pins)
            </li>
            <li className="flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4 text-red-500" /> Warehouses and hubs
              (red pins)
            </li>
          </ul>
          <p className="mt-4">
            In a real implementation, this would use a mapping library like
            Google Maps, Mapbox, or Leaflet to show real-time locations of
            drivers, vehicles, and delivery destinations.
          </p>
        </div>
      </div>
    </div>
  );
}
