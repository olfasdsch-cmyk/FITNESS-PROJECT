const express = require("express");
const Partner = require("../models/partner");
const partnerRouter = express.Router();

// ===== Add a new partner =====
partnerRouter.post("/add", async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    const savedPartner = await newPartner.save();
    res.status(201).json({ partner: savedPartner, msg: "Partner added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add partner" });
  }
});

// ===== Get all partners =====
partnerRouter.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json({ partners, msg: "All partners retrieved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch partners" });
  }
});

// ===== Get one partner by ID =====
partnerRouter.get("/:id", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).json({ error: "Partner not found" });
    res.status(200).json({ partner, msg: "Partner retrieved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch partner" });
  }const express = require("express");
const Partner = require("../models/partner");
const partnerRouter = express.Router();

// ===== Add a new partner =====
partnerRouter.post("/add", async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    const savedPartner = await newPartner.save();
    res.status(201).json({ partner: savedPartner, msg: "Partner added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add partner" });
  }
});

// ===== Get all partners =====
partnerRouter.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json({ partners, msg: "All partners retrieved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ partners: [], error: "Failed to fetch partners" });
  }
});

// ===== Get a partner by ID =====
partnerRouter.get("/:id", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).json({ error: "Partner not found" });
    res.status(200).json({ partner, msg: "Partner retrieved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch partner" });
  }
});

// ===== Delete a partner by ID =====
partnerRouter.delete("/:id", async (req, res) => {
  try {
    const deletedPartner = await Partner.findByIdAndDelete(req.params.id);
    if (!deletedPartner) return res.status(404).json({ error: "Partner not found" });
    res.status(200).json({ deletedId: req.params.id, msg: "Partner deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete partner" });
  }
});

// ===== Update a partner by ID =====
partnerRouter.put("/:id", async (req, res) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // return the updated document
    );
    if (!updatedPartner) return res.status(404).json({ error: "Partner not found" });
    res.status(200).json({ partner: updatedPartner, msg: "Partner updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update partner" });
  }
});

module.exports = partnerRouter;
});

// ===== Delete a partner by ID =====
partnerRouter.delete("/:id", async (req, res) => {
  try {
    const deletedPartner = await Partner.findByIdAndDelete(req.params.id);
    if (!deletedPartner) return res.status(404).json({ error: "Partner not found" });
    res.status(200).json({ deletedId: req.params.id, msg: "Partner deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete partner" });
  }
});

// ===== Update a partner by ID =====
partnerRouter.put("/:id", async (req, res) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // return the updated document
    );
    if (!updatedPartner) return res.status(404).json({ error: "Partner not found" });
    res.status(200).json({ partner: updatedPartner, msg: "Partner updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update partner" });
  }
});

module.exports = partnerRouter;