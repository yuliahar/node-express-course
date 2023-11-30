const express = require('express');
const router = express.Router();

const { logon, dashboard } = require('../controllers/main');

const authMiddleware = require('../middleware/auth');

router.route('/dashboard').get(authMiddleware, dashboard);
router.route('/login').post(logon);

module.exports = router;

