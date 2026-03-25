const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  gymId: { type: mongoose.Schema.Types.ObjectId, ref: "Salledesport", required: true },
  gymName: { type: String, required: true },
  bookedBy: { type: String, required: true },
  userName: { type: String, required: true }, 
  sport: { type: String }, 
  bookingType: { type: String, enum: ["day", "week", "month", "year"], required: true },
  bookingTime: { type: String }, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Reservation", ReservationSchema);