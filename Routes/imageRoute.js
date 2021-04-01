const { Router } = require('express')
const express = require('express')

var route = express.Router()

imageController = require('../Controllers/imageController')

route.post('/uploadImage', imageController.uploadImage)

module.exports = route