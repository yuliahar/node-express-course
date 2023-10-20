const express = require('express');
const router = express.Router();
const { login, logoff } = require('../controllers/auth');

router.route('/logon').post(login);
router.route('/logoff').delete(logoff);

module.exports = router;