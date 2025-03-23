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

const { getPickUps, getDropOffs } = require("./controllers/deliveries");

const { calculateDeliveryPath } = require("./controllers/deliveries");

const { signUp, login } = require("./controllers/auth");
const { authorize } = require("./middlewares/authorize");

router.post("/auth/signup", signUp);
router.post("/auth/login", login);

router.get("/packages", authorize, getAllPackages);
router.get("/packages/:id", authorize, getPackageById);
router.post("/packages", authorize, createPackage);

router.get("/hubs", authorize, getAllHubs);
router.get("/hubs/:id", authorize, getHubById);
router.post("/hubs", authorize, createHub);

router.get("/warehouses", authorize, getAllWarehouses);
router.get("/warehouses/:id", authorize, getWarehouseById);
router.post("/warehouses", authorize, createWarehouse);

router.get("/deliveries/:packageId", authorize, calculateDeliveryPath);
router.get("/manage/pickups/:hubId", authorize, getPickUps);
router.get('/manage/dropoffs/:hubId', authorize, getDropOffs);

module.exports = router;
