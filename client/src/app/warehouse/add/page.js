"use client";
import { useState } from "react";

export default function AddWarehouse() {
  const [warehouse, setWarehouse] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Adjust the URL if you have a backend endpoint for warehouses.
    console.log("New Warehouse Data:", warehouse);
    alert("Warehouse added successfully!");
    setWarehouse({ name: "", address: "", latitude: "", longitude: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Add Warehouse</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="name" placeholder="Name" value={warehouse.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={warehouse.address} onChange={handleChange} required />
        <input type="text" name="latitude" placeholder="Latitude" value={warehouse.latitude} onChange={handleChange} required />
        <input type="text" name="longitude" placeholder="Longitude" value={warehouse.longitude} onChange={handleChange} required />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
}
