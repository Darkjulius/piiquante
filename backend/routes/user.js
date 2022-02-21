const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const max = require('../middleware/rate-limit');
const validPwd = require('../middleware/valid-password');

router.post('/signup', validPwd, userCtrl.signup);
router.post('/login', max.limiter, userCtrl.login);

module.exports = router;