const prisma = require("../lib/prisma");

const getAllPackages = async (req, res) => {
  try {
    const { user } = req;

    const packages = await prisma.package.findMany({});

    return res.status(200).json({
      packages,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

const createPackage = async (req, res) => {
  try {
    const { user } = req;

    const {
      name,
      fromAddress,
      fromLat,
      fromLng,
      toAddress,
      toLat,
      toLng,
      xDimension,
      yDimension,
      zDimension,
      weight,
      status,
    } = req.query;

    if (
      !name &&
      !fromAddress &&
      !fromLat &&
      !fromLng &&
      !toAddress &&
      !toLat &&
      !toLng &&
      !xDimension &&
      !yDimension &&
      !zDimension &&
      !weight
    ) {
      return res
        .status(400)
        .json({ error: "Please provide all the required fields" });
    }

    const packageCreated = await prisma.package.create({
      data: {
        name,
        fromAddress,
        fromLat,
        fromLng,
        toAddress,
        toLat,
        toLng,
        xDimension,
        yDimension,
        zDimension,
        weight,
        ownerId: user.id,
      },
    });

    if (!packageCreated) {
      return res.status(500).json({ error: "Error while creating package" });
    }

    res.status(201).json({
      package: packageCreated,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

const getPackageById = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    const package = await prisma.package.findUnique({
      where: {
        id,
      },
    });

    if (!package) {
      return res.status(404).json({ error: "Package not found" });
    }

    return res.status(200).json({
      package,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

module.exports = { getAllPackages, createPackage, getPackageById };
