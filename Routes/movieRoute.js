const { Router } = require('express')
const express = require('express')
var route = express.Router()

movieController = require('../Controllers/movieController')

route.get('/movies', movieController.getMovies)


module.exports = route