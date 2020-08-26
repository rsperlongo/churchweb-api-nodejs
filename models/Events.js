const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    category: String,
    local: String,
    date: String,
    description: String,
    envolved: String
});

module.exports = mongoose.model('Events', EventsSchema);