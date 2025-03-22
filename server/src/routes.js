const express = require('express');
const router = express.Router();

const {getAllPackages, createPackage, getPackageById} = require('./controllers/package');

router.get('/packages', getAllPackages);
// router.post('/packages', createPackage);
// router.get('/packages/:id', getPackageById);

module.exports = router;
