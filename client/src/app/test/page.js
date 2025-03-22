"use client";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [packages, setPackages] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/packages`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        } else {
          console.error("Failed to fetch packages");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div>
      <h1>Packages</h1>
      <ul>
        {packages.map((pkg, index) => (
          <li key={index}>{pkg.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
