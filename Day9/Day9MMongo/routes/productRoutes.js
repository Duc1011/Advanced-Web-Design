const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

router.get('/', productCtrl.index);
router.get('/new', productCtrl.newForm);
router.post('/new', productCtrl.create);
router.get('/:id', productCtrl.detail);
router.get('/edit/:id', productCtrl.editForm);
router.post('/edit/:id', productCtrl.update);
router.get('/delete/:id', productCtrl.delete);

module.exports = router;