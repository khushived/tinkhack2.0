"use client";
import { useState, useEffect } from "react";

export default function EditHub() {
  const [hubs, setHubs] = useState([]);
  const [selectedHub, setSelectedHub] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  // For now, we'll simulate fetching hubs with dummy data.
  useEffect(() => {
    // Replace with a real API call if needed.
    const dummyHubs = [
      { id: "1", name: "Main Hub", address: "123 Main St", latitude: "40.7128", longitude: "-74.0060" },
      { id: "2", name: "Secondary Hub", address: "456 Side Ave", latitude: "34.0522", longitude: "-118.2437" },
    ];
    setHubs(dummyHubs);
  }, []);

  const handleSelect = (e) => {
    const hub = hubs.find((h) => h.id === e.target.value);
    setSelectedHub(hub);
    setUpdatedData(hub);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send updatedData to your backend using fetch or axios.
    console.log("Updated Hub Data:", updatedData);
    alert("Hub updated successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Edit Hub</h1>
      <select onChange={handleSelect} className="border p-2">
        <option value="">Select a hub</option>
        {hubs.map((hub) => (
          <option key={hub.id} value={hub.id}>
            {hub.name}
          </option>
        ))}
      </select>
      {selectedHub && (
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
