var RecordModel = require('../models/record');
const TagModel = require('../models/tag').model;

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
    const entry = new RecordModel({
      type: req.body.type,
      value: req.body.value,
      location: req.body.location,
      tags: req.body.tags
    });
    const tagErrors = [];

    req.body.tags.forEach(tag => {
      TagModel.findOne({ text: tag.text }, (err, match) => {
        if (!match) {
          var newTag = new TagModel({
            text: tag.text
          });
          newTag.save(err => {
            tagErrors.push(err);
          });
        }
      });
    });

    entry.save(function(error) {
      if (error || tagErrors.length > 0) {
        res.send(error.errors, tagErrors);
      } else {
        res.send(entry);
      }
    });
  });
};
