"use client";
import { CalendarClock, Filter, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DriversList } from "@/components/DriversList";
import { ShipmentFilters } from "@/components/ShippingList";
import { ShipmentMap } from "@/components/ShipmentMap";
import { VehiclesList } from "@/components/Vehicle-list";
import { ShipmentSummary } from "@/components/ShipmentSummary";
import MapView from "@/components/Mapview";

// import { DriversList } from "./components/drivers-list";
// import { ShipmentSummary } from "./components/shipment-summary";
// import { VehiclesList } from "./components/vehicles-list";
// import { ShipmentMap } from "./components/shipment-map";

// export const metadata: Metadata = {
//   title: "Shipments | Logistics Platform",
//   description: "Manage your shipments, drivers, and vehicles",
// };

export default function ShipmentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Shipments</h2>
          <p className="text-muted-foreground">
            Manage your shipments, drivers, and vehicles
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <CalendarClock className="h-3.5 w-3.5" />
            <span>Today</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Refresh</span>
          </Button>
        </div>
      </div>

      <ShipmentSummary />

      <Tabs defaultValue="map" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipment Map</CardTitle>
              <CardDescription>
                View all active shipments and driver locations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0"><MapView /></CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drivers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Drivers</CardTitle>
              <CardDescription>
                Manage your drivers and assign shipments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DriversList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vehicles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Fleet</CardTitle>
              <CardDescription>
                Manage your vehicles and their assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <VehiclesList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
