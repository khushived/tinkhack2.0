"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Package, Truck, Users, ShoppingCart, 
  BarChart3, Settings, AlertCircle, Map, Home, Warehouse, 
  Pencil
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DashboardNav() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: ShoppingCart,
    },
    {
      title: "Shipments",
      href: "/dashboard/shipments",
      icon: Truck,
    },
    {
      title: "Inventory",
      href: "/dashboard/inventory",
      icon: Package,
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      icon: Users,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Issues",
      href: "/dashboard/issues",
      icon: AlertCircle,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Add Hub",
      href: "/dashboard/add-hub",
      icon: Home,
    },
    {
      title: "Edit Hub",
      href: "/dashboard/edit-hub",
      icon: Pencil,
    },
    {
      title: "Add Warehouse",
      href: "/dashboard/add-warehouse",
      icon: Warehouse,
    },
    {
      title: "Edit Warehouse",
      href: "/dashboard/edit-warehouse",
      icon: Pencil,
    },
    {
      title: "View Map",
      href: "/dashboard/map",
      icon: Map,
    },
  ].map((item) => ({
    ...item,
    variant: pathname === item.href ? "default" : "ghost",
  }));

  return (
    <nav className="grid gap-1 px-2">
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant={item.variant}
          size="sm"
          className={cn(
            "justify-start",
            item.variant === "default" && "bg-primary text-primary-foreground"
          )}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
