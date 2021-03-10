const contact = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Contact';

    res.render('contact', {title: pageTitle});

    console.log(pageTitle);


};

module.exports = {
    contact
}