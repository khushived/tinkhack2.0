const prisma = require("../lib/prisma");

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
  calculateDeliveryPath,
};
