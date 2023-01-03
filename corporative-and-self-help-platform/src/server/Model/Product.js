const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
const User = require("./User");

const ProductSchema =new mongoose.Schema({
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
   },
    category: String,
    name: String,
    pack:[Number],
    price:Number,
    unit: String,
    details: String,
})

const Product = mongoose.model("product",ProductSchema);

module.exports=Product;