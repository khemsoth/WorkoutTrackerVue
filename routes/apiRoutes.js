module.exports = function(app) {

// GET ROUTES

app.get('/', function(req, res) {
  req.db.collection('exercises').find({}).toArray(function(err, docs) {
    if (err) throw err
    res.send(docs)
  })
})

// POST ROUTES
app.post('/post/exercise', function(req, res) {
  req.db.collection('exercises').insertOne({
    name: req.body.name,
    type: req.body.type
  }).then(function(docs) {
    res.send(docs)
  })
})


// UPDATE ROUTES

app.put('/update/exercise', function(req, res) {
  req.db.collection('exercises').updateOne({
    name: req.body.oldName
  },
  {
    $set: { name: req.body.newName, type: req.body.newType },
  }).then(function(docs) {
    res.send(docs)
  })
})

// DELETE ROUTES

}