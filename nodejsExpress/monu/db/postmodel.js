const { json } = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-commerce");
console.log(mongoose);
const postschema = new mongoose.Schema({
  name:String,
  category:String,
  price:String,

  image:{
    type:String,
    ContentType:String
  }
  
});
module.exports = mongoose.model("Files", postschema);
