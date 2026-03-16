const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);

router.get('/add', productController.showAddForm);

router.post('/add', productController.addProduct);

module.exports = router;
