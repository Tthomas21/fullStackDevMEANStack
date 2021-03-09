/ * Get Travel View */


const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';

    res.render('travel', {title: pageTitle});

    console.log(pageTitle);


};

module.exports = {
    travel
}