"use client";
import { useState, useEffect } from "react";

export default function EditWarehouse() {
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  // Simulate fetching warehouses (replace with real API call if needed)
  useEffect(() => {
    const dummyWarehouses = [
      { id: "1", name: "Main Warehouse", address: "789 Warehouse Rd", latitude: "40.7128", longitude: "-74.0060" },
      { id: "2", name: "Secondary Warehouse", address: "321 Storage Ave", latitude: "34.0522", longitude: "-118.2437" },
    ];
    setWarehouses(dummyWarehouses);
  }, []);

  const handleSelect = (e) => {
    const warehouse = warehouses.find((w) => w.id === e.target.value);
    setSelectedWarehouse(warehouse);
    setUpdatedData(warehouse);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with a real API call
    console.log("Updated Warehouse Data:", updatedData);
    alert("Warehouse updated successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Edit Warehouse</h1>
      <select onChange={handleSelect} className="border p-2">
        <option value="">Select a warehouse</option>
        {warehouses.map((w) => (
          <option key={w.id} value={w.id}>
            {w.name}
          </option>
        ))}
      </select>
      {selectedWarehouse && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input type="text" name="name" placeholder="Name" value={updatedData.name || ""} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={updatedData.address || ""} onChange={handleChange} required />
          <input type="text" name="latitude" placeholder="Latitude" value={updatedData.latitude || ""} onChange={handleChange} required />
          <input type="text" name="longitude" placeholder="Longitude" value={updatedData.longitude || ""} onChange={handleChange} required />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Update</button>
        </form>
      )}
    </div>
  );
}
