const express = require('express');
const router = express.Router();
const Partner = require('../models/partner');

router.post('/add', async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    const saved = await newPartner.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const allPartners = await Partner.find();
    res.json(allPartners);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedPartner = await Partner.findByIdAndDelete(req.params.id);
    if (!deletedPartner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    res.json({ message: "Partner deleted", deletedPartner });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;