const express = require('express');
const router = express.Router();

require('../DB/script');
const User = require("../Model/User");

router.get('/', (req, res) => {
    res.send(`Hello World from Server!`)
  });

router.get('/signup',(req,res)=>{
    res.send("Hello on Signup")
});

router.post('/signup',async (req,res)=>{
    const { fname, lname, email, password, cpassword }=req.body;
   
    if (!fname || !lname || !email || !password || !cpassword){
        return res.status(422).json({error:"Please fill all fields correctly"});
    }
    try{
       const userExist = await User.findOne({email:email});
       if(userExist){
        return res.status(422).json({error:"User already exist"});
       }else if(password != cpassword){
            return res.status(422).json({err:"passwords are not matching"});
       }

       const user =new User({fname, lname, email, password, cpassword});


       await  user.save();
       
        res.status(201).json({message:"new user created"})
    }catch(err){
        console.log(err);
    }
});

router.post('/signin', async(req,res)=>{
    try{
        const [email , password]=req.body;

        if(!email || ! password){
            return res.status(400).json({error:"Please enter credentials"})
        }

        const inputUser= await User.findOne({email:email})
        if(!inputUser){
            res.status(400).json({error:"No user found"})
        }else{
            res.json({message:"user signin sucessful"});
        }
    }catch(err){
        console.log(err);
    }
});

module.exports = router;


// {
//     "fname":"Vedant",
//     "lname":"Bhiwapure",
//     "email":"testing@gmail.com",
//     "password":"testing123",
//     "cpassword":"testing123",
// }