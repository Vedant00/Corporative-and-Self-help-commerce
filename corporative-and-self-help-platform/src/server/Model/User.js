const mongoose = require ("mongoose")

const adressSchema= new mongoose.Schema({
    flatNo:String,
    building:String,
    street:String,
    city:String,
    district:String,
    pincode:Number
})

const Adress = mongoose.model("Adress", adressSchema);

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    age:Number,
    email:{
        type:String,
        lowecase:true,
    },
    password:String,
    cpassword:String,
    createdAt:Date,
    cart: mongoose.SchemaTypes.ObjectId,
    adress:adressSchema,
})



const User = mongoose.model("User",userSchema);

module.exports= User;