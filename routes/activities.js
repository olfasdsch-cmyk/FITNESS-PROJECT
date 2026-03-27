const express = require("express");
const Activities = require("../models/activities");
const activitiesRouter = express.Router();

//add activities
activitiesRouter.post("/add", async (req, res) => {
  try {
    let newactivities = new Activities(req.body);
    let result = await newactivities.save();
    res.send({ activities: result, msg: "activities is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all activitiess
activitiesRouter.get("/", async (req, res) => {
  try {
    let result = await Activities.find();
    res.send({ activitiess: result, msg: "all activitiess" });
  } catch (error) {
    console.log(error);
  }
});
//get one activities
activitiesRouter.get("/:id", async (req, res) => {
  try {
    let result = await Activities.findById(req.params.id);
    res.send({ activities: result, msg: "one activities" });
  } catch (error) {
    console.log(error);
  }
});
//delete activities
activitiesRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Activities.findByIdAndDelete(req.params.id);
    res.send({ msg: "activities is deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update activities
activitiesRouter.put("/:id", async (req, res) => {
  try {
    let result = await Activities.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "activities is updated" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = activitiesRouter;