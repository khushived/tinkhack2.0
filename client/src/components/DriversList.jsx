"use client";

import { MoreHorizontal, Phone, MapPin } from "lucide-react";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const drivers = [
  {
    id: "D-1001",
    name: "Michael Johnson",
    status: "available",
    vehicle: "Van-101",
    vehicleType: "Delivery Van",
    location: "Downtown Hub",
    phone: "+1 (555) 123-4567",
    deliveries: 0,
    rating: 4.8,
  },
  {
    id: "D-1002",
    name: "Sarah Williams",
    status: "on_delivery",
    vehicle: "Truck-202",
    vehicleType: "Box Truck",
    location: "Route 7, Mile 23",
    phone: "+1 (555) 234-5678",
    deliveries: 3,
    rating: 4.9,
  },
  {
    id: "D-1003",
    name: "David Brown",
    status: "available",
    vehicle: "Van-103",
    vehicleType: "Delivery Van",
    location: "North Hub",
    phone: "+1 (555) 345-6789",
    deliveries: 0,
    rating: 4.7,
  },
  {
    id: "D-1004",
    name: "Emily Davis",
    status: "on_break",
    vehicle: "Van-104",
    vehicleType: "Delivery Van",
    location: "East Hub Cafeteria",
    phone: "+1 (555) 456-7890",
    deliveries: 0,
    rating: 4.6,
  },
];

export function DriversList() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Deliveries</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40&text=${driver.name.charAt(
                          0
                        )}`}
                      />
                      <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{driver.name}</div>
                      <div className="text-xs text-muted-foreground">
                        ID: {driver.id}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {driver.status === "available" && (
                    <Badge className="bg-green-200 text-green-800">
                      Available
                    </Badge>
                  )}
                  {driver.status === "on_delivery" && (
                    <Badge className="bg-blue-200 text-blue-800">
                      On Delivery
                    </Badge>
                  )}
                  {driver.status === "on_break" && (
                    <Badge className="bg-amber-200 text-amber-800">
                      On Break
                    </Badge>
                  )}
                  {driver.status === "off_duty" && (
                    <Badge className="bg-gray-200 text-gray-800">
                      Off Duty
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div>
                    <div>{driver.vehicle}</div>
                    <div className="text-xs text-muted-foreground">
                      {driver.vehicleType}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{driver.location}</span>
                  </div>
                </TableCell>
                <TableCell>{driver.deliveries}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <span>{driver.rating}</span>
                    <span className="text-amber-500">★</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 mr-1"
                      asChild
                    >
                      <a href={`tel:${driver.phone}`}>
                        <Phone className="h-4 w-4" />
                        <span className="sr-only">Call driver</span>
                      </a>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Assign shipment</DropdownMenuItem>
                        <DropdownMenuItem>Message driver</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Change vehicle</DropdownMenuItem>
                        <DropdownMenuItem>Update status</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
