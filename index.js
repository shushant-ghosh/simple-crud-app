import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRoute from "./routes/product.route.js";
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL
const DB_NAME = process.env.DB_NAME
const APP_NAME = process.env.APP_NAME

const app = express();

// Middlewares
app.use(express.json());
// Using this we can fill the data using form encoded instead of passing raw JSON data
app.use(express.urlencoded({extended: false}))

// Common Routes
app.get("/", (req, res) => {
  res.send("Hello from Node API server Updated");
});
// Product Routes
app.use("/api/products", ProductRoute)

mongoose
  .connect(
    DB_URL,
  )
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
