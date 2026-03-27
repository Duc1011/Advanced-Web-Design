const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shop_db', 'root', '12334566', {
  host: 'localhost',
  port: 3305,
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('DB error:', err));

module.exports = sequelize;
