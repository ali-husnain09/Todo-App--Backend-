// Creation and configuration of the Express APP
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const connectDB = require("./config/database"); // Import the database connection function
require("dotenv").config(); // Load environment variables from .env file
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Import TODO API routes
const todoRoutes = require("./src/routes/todos");

// Mount the TODO API routes
app.use("/api/v1", todoRoutes); // Use the todo routes

// Connect to the database
connectDB()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
app.listen(PORT,()=>{
    console.log(`Server is listeing at port ${PORT}`)
});

app.get('/',(req,res) =>{
    res.send(`<h1>Welcome to the Todo API</h1>
    <p>Use the API to manage your todos.</p>`);
});