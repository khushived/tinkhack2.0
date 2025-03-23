const prisma = require("../lib/prisma");

const getAllHubs = async (req, res) => {
  try {
    const { user } = req;

    const hubs = await prisma.hub.findMany({});

    return res.status(200).json({
      hubs,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const createHub = async (req, res) => {
  try {
    const { user } = req;

    const { name, address, lat, lng } = req.query;

    if (!name || !address || !lat || !lng) {
      return res
        .status(400)
        .json({ error: "Please provide all the required fields" });
    }

    const hubCreated = await prisma.hub.create({
      data: {
        name,
        address,
        lat,
        lng,
      },
    });

    if (!hubCreated) {
      return res.status(500).send("Failed to create hub");
    }

    return res.status(201).json({
      hub: hubCreated,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const getHubById = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    const hub = await prisma.hub.findUnique({
      where: {
        id,
      },
    });

    if (!hub) {
      return res.status(404).json({ error: "Hub not found" });
    }

    return res.status(200).json({
      hub,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { getAllHubs, createHub, getHubById };
