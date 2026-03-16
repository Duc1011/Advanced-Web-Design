require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const squareRoutes = require('./routes/squareRoutes');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', squareRoutes);
app.get('/', (req, res) => res.redirect('/calculator'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
