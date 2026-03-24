const express = require('express');
const router = express.Router();
const activities = require('../models/activities');
const activities = require('../models/activities');

//add salle

router.post('/add', async (req, res) => {
  const newactivities = new activities(req.body);
  await newactivities.save();
  res.send("activities added");
});

//Get salle
router.get('/', async (req, res) => {
  const activities = await activities.find();
  res.send(activities);
});

//Delete salle
router.delete('/delete/:id', async (req, res) => {
  await activities.findByIdAndDelete(req.params.id);
  res.send("activities deleted");
});


module.exports = router;