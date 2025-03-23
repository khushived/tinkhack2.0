"use client";
import { useState } from "react";

export default function AddHub() {
  const [hub, setHub] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHub((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Adjust the URL to your backend endpoint for hubs if available.
    // For now, we can log the data or send it to a placeholder API.
    console.log("New Hub Data:", hub);
    alert("Hub added successfully!");
    setHub({ name: "", address: "", latitude: "", longitude: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Add Hub</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="name" placeholder="Name" value={hub.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={hub.address} onChange={handleChange} required />
        <input type="text" name="latitude" placeholder="Latitude" value={hub.latitude} onChange={handleChange} required />
        <input type="text" name="longitude" placeholder="Longitude" value={hub.longitude} onChange={handleChange} required />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
}
