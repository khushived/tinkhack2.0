const prisma = require("../lib/prisma");

const getAllDrivers = async (req, res) => {
  try {
    const drivers = await prisma.driver.findMany({});

    return res.status(200).json({ drivers });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const createDriver = async (req, res) => {
  try {
    const { name, licenseNumber, phone } = req.query;

    if (!name || !licenseNumber || !phone) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    const driverCreated = await prisma.driver.create({
      data: {
        name,
        licenseNumber,
        phone,
      },
    });

    return res.status(201).json({ driver: driverCreated });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;

    const driver = await prisma.driver.findUnique({
      where: { id },
    });

    if (!driver) {
      return res.status(404).json({ error: "Driver not found" });
    }

    return res.status(200).json({ driver });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { getAllDrivers, createDriver, getDriverById };
