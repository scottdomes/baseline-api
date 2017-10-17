var RecordModel = require('../models/record');

module.exports = function(app, db) {
  app.post('/records', (req, res) => {
    // You'll create your note here.
    var entry = new RecordModel({ type: req.body.type, value: req.body.value });

    entry.save(function(error) {
      //This saves the information you see within that Bee declaration (lines 4-6).
      console.log('Your entry has been saved.');
      res.send(entry)
      if (error) {
        console.error(error);
      }
    });
  });
};
