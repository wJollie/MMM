// index.js
const express = require("express");
const mongoose = require("mongoose");
config = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/MMM" || process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Express routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
