const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservation");

// Add a new reservation
router.post("/add", async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: "Reservation saved successfully", reservation: newReservation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all reservations (for admin)
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("gymId");
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;