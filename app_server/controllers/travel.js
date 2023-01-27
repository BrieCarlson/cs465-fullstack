const fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - travel';
    res.render('travel', {title: pageTitl, trips});
};

module.exports = {
    travel
}