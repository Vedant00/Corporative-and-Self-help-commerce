const mongoose = require ("mongoose")
const bcrypt = require("bcryptjs");

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





userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,12);
        this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();
})

const User = mongoose.model("User",userSchema);

module.exports= User;