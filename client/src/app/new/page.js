"use client";
import MapView from "@/components/Mapview";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [packages, setPackages] = useState([]);

  return (
    <div>
      <MapView />
    </div>
  );
};

export default TestPage;
