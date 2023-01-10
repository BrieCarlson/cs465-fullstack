const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - travel';
    res.render('travel', {title: pageTitle});
};

module.exports = {
    travel
}