const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db_connect');
const partnerRoute = require("./routes/partner");
const Gym = require("./models/salledesport");

const app = express();
require('dotenv').config();

// connect to DB
connectDB();

// routes
app.use(express.json());
app.use(cors());

app.use("/user", require("./routes/user"));
app.use('/salledesport', require('./routes/Salledesport'));
app.use("/partner", partnerRoute);

// delete gym
app.delete("/salledesport/:id", async (req, res) => {
  try {
    const deletedGym = await Gym.findByIdAndDelete(req.params.id);

    if (!deletedGym) {
      return res.status(404).json({ message: "Gym not found" });
    }

    res.status(200).json({ message: "Gym deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// server
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
app.use("/reservation", require("./routes/reservation"));