exports.home = (req, res) => {
    res.render('index'); // render views/index.ejs
};
exports.about = (req, res) => {
    res.render('about');  // render views/about.ejs
};
exports.contact = (req, res) => {
    res.render('contact');  // render views/contact.ejs
}