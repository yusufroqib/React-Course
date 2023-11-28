import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
// import connectDb from "./db/connectDB";

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "50mb"})); //parse json data inside the req body
app.use(express.urlencoded({extended: true})) //parse form data inside the req body
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("Welcome Home 🏡")
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
}).catch((err) => {
    console.log(err)
})