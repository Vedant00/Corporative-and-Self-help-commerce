const express = require('express');
const app = express()
const port = 8000

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