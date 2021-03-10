const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - About';

    res.render('about', {title: pageTitle});

    console.log(pageTitle);


};

module.exports = {
    about
}