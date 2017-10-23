var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = {
  schema: TagSchema,
  model: mongoose.model('Tag', TagSchema)
};
