const express = require('express');
const router = express.Router();
const controller = require('../controllers/Locations');

/* Get home page  */

router.get('/', controller.news);

module.exports = router;