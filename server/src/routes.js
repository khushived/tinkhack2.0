const express = require('express');
const router = express.Router();

const {getAllPackages, createPackage, getPackageById} = require('./controllers/package');
const {signUp, login} = require("./controllers/auth");

router.post('/auth/signup', signUp);
router.post('/auth/login', login);

router.get('/packages', getAllPackages);
// router.post('/packages', createPackage);
// router.get('/packages/:id', getPackageById);

module.exports = router;
