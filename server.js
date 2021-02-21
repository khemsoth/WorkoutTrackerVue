const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const apiRoutes = './routes/apiRoutes'
require('dotenv').config()

const PORT = process.env.PORT || 5000
const dbUrl = process.env.dbConn
const dbName = process.env.dbName

var db


app.use(function(req, res, next) {
  req.db = db
  next()
})


MongoClient.connect(dbUrl, function(err, database) {
  if(err) throw (err)
  console.log(`Connected to database successfully`)
  db = database.db(dbName)
  app.listen(PORT)
  console.log(`Listening on ${PORT}`)
})

require(apiRoutes)(app)






