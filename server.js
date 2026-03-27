// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load .env

// Routes
const userRoute = require("./routes/user");
const salledesportRoute = require("./routes/salledesport");
const partnerRoute = require("./routes/partner");
const reservationRoute = require("./routes/reservation");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ---------------------------
// Database connection
// ---------------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Stop server if DB fails
  }
};
connectDB();

// ---------------------------
// Routes
// ---------------------------
app.use("/user", userRoute);
app.use("/salledesport", salledesportRoute);
app.use("/partner", partnerRoute);
app.use("/reservation", reservationRoute);

// ---------------------------
// Test route
// ---------------------------
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// ---------------------------
// Start server
// ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});