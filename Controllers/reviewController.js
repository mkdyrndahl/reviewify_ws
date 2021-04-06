const Review = require('../models/review');

exports.getReview = async (req, res) => {
    try {
        var reviewList = await Review.find({movieID: req.body.id});
        res.status(200)
        res.send(reviewList)
    } catch {
        res.status(500)
        res.send({ message: "Cannot get review list" })
    }
}

exports.getReviews = async (req, res) => {
    try {
        var reviewList = await Review.find({});
        res.status(200)
        res.send(reviewList)
    } catch {
        res.status(500)
        res.send({ message: "Cannot get review list" })
    }
}

exports.addReview = async (req, res) => {
    try {
        var newReview = {
            movieID: req.body.movieID,
            userID: req.body.userID,
            username: req.body.username,
            description: req.body.description,
            likes: 0,
            dislikes: 0,
            rating: req.body.rating
        }
        const result = await Review.create(newReview);

        res.status(200)
        res.send(result)
    } catch {
        res.status(500)
        res.send({ message: "Cannot add review" })
    }
}

exports.deleteReview = async (req, res) => {
    try {
        const result = await Review.deleteOne({ _id: req.body.id})
        res.status(200)
        res.send(result)
    } catch {
        res.status(500)
        res.send({ message: "Cannot get review list" })
    }
}

exports.likeReview = async (req, res) => {
    try {
        const result = await Review.findOneAndUpdate({ _id: req.body.id }, {$inc: {likes: 1}});
        res.status(200)
        res.send(result)
    } catch {
        res.status(500)
        res.send({ message: "Cannot like review" })

    }
}

exports.dislikeReview = async (req, res) => {
    try {
        const result = await Review.findOneAndUpdate({ _id: req.body.id }, {$inc: {dislikes: 1}});
        res.status(200)
        res.send(result)
    } catch {
        res.status(500)
        res.send({ message: "Cannot dislike review" })
    }
}
