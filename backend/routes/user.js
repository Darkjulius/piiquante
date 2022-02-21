const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const validPwd = require('../middleware/valid-password');

router.post('/signup', validPwd, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;