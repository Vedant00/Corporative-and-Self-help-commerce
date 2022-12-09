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

router.post('/signup',(req,res)=>{
    const { fname, lname, email, password, cpassword }=req.body;
    console.log(fname);
    res.json({message:req.body});
});

module.exports = router;


// {
//     "fname":"Vedant",
//     "lname":"Bhiwapure",
//     "email":"testing@gmail.com",
//     "password":"testing123",
//     "cpassword":"testing123",
// }