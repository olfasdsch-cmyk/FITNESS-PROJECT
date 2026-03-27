const express = require("express");
const Salledesport = require("../models/salledesport");
const salledesportRouter = express.Router();

//add salledesport
salledesportRouter.post("/add", async (req, res) => {
  try {
    let newsalledesport = new Salledesport(req.body);
    let result = await newsalledesport.save();
    res.send({ salledesport: result, msg: "salledesport is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all salledesports
salledesportRouter.get("/", async (req, res) => {
  try {
    let result = await Salledesport.find();
    res.send({ salledesports: result, msg: "all salledesports" });
  } catch (error) {
    console.log(error);
  }
});
// get all salledesports
salledesportRouter.get("/", async (req, res) => {
  try {
    const gyms = await Salledesport.find();
    res.status(200).json(gyms); // send array directly
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
//delete salledesport
salledesportRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Salledesport.findByIdAndDelete(req.params.id);
    res.send({ msg: "salledesport is deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update salledesport
salledesportRouter.put("/:id", async (req, res) => {
  try {
    let result = await Salledesport.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "salledesport is updated" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = salledesportRouter;