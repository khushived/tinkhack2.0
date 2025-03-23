const express = require("express");
const router = express.Router();

const {
  getAllPackages,
  createPackage,
  getPackageById,
} = require("./controllers/packages");
const { getAllHubs, createHub, getHubById } = require("./controllers/hubs");
const {
  getAllWarehouses,
  createWarehouse,
  getWarehouseById,
} = require("./controllers/warehouses");

const { calculateDeliveryPath } = require("./controllers/deliveries");

const { signUp, login } = require("./controllers/auth");
const { authorize } = require("./middlewares/authorize");

router.post("/auth/signup", signUp);
router.post("/auth/login", login);

router.get("/packages", authorize, getAllPackages);
router.get('/packages/:id', getPackageById);
router.post('/packages', createPackage);

router.get("/hubs", getAllHubs);
router.get("/hubs/:id", getHubById);
router.post("/hubs", createHub);

router.get("/warehouses", getAllWarehouses);
router.get("/warehouses/:id", getWarehouseById);
router.post("/warehouses", createWarehouse);

router.get("/deliveries/:packageId", calculateDeliveryPath);

module.exports = router;
