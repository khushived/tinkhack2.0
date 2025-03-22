// src/Commodities.js
import React from 'react';
import { Link } from 'react-router-dom';

const Commodities = () => {
  return (
    <div className="text-center">
      <h2>Commodities</h2>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/commodities/add" className="btn btn-primary mx-2">
          Add Commodity
        </Link>
        <Link to="/commodities/edit" className="btn btn-secondary mx-2">
          Edit Commodity
        </Link>
      </div>
    </div>
  );
};

export default Commodities;
