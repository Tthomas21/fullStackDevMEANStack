var express = require('express');
var router = express.Router();
const controller = require('../controllers/Locations');

/* GET home page. */
router.get('/', controller.contact);

module.exports = router;
