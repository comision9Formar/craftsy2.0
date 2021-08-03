const express = require('express');
const router = express.Router();
const {index, search} = require('../controllers/mainController');

router.get('/',index);
router.get('/search',search);

module.exports =router;