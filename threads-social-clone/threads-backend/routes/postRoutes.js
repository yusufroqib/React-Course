const express = require("express")
const router = express.Router()

router.post("/create", createPost)

module.exports = router