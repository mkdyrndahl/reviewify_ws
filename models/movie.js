const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    title: String,
    image: String,
    genres: String,
    description: String,
    length: Number,
    director: String
}, {
    versionKey: false
});

module.exports = mongoose.model("movie", MovieSchema);