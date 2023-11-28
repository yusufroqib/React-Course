import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import connectDb from "./db/connectDB";

dotenv.config()
connectDb()
const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "50mb"})); //parse json data inside the req body
app.use(express.urlencoded({extended: true})) //parse form data inside the req body
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("Welcome Home 🏡")
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))