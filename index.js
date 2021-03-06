var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', { useMongoClient: true });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function(callback) {
  require('./app/routes')(app, db);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});

