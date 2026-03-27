const mongoose = require("mongoose");

const schema = mongoose.Schema;

const salledesportSchema = new schema(

{spacename:String,

 time:String,

 img:String,  

activities: String,

location: String,
phone: String,

full_description:String,

price_year:String,
price_month: String,
price_week:String,
price_day:String,


});

module.exports = mongoose.model("Salledesport", salledesportSchema);