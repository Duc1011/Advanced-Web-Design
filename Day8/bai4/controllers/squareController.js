const { calculateSquare } = require('../models/squareModel');

exports.index = (req, res) => {
    res.render('index', { parameter: null, area: null });
};

exports.calculateSquare = async (req, res) => {
    const sideLength = req.body.sideLength;
    const area = sideLength * sideLength;
    const parameter = 4 * sideLength;

    try {
        await calculateSquare(sideLength, parameter, area);
        res.render('index', { parameter: parameter, area: area });
    } catch (err) {
        console.error('Lỗi khi lưu vào MySQL:', err);
        res.render('index', { parameter: parameter, area: area });
    }
};
