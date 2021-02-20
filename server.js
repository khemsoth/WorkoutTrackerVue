const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = process.env.PORT || 5000


app.listen(PORT, function(){
  console.log(`App listening on port ${PORT}`)
})