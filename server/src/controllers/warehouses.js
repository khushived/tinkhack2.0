const prisma = require("../lib/prisma");

const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await prisma.warehouse.findMany({});

    return res.status(200).json({
      warehouses,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const createWarehouse = async (req, res) => {
  try {
    const { name, address, lat, lng, hubId } = req.query;

    if (!name || !address || !lat || !lng || !hubId) {
      return res
        .status(400)
        .json({ error: "Please provide all the required fields" });
    }

    const warehouseCreated = await prisma.warehouse.create({
      data: {
        name,
        address,
        lat,
        lng,
        hubId,
      },
    });

    if (!warehouseCreated) {
      return res.status(500).send("Failed to create warehouse");
    }

    return res.status(201).json({
      warehouse: warehouseCreated,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const getWarehouseById = async (req, res) => {
  try {
    const { id } = req.params;

    const warehouse = await prisma.warehouse.findUnique({
      where: {
        id,
      },
    });

    if (!warehouse) {
      return res.status(404).json({ error: "Warehouse not found" });
    }

    return res.status(200).json({
      warehouse,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { getAllWarehouses, createWarehouse, getWarehouseById };
