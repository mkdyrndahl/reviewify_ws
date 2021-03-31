const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema(
    {
        title: String,
        genres: String,
        description: String, 
        length: Number,
        director: String,
        cast: Array
    },{
        versionKey: false
    }
)

module.exports = mongoose.model("movie", MovieSchema);