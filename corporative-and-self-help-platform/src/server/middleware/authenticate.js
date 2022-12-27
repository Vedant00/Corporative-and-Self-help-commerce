const jwt = require("jsonwebtoken");
const User = require("../Model/User");



const authenticate = async(req,res,next)=>{
    try{

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){throw new Error("User not found")};

        res.token=token;
        res.rootUser=rootUser;
        res.userID=rootUser._id;
        next();

    }catch(err){
        res.status(401).send('Unauthorized: no token provided');
        console.log(err);
    }
   
}

module.exports=authenticate;