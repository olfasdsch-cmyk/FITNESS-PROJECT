const mongoose = require("mongoose");
const schema = mongoose.Schema;
const partnerSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
   gender: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  age:{
    type: String,
    required: true,
  },
  activities: {
    type: String,
    required: true,
  },
   location: {
    type: String,
    required: true,
  },
   availability: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("partner", partnerSchema);
