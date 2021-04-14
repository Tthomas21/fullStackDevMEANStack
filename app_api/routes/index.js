var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payLoad',
    algorithms: ['sha512']
});

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

/* GET home page. */
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register)


router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);
    

module.exports = router;