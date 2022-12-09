const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProjectDemo',).then(()=>{
    console.log(`connectd`);
}).catch((err)=>{console.log(err)})

