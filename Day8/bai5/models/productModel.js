const db = require('../config/database');

const Product = {
    getAll: function (callback) {
        db.query('SELECT * FROM product', (err, results) => {
            if (err) return callback(err);
            return callback(null, results);
        });
    }
};

module.exports = Product;
