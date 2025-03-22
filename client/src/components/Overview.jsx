"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    orders: 120,
    shipments: 110,
  },
  {
    name: "Feb",
    orders: 150,
    shipments: 145,
  },
  {
    name: "Mar",
    orders: 180,
    shipments: 170,
  },
  {
    name: "Apr",
    orders: 220,
    shipments: 210,
  },
  {
    name: "May",
    orders: 250,
    shipments: 240,
  },
  {
    name: "Jun",
    orders: 280,
    shipments: 270,
  },
  {
    name: "Jul",
    orders: 310,
    shipments: 300,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Bar dataKey="orders" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="shipments" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
