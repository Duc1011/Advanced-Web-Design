const express = require('express');
const router = express.Router();
const squareController = require('../controllers/squareController');

router.get('/calculator', squareController.index);
router.post('/calculator', squareController.calculateSquare);

module.exports = router;

