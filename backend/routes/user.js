const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const max = require('../middleware/rate-limit');
const validMail = require('../middleware/valid-email')
const validPwd = require('../middleware/valid-password');

router.post('/signup', validMail, validPwd, userCtrl.signup);
router.post('/login', max.limiter, userCtrl.login);

module.exports = router;