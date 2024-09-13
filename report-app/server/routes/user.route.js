const express = require('express');

const AsyncHandler = require('../utils/AsyncHandler');
const { signup, login } = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', AsyncHandler(signup));
router.post('/login', AsyncHandler(login));

module.exports = router;