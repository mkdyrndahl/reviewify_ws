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

exports.addMovie = async(req, res)=>{
    res.header("Content-Type", "application/json");
    try{
        var newMovie = {title: req.body.title, image: req.body.image, genres: req.body.genres,
            description: req.body.description, length: req.body.length, director: req.body.director};
            const result = await Movie.create(newMovie);
            res.status(200)
   
        res.send(result);
    }catch{
        res.status(500)
        res.send({message: "Cannot add a new movie"})
    }
    
}

exports.deleteMovie = async(req, res)=>{
    res.header("Content-Type", "application/json");
    try{
        const result = await Movie.deleteOne({_id: req.body.id});
        res.status(200)
        res.send(result);
    }catch{
        res.status(500);
        git.send({message: "Cannot delete the movie"});
    }
    
}

exports.updateMovie = async(req, res)=>{
    res.header("Content-Type", "application/json");
    var updatedMovie = {title: req.body.title, image: req.body.image, genres: req.body.genres,
        description: req.body.description, length: req.body.length, director: req.body.director};
    const result = await Movie.findOneAndUpdate({_id: req.body._id},updatedMovie);
    res.send(result);

}

exports.deleteAll = async(req, res)=>{
    res.header("Content-Type", "application/json");
    try{
        var result = await Movie.deleteMany({});

    }catch{

    }
}