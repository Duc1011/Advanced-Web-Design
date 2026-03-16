require('dotenv').config();
const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Thiết lập EJS làm template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Sử dụng Route của sản phẩm
app.use('/', productRoutes);

// Redirect từ trang chủ sang /products
app.get('/', (req, res) => res.redirect('/products'));

// Lắng nghe cổng
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
