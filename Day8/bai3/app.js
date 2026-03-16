require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const squareRoutes = require('./routes/squareRoutes');

const app = express();

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', squareRoutes);
app.get('/', (req, res) => res.redirect('/calculator'));

app.listen(3000, () => {
    console.log('server is running ex http://localhost:3000');
});
