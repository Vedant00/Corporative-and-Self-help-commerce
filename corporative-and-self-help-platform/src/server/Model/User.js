const mongoose = require ("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


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
    userType:String,
    createdAt:Date,
    cart: mongoose.SchemaTypes.ObjectId,
    adress:adressSchema,
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})




//Hashing Password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,12);
        this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();
})

//Genrating JWT Token

userSchema.methods.genrateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        console.log(token);
        return token;
    }catch(err){
        console.log(err);
    }
}


const User = mongoose.model("User",userSchema);

module.exports= User;