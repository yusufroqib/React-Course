const User = require("../models/userModel");
const Post = require("../models/postModel");

const createPost = async (req, res) => {
	try {
		const { postedBy, text, img } = req.body;
		if (!postedBy || !text) {
			return res
				.status(400)
				.json({ message: "postedBy and text fields are required." });
		}

		const user = await User.findById(postedBy);

		if (!user) {
			return res.status(404).json({ message: "User not found." });
		}

		const maxLength = 500;

		if (text.length > maxLength) {
			return res
				.status(400)
				.json({ message: `Text must be less than ${maxLength} characters` });
		}

		const newPost = new Post({ postedBy, text, img });
		await newPost.save();
		res.status(201).json({ message: "Post created successfully", newPost });
	} catch (error) {
		res.status(500).json({ message: error.message }); //Internal server error
		console.log("Error in Create Post: ", error.message);
	}
};

module.exports = {
	createPost,
};
