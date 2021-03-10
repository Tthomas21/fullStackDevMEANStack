const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');

/* Get home page  */

router.get('/', controller.news);

module.exports = router;