const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const cloudinary = require('cloudinary').v2;

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(express.json({ limit: "50mb" })); //parse json data inside the request body
app.use(express.urlencoded({ extended: true })); //parse form data inside the request body
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.get("/", (req, res) => {
	res.send("Welcome Home 🏡");
});

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
	})
	.catch((err) => {
		console.log(err);
	});
