const express = require('express');
const { signUpUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post("/signup", signUpUser)
router.post("/login", loginUser)

module.exports = router;