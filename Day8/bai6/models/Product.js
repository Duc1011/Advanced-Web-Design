const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12334566',
    port: 3305,
    database: 'database_query'
});

connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối MySQL:', err);
        return;
    }
    console.log('Kết nối MySQL thành công!');
});

exports.getAllProducts = (callback) => {
    connection.query('SELECT * FROM products', callback);
};

exports.createProduct = (name, price, description, callback) => {
    connection.query(
        'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
        [name, price, description],
        callback
    );
};
