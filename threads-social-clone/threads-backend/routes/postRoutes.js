const express = require("express")
const { createPost, getPost } = require("../controllers/postControllers")
const protectRoute = require("../middleware/protectRoutes")

const router = express.Router()

router.get("/:id", getPost)

router.post("/create", protectRoute, createPost)

module.exports = router