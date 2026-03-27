const mongoose = require("mongoose");

const schema = mongoose.Schema;

const activitiesSchema = new schema(

{nameac:String,

 img:String,  

description: String,

price: String,

spacename : String,

});

module.exports = mongoose.model("Activities", activitiesSchema);