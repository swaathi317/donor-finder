const express = require('express');
const router = express.Router();

const donorController = require('../controllers/donorController');


router.get('/', donorController.getDonorRecommendation);

module.exports = router;