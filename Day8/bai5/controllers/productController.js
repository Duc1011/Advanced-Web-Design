const Product = require('../models/productModel');

const productController = {
    getProducts: (req, res) => {
        Product.getAll((err, products) => {
            if (err) {
                return res.status(500).json({ error: 'Database query error' });
            }
            res.render('products', { products });
        });
    }
};

module.exports = productController;
