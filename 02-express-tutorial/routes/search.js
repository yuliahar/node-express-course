const express = require('express');
const router = express.Router();

const {
  searchProducts,
} = require('../controllers/search.js');

router.route('/').get(searchProducts);

module.exports = router;
