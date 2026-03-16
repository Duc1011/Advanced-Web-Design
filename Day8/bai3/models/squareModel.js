const mongoose = require('mongoose');

const squareSchema = new mongoose.Schema({
    sideLength: { type: Number, required: true },
    area: { type: Number, required: true }
});

module.exports = mongoose.model('Square', squareSchema);
