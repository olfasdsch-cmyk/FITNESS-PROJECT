const mongoose = require("mongoose");

const schema = mongoose.Schema;

const reservationSchema = new schema(

 {

    name: {

    type: String,

    required: true,

  },

  lastname: {

    type: String,

    required: true,

  },

  email: {

    type: String,

    required: true,

  },

  nameac: {

    type: String,

    required: true,

  },

 gender: {

    type: String,

    required: true,

  },

    time: {

    type: String,

    required: true,

  },

});

module.exports = mongoose.model("reservation", reservationSchema);