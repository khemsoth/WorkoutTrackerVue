module.exports = function(app) {

app.get('/', function(req, res) {
  req.db.collection('exercises').find({}, function(err, docs) {
    docs.each(function(err, doc) {
      if(doc) {
        res.send(doc)
      } else {
        res.end()
      }
    })
  })
})

console.log('Routes loaded')

}