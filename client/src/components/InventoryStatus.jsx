"use client";

import { AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const inventoryItems = [
  {
    name: "T-Shirts",
    stock: 85,
    threshold: 20,
    total: 100,
  },
  {
    name: "Jeans",
    stock: 32,
    threshold: 15,
    total: 50,
  },
  {
    name: "Sneakers",
    stock: 12,
    threshold: 10,
    total: 40,
  },
  {
    name: "Hoodies",
    stock: 5,
    threshold: 10,
    total: 30,
  },
  {
    name: "Backpacks",
    stock: 24,
    threshold: 5,
    total: 25,
  },
];

export function InventoryStatus() {
  return (
    <div className="space-y-4">
      {inventoryItems.map((item) => {
        const percentage = (item.stock / item.total) * 100;
        const lowStock = item.stock <= item.threshold;

        return (
          <div key={item.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.name}</span>
                {lowStock && (
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                )}
              </div>
              <span className="text-sm text-muted-foreground">
                {item.stock} / {item.total}
              </span>
            </div>
            <Progress
              value={percentage}
              className={lowStock ? "bg-red-100" : ""}
              indicatorClassName={lowStock ? "bg-red-500" : ""}
            />
          </div>
        );
      })}
    </div>
  );
}
