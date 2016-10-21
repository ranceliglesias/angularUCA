// dependencies
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      MongoClient = require('mongodb').MongoClient;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/people', (req, res) => {
  db.collection('people').find().toArray((err, result) => {
    if (err) return console.log(err);
    console.log(result);
  });
});


MongoClient.connect('mongodb://uca-user00:uca-pass00@ds061676.mlab.com:61676/ucadb',(err, database) => {
  if (err) return console.log(err);
  db = database;
  port = 3000;
  app.listen(port, () => {
    console.log('listening on port: ' + port);
  });
});
