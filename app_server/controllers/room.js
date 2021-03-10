const room = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';

    res.render('rooms', {title: pageTitle});




};

module.exports = {
    room
}