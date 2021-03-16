/ * Get all other tab pages * /

const contact = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Contact';

    res.render('contact', {title: pageTitle});




};

const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - About';

    res.render('about', {title: pageTitle});

  


};

const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';

    res.render('meals', {title: pageTitle});




};

const room = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';

    res.render('rooms', {title: pageTitle});




};
const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';

    res.render('news', {title: pageTitle});




};

module.exports = {
    contact,
    about,
    meals,
    room,
    news
}