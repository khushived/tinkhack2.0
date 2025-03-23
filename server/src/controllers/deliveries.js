const prisma = require("../lib/prisma");
const axios = require("axios");

const getPickUps = async (req, res) => {
  try {
    const { hubId } = req.params;

    if (!hubId) {
      return res.status(400).json({ error: "Hub ID is required" });
    }

    const hub = await prisma.hub.findUnique({
      where: {
        id: hubId,
      },
    });

    if (!hub) {
      return res.status(404).json({ error: "Hub not found" });
    }

    const range = 0.1;

    const pickUps = await prisma.package.findMany({
      where: {
        status: "PENDING",
        fromLat: {
          gte: hub.lat - range,
          lte: hub.lat + range,
        },
        fromLng: {
          gte: hub.lng - range,
          lte: hub.lng + range,
        },
      },
    });

    return res.status(200).json({ pickUps });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const getDropOffs = async (req, res) => {
  try {
    const { hubId } = req.params;

    if (!hubId) {
      return res.status(400).json({ error: "Hub ID is required" });
    }

    const hub = await prisma.hub.findUnique({
      where: {
        id: hubId,
      },
    });

    if (!hub) {
      return res.status(404).json({ error: "Hub not found" });
    }

    const range = 0.1;

    const dropOffs = await prisma.package.findMany({
      where: {
        status: "INTRANSIT",
        toLat: {
          gte: hub.lat - range,
          lte: hub.lat + range,
        },
        toLng: {
          gte: hub.lng - range,
          lte: hub.lng + range,
        },
      },
    });

    return res.status(200).json({ dropOffs });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
}

const calculateDeliveryPath = async (req, res) => {
  try {
    const { packageId } = req.params;

    const package = await prisma.package.findUnique({
      where: {
        id: packageId,
      },
    });

    if (!package) {
      return res.status(404).json({ error: "Package not found" });
    }
    w;

    const { data, status } = await axios.get(
      "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248e0c35051753e41a3940c0a07eaee64e5&start=8.681495,49.41461&end=8.687872,49.420318"
    );

    if (status !== 200) {
      return res.status(500).send("Failed to calculate delivery path");
    }

    console.log(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  getPickUps,
  getDropOffs,
  calculateDeliveryPath,
};
