const Square = require('../models/squareModel');

// Controller để hiển thị form
exports.index = (req, res) => {
    res.render('index', { parameter: null, area: null });
};

// Controller để tính diện tích và lưu vào MongoDB
exports.calculateSquare = async (req, res) => {
    const sideLength = req.body.sideLength;
    const area = sideLength * sideLength;

    // Tạo một bản ghi mới và lưu vào MongoDB
    const newSquare = new Square({ sideLength: sideLength, area: area });
    await newSquare.save();

    res.render('index', { parameter: sideLength, area: area });
};
