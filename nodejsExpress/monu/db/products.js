const mongoose=require("mongoose")
const Productchema=new mongoose.Schema({
name:String,
price:String,
category:String,
userId:String});
module.exports=mongoose.model("products",Productchema);