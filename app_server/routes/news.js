const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');
router.get('/', controller.newsList);

module.exports = router;