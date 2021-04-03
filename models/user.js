const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    login: String,
    password: String,
    role: String,
}, {
    versionKey: false,
});

module.exports = mongoose.model('User', UserSchema);