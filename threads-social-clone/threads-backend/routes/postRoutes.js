const express = require("express")
const { createPost, getPost, deletePost } = require("../controllers/postControllers")
const protectRoute = require("../middleware/protectRoutes")

const router = express.Router()

router.get("/:id", getPost)
router.post("/create", protectRoute, createPost)
router.delete("/:id", deletePost)

module.exports = router