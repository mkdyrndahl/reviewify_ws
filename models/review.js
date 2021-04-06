const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    movieID: mongoose.ObjectId,
    userID: mongoose.ObjectId,
    username: String,
    description: String,
    likes: Number,
    dislikes: Number,
    rating: Number
}, {
    versionKey: false
})

module.exports = mongoose.model("review", reviewSchema)