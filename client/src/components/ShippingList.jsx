"use client";

import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function ShipmentFilters() {
  const [statusFilters, setStatusFilters] = useState([
    { id: "available", label: "Available", checked: false },
    { id: "on_delivery", label: "On Delivery", checked: false },
    { id: "on_break", label: "On Break", checked: false },
    { id: "off_duty", label: "Off Duty", checked: false },
  ]);

  const [vehicleFilters, setVehicleFilters] = useState([
    { id: "van", label: "Delivery Van", checked: false },
    { id: "truck", label: "Box Truck", checked: false },
    { id: "semi", label: "Semi Truck", checked: false },
  ]);

  const activeFilters = [
    ...statusFilters.filter((f) => f.checked),
    ...vehicleFilters.filter((f) => f.checked),
  ];

  const toggleStatusFilter = (id) => {
    setStatusFilters((prev) =>
      prev.map((filter) =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  const toggleVehicleFilter = (id) => {
    setVehicleFilters((prev) =>
      prev.map((filter) =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  const clearFilters = () => {
    setStatusFilters((prev) =>
      prev.map((filter) => ({ ...filter, checked: false }))
    );
    setVehicleFilters((prev) =>
      prev.map((filter) => ({ ...filter, checked: false }))
    );
  };

  return (
    <div className="flex items-center gap-2">
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mr-2">
          {activeFilters.map((filter) => (
            <Badge
              key={filter.id}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {filter.label}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => {
                  if (statusFilters.find((f) => f.id === filter.id)) {
                    toggleStatusFilter(filter.id);
                  } else {
                    toggleVehicleFilter(filter.id);
                  }
                }}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove filter</span>
              </Button>
            </Badge>
          ))}

          {activeFilters.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={clearFilters}
            >
              Clear all
            </Button>
          )}
        </div>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Driver Status</DropdownMenuLabel>
          {statusFilters.map((filter) => (
            <DropdownMenuCheckboxItem
              key={filter.id}
              checked={filter.checked}
              onCheckedChange={() => toggleStatusFilter(filter.id)}
            >
              {filter.label}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Vehicle Type</DropdownMenuLabel>
          {vehicleFilters.map((filter) => (
            <DropdownMenuCheckboxItem
              key={filter.id}
              checked={filter.checked}
              onCheckedChange={() => toggleVehicleFilter(filter.id)}
            >
              {filter.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
