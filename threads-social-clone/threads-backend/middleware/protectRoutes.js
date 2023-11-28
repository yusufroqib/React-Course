const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = async (req, res, next) => {

	try {
		const token = req.cookies.jwt;
		if (!token) return res.status(401).json({ message: "Unauthorized" });
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decoded.id).select("-password");
		req.user = user;
		next();
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log("Error while signing up user: ", error.message);
	}
};

module.exports = protectRoute;
