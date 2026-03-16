const Product = require('../models/Product');

exports.getProducts = (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy dữ liệu sản phẩm');
        }
        res.render('index', { products: products });
    });
};

exports.showAddForm = (req, res) => {
    res.render('addProduct');
};

exports.addProduct = (req, res) => {
    const { name, price, description } = req.body;
    Product.createProduct(name, price, description, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi thêm sản phẩm');
        }
        res.redirect('/');
    });
};
