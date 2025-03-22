import { Package, Truck, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ShipmentSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pending Shipments
          </CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">128</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-green-500">
              <span>+12 today</span>
            </div>
            <span className="mx-1">•</span>
            <span>2,450 packages</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Available Drivers
          </CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-amber-500">
              <span>8 on break</span>
            </div>
            <span className="mx-1">•</span>
            <span>32 total drivers</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Delivery Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.8 hrs</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-green-500">
              <span>-15 min from avg</span>
            </div>
            <span className="mx-1">•</span>
            <span>On-time: 96%</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Delayed Shipments
          </CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-red-500">
              <span>+2 from yesterday</span>
            </div>
            <span className="mx-1">•</span>
            <span>5.4% of total</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
