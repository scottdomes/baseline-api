var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
  type: String,
  value: Number
})

module.exports = mongoose.model("Record", RecordSchema)


