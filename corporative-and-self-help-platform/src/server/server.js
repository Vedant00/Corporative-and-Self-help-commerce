const express = require('express');
const dotenv=require('dotenv');
const app = express()
const port = 8000

dotenv.config({path:"./config.env"});
require('./DB/script');
app.use(express.json());
app.use(require("./Router/auth"))









const User = require('./Model/User');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})