const { Router } = require('express')
const express = require('express')
var route = express.Router()
reviewController = require('../Controllers/reviewController')

route.post('/reviews', reviewController.getReviews)

route.post('/reviews/like', reviewController.likeReview)

route.post('/reviews/like', reviewController.dislikeReview)

route.delete('/reviews', reviewController.deleteReview)

module.exports = route