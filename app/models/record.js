var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
  type: String,
  value: Number,
  location: String,
  tags: [{ body: String }],
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Record", RecordSchema)


