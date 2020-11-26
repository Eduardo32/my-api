const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
});

module.exports = mongoose.model('User', UserSchema);