// src/AddCommodity.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './formAnimations.css';

const AddCommodity = () => {
  const [commodity, setCommodity] = useState({
    name: '',
    weight: '',
    dimensions: { x: '', y: '', z: '' },
    from: { lat: '', lon: '' },
    to: { lat: '', lon: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('dimensions')) {
      const dimKey = name.split('.')[1];
      setCommodity((prev) => ({
        ...prev,
        dimensions: { ...prev.dimensions, [dimKey]: value },
      }));
    } else if (name.includes('from')) {
      const key = name.split('.')[1];
      setCommodity((prev) => ({
        ...prev,
        from: { ...prev.from, [key]: value },
      }));
    } else if (name.includes('to')) {
      const key = name.split('.')[1];
      setCommodity((prev) => ({
        ...prev,
        to: { ...prev.to, [key]: value },
      }));
    } else {
      setCommodity((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Commodity Data: ", commodity);
    // Add commodity submission logic here (e.g., an API call)
  };

  return (
    <div className="container mt-4 animated fadeIn">
      <h2 className="mb-4">Add Commodity</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={commodity.name}
            onChange={handleChange}
            placeholder="Enter commodity name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            value={commodity.weight}
            onChange={handleChange}
            placeholder="Enter weight"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dimensions (x, y, z)</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="number"
              name="dimensions.x"
              value={commodity.dimensions.x}
              onChange={handleChange}
              placeholder="X"
              required
              className="me-2"
            />
            <Form.Control
              type="number"
              name="dimensions.y"
              value={commodity.dimensions.y}
              onChange={handleChange}
              placeholder="Y"
              required
              className="me-2"
            />
            <Form.Control
              type="number"
              name="dimensions.z"
              value={commodity.dimensions.z}
              onChange={handleChange}
              placeholder="Z"
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>From Address Coordinates</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="number"
              name="from.lat"
              value={commodity.from.lat}
              onChange={handleChange}
              placeholder="Latitude"
              required
              className="me-2"
            />
            <Form.Control
              type="number"
              name="from.lon"
              value={commodity.from.lon}
              onChange={handleChange}
              placeholder="Longitude"
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>To Address Coordinates</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="number"
              name="to.lat"
              value={commodity.to.lat}
              onChange={handleChange}
              placeholder="Latitude"
              required
              className="me-2"
            />
            <Form.Control
              type="number"
              name="to.lon"
              value={commodity.to.lon}
              onChange={handleChange}
              placeholder="Longitude"
              required
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddCommodity;
