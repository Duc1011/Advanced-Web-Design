const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const Product = require('./models/Product');

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

app.get('/', (req, res) => res.redirect('/products'));

const PORT = process.env.PORT || 3000;

const seedProducts = async () => {
  const count = await Product.countDocuments();
  const targetTotal = 100;
  if (count >= targetTotal) return;

  const categories = ['Điện tử', 'Gia dụng', 'Thời trang', 'Sách', 'Mỹ phẩm'];
  const sampleProducts = [];
  const needToCreate = targetTotal - count;

  for (let i = 1; i <= needToCreate; i++) {
    const index = count + i;
    sampleProducts.push({
      name: `Sản phẩm ${String(index).padStart(3, '0')}`,
      price: Math.floor(Math.random() * 900000) + 100000,
      category: categories[index % categories.length],
      stock: Math.floor(Math.random() * 200) + 1,
      description: `Mô tả cho sản phẩm ${index}`
    });
  }

  await Product.insertMany(sampleProducts);
  console.log(`✅ Đã thêm ${needToCreate} dữ liệu mẫu (tổng: ${targetTotal})`);
};

const startServer = async () => {
  await connectDB();
  await seedProducts();
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
};

startServer().catch((err) => {
  console.error('❌ Không thể khởi động server:', err.message);
});
