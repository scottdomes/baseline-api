const TagModel = require('../models/tag').model;

module.exports = function(app, db) {
  app.get('/tags', (req, res) => {
    TagModel.find(function(err, models) {
      res.send(models);
    });
  });
};
