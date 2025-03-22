"use client"



import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, Truck, Users, ShoppingCart, BarChart3, Settings, AlertCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


export function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
      variant: pathname === "/dashboard" ? "default" : "ghost",
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: ShoppingCart,
      variant: pathname === "/dashboard/orders" ? "default" : "ghost",
    },
    {
      title: "Shipments",
      href: "/dashboard/shipments",
      icon: Truck,
      variant: pathname === "/dashboard/shipments" ? "default" : "ghost",
    },
    {
      title: "Inventory",
      href: "/dashboard/inventory",
      icon: Package,
      variant: pathname === "/dashboard/inventory" ? "default" : "ghost",
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      icon: Users,
      variant: pathname === "/dashboard/customers" ? "default" : "ghost",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
      variant: pathname === "/dashboard/analytics" ? "default" : "ghost",
    },
    {
      title: "Issues",
      href: "/dashboard/issues",
      icon: AlertCircle,
      variant: pathname === "/dashboard/issues" ? "default" : "ghost",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      variant: pathname === "/dashboard/settings" ? "default" : "ghost",
    },
  ]

  return (
    <nav className="grid gap-1 px-2">
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant={item.variant}
          size="sm"
          className={cn("justify-start", item.variant === "default" && "bg-primary text-primary-foreground")}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

