const Review = require('../models/review');

exports.getReviews = async (req, res) => {
    try{
        var reviewList = await Review.find({})
        res.status(200)
        res.send(reviewList)
    } catch {
        res.status(500)
        res.send({message: "Cannot get review list"})
    }
}

exports.deleteReview = async (req, res) => {
    try{
        const result = await Review.deleteReview({movieID: req.body.movieID, username: req.body.username})
        res.status(200)
        res.send(result)
    } catch {
        res.status(500)
        res.send({message: "Cannot get review list"})
    }
}

exports.likeReview = async (req, res) => {
    try{
        const review = await Review.likeReview({movieID: req.body.movieID, username: req.body.username})
        res.status(200)
        res.send(review)
    } catch {
        res.status(500)
        res.send({message: "Cannot like review"})

    }
}

exports.dislikeReview = async (req, res) => {
    try{
        const review = await Review.likeReview({movieID: req.body.movieID, username: req.body.username})
        res.status(200)
        res.send(review)
    } catch {
        res.status(500)
        res.send({message: "Cannot like review"})

    }
}
