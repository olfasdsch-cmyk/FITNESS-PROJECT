const express = require('express');
const router = express.Router();
const salledesport = require('../models/salledesport');

//add salle

router.post('/add', async (req, res) => {
  const newSalle = new salledesport(req.body);
  await newSalle.save();
  res.send("Salle added");
});

//Get salle
router.get('/', async (req, res) => {
  const salles = await salledesport.find();
  res.send(salles);
});

//Delete salle
router.delete('/delete/:id', async (req, res) => {
  await salledesport.findByIdAndDelete(req.params.id);
  res.send("Salle deleted");
});

// Update gym by ID
router.patch('/update/:id', async (req, res) => {
  try {
    const updatedGym = await Salledesport.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // only updates fields you send
      { new: true } // return updated document
    );
    res.json(updatedGym);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;