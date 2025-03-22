"use client";

import { MoreHorizontal, Truck, Package, Fuel } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const vehicles = [
  {
    id: "Van-101",
    type: "Delivery Van",
    status: "available",
    driver: null,
    capacity: {
      max: 800,
      current: 0,
    },
    fuel: 92,
    location: "Downtown Hub",
  },
  {
    id: "Truck-202",
    type: "Box Truck",
    status: "in_use",
    driver: "Sarah Williams",
    capacity: {
      max: 2500,
      current: 1800,
    },
    fuel: 65,
    location: "Route 7, Mile 23",
  },
  {
    id: "Van-103",
    type: "Delivery Van",
    status: "available",
    driver: "David Brown",
    capacity: {
      max: 800,
      current: 0,
    },
    fuel: 88,
    location: "North Hub",
  },
  {
    id: "Van-104",
    type: "Delivery Van",
    status: "fueling",
    driver: "Emily Davis",
    capacity: {
      max: 800,
      current: 0,
    },
    fuel: 15,
    location: "East Hub",
  },
];

export function VehiclesList() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vehicle</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned Driver</TableHead>
              <TableHead>Capacity Usage</TableHead>
              <TableHead>Fuel Level</TableHead>
              <TableHead>Location</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{vehicle.id}</div>
                      <div className="text-xs text-muted-foreground">
                        {vehicle.type}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {vehicle.status === "available" && (
                    <Badge className="bg-green-200 text-green-800">
                      Available
                    </Badge>
                  )}
                  {vehicle.status === "in_use" && (
                    <Badge className="bg-blue-200 text-blue-800">In Use</Badge>
                  )}
                  {vehicle.status === "maintenance" && (
                    <Badge className="bg-amber-200 text-amber-800">
                      Maintenance
                    </Badge>
                  )}
                  {vehicle.status === "fueling" && (
                    <Badge className="bg-purple-200 text-purple-800">
                      Fueling
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {vehicle.driver ? (
                    vehicle.driver
                  ) : (
                    <span className="text-muted-foreground">Unassigned</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="w-full max-w-xs">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        <span>
                          {vehicle.capacity.current} / {vehicle.capacity.max} kg
                        </span>
                      </span>
                      <span>
                        {Math.round(
                          (vehicle.capacity.current / vehicle.capacity.max) *
                            100
                        )}
                        %
                      </span>
                    </div>
                    <Progress
                      value={Math.round(
                        (vehicle.capacity.current / vehicle.capacity.max) * 100
                      )}
                      className="h-2"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Fuel
                      className={`h-3.5 w-3.5 ${
                        vehicle.fuel < 30
                          ? "text-red-500"
                          : vehicle.fuel < 60
                          ? "text-amber-500"
                          : "text-green-500"
                      }`}
                    />
                    <span
                      className={
                        vehicle.fuel < 30
                          ? "text-red-500"
                          : vehicle.fuel < 60
                          ? "text-amber-500"
                          : "text-green-500"
                      }
                    >
                      {vehicle.fuel}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>{vehicle.location}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Assign driver</DropdownMenuItem>
                      <DropdownMenuItem>Schedule maintenance</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Update status</DropdownMenuItem>
                      <DropdownMenuItem>Track location</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
