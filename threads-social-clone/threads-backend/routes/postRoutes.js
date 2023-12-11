const express = require("express");
const {
	createPost,
	getPost,
	deletePost,
	likeUnlikePost,
	replyToPost,
	getFeedPost,
	getUserPosts,
} = require("../controllers/postControllers");
const protectRoute = require("../middleware/protectRoutes");

const router = express.Router();

router.get("/feed", protectRoute, getFeedPost);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);
router.get("/user/:username", getUserPosts);

module.exports = router;
