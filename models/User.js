const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
   image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
   gender: {
    type: String,
    required: true,
  },
   About_me: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("user", UserSchema);
