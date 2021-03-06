const { Router } = require('express');
const express = require('express');
var route = express.Router();

movieController = require('../Controllers/movieController');

route.post('/movie', movieController.getMovie);
route.get('/movies', movieController.getMovies);
route.post('/movies', movieController.addMovie);
route.delete('/movies', movieController.deleteMovie);
route.put('/movies', movieController.updateMovie);

route.delete('/deleteAll', movieController.deleteAll)

module.exports = route;