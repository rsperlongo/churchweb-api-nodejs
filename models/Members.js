const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
  id: String,
  name: String,
  birthday: String,
  city: String,
  phone: String,
  email: String,
  description: String,
  baptized: String,
});

module.exports = mongoose.model('Members', MembersSchema);