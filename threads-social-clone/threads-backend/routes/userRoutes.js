const express = require('express');
const { signUpUser, loginUser, logoutUser } = require('../controllers/userController');

const router = express.Router();

router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)

module.exports = router;