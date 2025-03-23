const prisma = require("../lib/prisma");

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await prisma.vehicle.findMany({});

    return res.status(200).json({ vehicles });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const createVehicle = async (req, res) => {
  try {
    const { plateNumber, type, capacity } = req.query;

    if (!plateNumber || !type || !capacity) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    const vehicleCreated = await prisma.vehicle.create({
      data: {
        plateNumber,
        type,
        capacity: parseFloat(capacity), // Ensuring capacity is stored as a number
      },
    });

    return res.status(201).json({ vehicle: vehicleCreated });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
    });

    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    return res.status(200).json({ vehicle });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { getAllVehicles, createVehicle, getVehicleById };
