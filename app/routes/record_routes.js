var RecordModel = require('../models/record');

module.exports = function(app, db) {
  app.get('/records', (req, res) => {
    RecordModel.find(function(err, models) {
      res.send(models);
    });
  });

  app.get('/records/:id', (req, res) => {
    RecordModel.findById(req.params.id, function(err, model) {
      res.send(model);
    });
  });

  app.post('/records', (req, res) => {
    var entry = new RecordModel({
      type: req.body.type,
      value: req.body.value,
      location: req.body.location,
      tags: req.body.tags
    });

    entry.save(function(error) {
      console.log('Your entry has been saved.');
      res.send(entry);
      if (error) {
        console.error(error);
      }
    });
  });
};
