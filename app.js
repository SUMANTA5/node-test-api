const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello node')
})
app.get('/name',function(req,res){
const id = req.query.id
  res.send('Sumanta '+id)
})

app.get('/name/:id',function(req,res){
  const id = req.params.id
  res.send('susanta '+ id)
})

app.listen(3000)