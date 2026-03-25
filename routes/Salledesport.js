const express = require('express');
const router = express.Router();
const salledesport = require('../models/salledesport');

// add salle
router.post('/add', async (req, res) => {
  const newSalle = new salledesport(req.body);
  await newSalle.save();
  res.send("Salle added");
});

// get all salles
router.get('/', async (req, res) => {
  const salles = await salledesport.find();
  res.send(salles);
});

// get one salle by id
router.get('/:id', async (req, res) => {
  try {
    const salle = await salledesport.findById(req.params.id);

    if (!salle) {
      return res.status(404).send("Gym not found");
    }

    res.send(salle);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// delete salle
router.delete('/delete/:id', async (req, res) => {
  await salledesport.findByIdAndDelete(req.params.id);
  res.send("Salle deleted");
});

// update salle
router.patch('/update/:id', async (req, res) => {
  try {
    const updatedGym = await salledesport.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedGym);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;