"use client";

import { useState } from "react";

const AUTH_TOKEN = 'logistics_token'


const AddHub = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    lat: "",
    lng: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/hubs `,
        {
          method: "POST",
          headers: { "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN)
           },
          credentials: "include",
          body: JSON.stringify({
            name: formData.name,
            address: formData.address,
            lat: parseFloat(formData.lat),
            lng: parseFloat(formData.lng),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Hub added successfully!");
        setFormData({ name: "", address: "", lat: "", lng: "" }); // Reset form after success
      } else {
        alert(data.error || "Failed to add hub!");
      }
    } catch (error) {
      console.error("Error adding hub:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Hub</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Hub Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="number"
          step="any"
          name="lat"
          placeholder="Latitude"
          value={formData.lat}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="number"
          step="any"
          name="lng"
          placeholder="Longitude"
          value={formData.lng}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Hub
        </button>
      </form>
    </div>
  );
};

export default AddHub;
