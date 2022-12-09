const mongoose = require("mongoose")

const cartItemSchema =new mongoose.Schema({
    category: String,
    name: String,
    package: [Number],
    price:Number,
    unit: String,
    details: String,
})

export default cartItemSchema;