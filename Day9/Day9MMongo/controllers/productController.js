const Product = require('../models/Product');

// Trang hien thi danh sách sản phẩm
exports.index = async (req, res) => {
  const products = await Product.find();
  res.render('products/index', { title: 'Danh sách sản phẩm', products });
};

// Trang form thêm
exports.newForm = (req, res) => {
  res.render('products/new', { title: 'Thêm sản phẩm mới' });
};

// Tạo sản phẩm
exports.create = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/products');
};

// Trang chi tiết
exports.detail = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/detail', { title: 'Chi tiết sản phẩm', product });
};

// Trang form sửa
exports.editForm = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/edit', { title: 'Sửa sản phẩm', product });
};

// Cập nhật
exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/products');
};

// Xóa
exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};