const { login, register, authorize } = require('../Controllers/authController');
const express = require('express');

module.exports = express.Router()
    .post('/login', login)
    .post('/register', register)
    .get('/authorize', authorize);