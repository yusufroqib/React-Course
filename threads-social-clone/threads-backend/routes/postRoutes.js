const express = require("express")
const { createPost } = require("../controllers/postControllers")
const protectRoute = require("../middleware/protectRoutes")

const router = express.Router()

router.get("/", getPost)

router.post("/create", protectRoute, createPost)

module.exports = router