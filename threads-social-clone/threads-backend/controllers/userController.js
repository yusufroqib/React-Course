const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUpUser = async (req, res) => {
	try {
		const { name, email, username, password } = req.body;
		const user = await User.findOne({ $or: [{ email }, { username }] });
		if (user) {
			return res.status(400).json({ message: "User already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			name,
            email, 
            username,
            password: hashedPassword
        });
        
        await newUser.save();

	} catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in sugnupUser: ", error.message)
    }
};




module.exports = { signUpUser };
