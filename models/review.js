const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    _id: String,
    movieID: mongoose.ObjectId,
    username: String,
    description: String,
    likes: Number,
    dislikes: Number
}, {
    versionKey: false
})

module.exports = mongoose.model("review", reviewSchema)