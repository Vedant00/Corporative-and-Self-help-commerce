const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs');

const authenticate=require("../middleware/authenticate")

require('../DB/script');
const User = require("../Model/User");
const Product = require("../Model/Product");

router.get('/', (req, res) => {
    res.send(`Hello World from Server!`)
  });

router.get('/signup',(req,res)=>{
    res.send("Hello on Signup")
});

router.post('/signup',async (req,res)=>{
    const { fname, lname, email, password, cpassword,userType }=req.body;
   
    if (!fname || !lname || !email || !password || !cpassword){
        return res.status(422).json({error:"Please fill all fields correctly", status:422});
    }
    try{
       const userExist = await User.findOne({email:email});
       if(userExist){
        return res.status(422).json({error:"User already exist", status:422});
       }else if(password !== cpassword){
            return res.status(422).json({error:"Passwords does not match", status:422});
       }

       const user =new User({fname, lname, email, password, cpassword, userType});


       await  user.save();
       
        res.status(201).json({message:"new user created", status:201})
    }catch(err){
        console.log(err);
    }
});

router.get('/signin',(req,res)=>{
    res.send("Hello from login page");
})

router.post('/signin', async(req,res)=>{
    let token;
    try{
        const {email , password}=req.body;

        if(!email || ! password){
            return res.status(400).json({error:"Please enter credentials", status:400})
        }

        const inputUser= await User.findOne({email:email})
        
        if(inputUser){
            const isMatched = await bcrypt.compare(password, inputUser.password);

            
            //JWT Cookies
            token = await inputUser.genrateAuthToken();
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() +25892000000),
                httpOnly:true
            });

        
        if(!isMatched){
            res.status(400).json({error:"invalid credentials", status:400})
        }else{
            res.json({message:"user signin sucessful"});
        }
        }else{
            res.status(400).json({error:"invalid credentials", status:400})
        }
        
    }catch(err){
        console.log(err);
    }
});

router.get("/account",authenticate,(req,res)=>{
    console.log("acount section")
    res.send(res.rootUser);
  });

  router.get('/addProducts',(req,res)=>{
    res.send("Products page");
})

router.post("/addProducts",async (req,res)=>{
    const {category,name,pack,price,unit,details }=req.body;

    if(!category || !name || !pack || !price || !unit || !details ){
        return res.status(422).json({error:"Please fill all fields correctly", status:422});
    }
    const xyz=[];

    let temp=pack[0];
    for (let i=0; i<pack.length;i++){
        
        if(pack[i]!==','){
            if(i!==0){
                temp = temp+pack[i];
            }
            
            
        }else{
            xyz.push(parseInt(temp));
            temp=""
        }
    }

   const product=new Product({category,name,pack:xyz,price,unit,details});
   await product.save();
   res.status(201).json({message:"new product added", status:201});
  
})

module.exports = router;


// {
//     "fname":"Vedant",
//     "lname":"Bhiwapure",
//     "email":"testing@gmail.com",
//     "password":"testing123",
//     "cpassword":"testing123",
// }


// {
//     "category":"Food",
//     "name":"burger",
//     "pack":[2,3,4],
//     "price":100,
//     "unit":"No.",
//     "details":"best burger ever"
// }