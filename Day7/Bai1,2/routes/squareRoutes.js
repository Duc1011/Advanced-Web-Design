const express = require('express');  											
const router = express.Router();  											
const squareController = require('../controllers/squareController');  											
											
// Route để hiển thị form  											
router.get('/', squareController.home);
router.get('/about', squareController.about);
router.get('/contact', squareController.contact)
;  											
											
// Route để tính chu vi và diện tích  																				
											
module.exports = router;  											