// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const bookRoutes = require("./routes/bookRoutes");
app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
