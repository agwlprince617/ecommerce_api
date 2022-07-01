const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    cname: String,
    email: String,
    number: Number,
    city: String,
})

module.exports = mongoose.model('Customer', CustomerSchema);