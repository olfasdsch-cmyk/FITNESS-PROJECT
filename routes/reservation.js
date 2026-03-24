const express = require('express');
const router = express.Router();
const reservation = require('../models/reservation');
const reservation = require('../models/reservation');
const reservation = require('../models/reservation');

//add salle

router.post('/add', async (req, res) => {
  const newreservation = new reservation(req.body);
  await newreservation.save();
  res.send("reservation added");
});

//Get salle
router.get('/', async (req, res) => {
  const reservation = await reservation.find();
  res.send(reservations);
});

//Delete salle
router.delete('/delete/:id', async (req, res) => {
  await reservation.findByIdAndDelete(req.params.id);
  res.send("reservation deleted");
});


module.exports = router;