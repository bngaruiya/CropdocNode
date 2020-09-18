const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');

router.post('/register', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/user', userCtrl.authUser);
router.post('/logout', userCtrl.logout);

module.exports = router;
