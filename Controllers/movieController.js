const Movie = require('../models/movie')

exports.getMovies = async(req, res)=>{
    res.header("Content-Type", "application/json");
    try{
        var movieList = await Movie.find({})
        res.status(200)
        res.send(movieList)
    }catch{
        res.status(500)
        res.send({message: "Cannot get the movie list"})
    }
}
