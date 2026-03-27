const express = require("express");
const Reservation = require("../models/reservation");
const reservationRouter = express.Router();

//add reservation
reservationRouter.post("/add", async (req, res) => {
  try {
    let newreservation = new Reservation(req.body);
    let result = await newreservation.save();
    res.send({ reservation: result, msg: "reservation is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all reservations
reservationRouter.get("/", async (req, res) => {
  try {
    let result = await Reservation.find();
    res.send({ reservations: result, msg: "all reservations" });
  } catch (error) {
    console.log(error);
  }
});
//get one reservation
reservationRouter.get("/:id", async (req, res) => {
  try {
    let result = await Reservation.findById(req.params.id);
    res.send({ reservation: result, msg: "one reservation" });
  } catch (error) {
    console.log(error);
  }
});
//delete reservation
reservationRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Reservation.findByIdAndDelete(req.params.id);
    res.send({ msg: "reservation is deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update reservation
reservationRouter.put("/:id", async (req, res) => {
  try {
    let result = await Reservation.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "reservation is updated" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = reservationRouter;