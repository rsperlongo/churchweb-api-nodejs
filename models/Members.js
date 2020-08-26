const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
  id: String,
  name: String,
  birthday: String,
  city: String,
  phone: String,
  email: String,
  baptized: String,
 //  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Members', MembersSchema);