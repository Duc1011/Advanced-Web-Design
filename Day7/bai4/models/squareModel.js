const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3305,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const SquareModel = {
    calculateSquare: (sideLength, parameter, area) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO squares(sideLength, parameter, area) VALUES (?, ?, ?)';
            pool.query(sql, [sideLength, parameter, area], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
};

module.exports = { calculateSquare: SquareModel.calculateSquare };
