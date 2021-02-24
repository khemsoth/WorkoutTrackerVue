const axios = require('axios')

module.exports = function(app) {

// GET ROUTES

app.get('/get/exercises', function(req, res) {
  req.db.collection('exercises').find({}).toArray(function(err, docs) {
    if (err) throw err
    res.send(docs)
  })
})

app.get('/get/:routine', function(req, res) {
  req.db.collection('routines').find({}).toArray(function(err, docs) {
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

app.post('/post/routine', function(req, res) {
  let exList = []
  req.db.collection('routines').insertOne({
    routineName: req.body.routineName,
    exercises: exList
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

app.put('/update/:routine', async function(req, res) {
  let exList
  let routine = req.params.routine
  await axios.get(`http://localhost:5050/get/${routine}`).then(response => exList = response.data)
  let newExList = exList[0].exList
  let exercise = {
    exName: req.body.exName,
    exSets: req.body.exSets,
    exReps: req.body.exReps,
    exNotes: req.body.exNotes
  }
  newExList.push(exercise)
  req.db.collection('routines').findOneAndUpdate({
    routineName: req.params.routine
  },
  {
    $set: {
      'exList': newExList
    }
  }).then(function(docs) {
    res.send(200)
  })
})

// DELETE ROUTES

app.delete('/delete/exercise/:name', function(req, res) {
  req.db.collection('exercises').deleteOne({
    name: req.params.name
  }).then(function(docs) {
    res.send(docs)
  })
})

}