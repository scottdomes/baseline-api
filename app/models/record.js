var mongoose = require('mongoose');
const TagSchema = require('./tag').schema;
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
  type: {
    type: String,
    enum: ['Happiness', 'Anxiety', 'Energy'],
    required: true
  },
  value: {
    type: Number,
    validate: {
      validator: function(v) {
        console.log(v);
        return v > 0 && v < 11;
      },
      message: '{VALUE} is not a valid value.'
    },
    required: [true, 'Record value is required.']
  },
  location: String,
  tags: [TagSchema],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Record', RecordSchema);
