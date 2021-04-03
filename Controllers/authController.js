const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET;

exports.login = async (req, res) => {
    User.findOne({ login: req.body.login }, (err, user) => {
        if (err)
            return res.status(500).send({ message: `Login error ${err}` });
        if (!user || !bcrypt.compareSync(req.body.password, user.password))
            return res.status(404).send({ message: `Login or password is incorrect` });
        res.send({
            token: jwt.sign({ id: user._id }, secret),
        });
    });
};

exports.register = async (req, res) => {
    let u = await User.findOne({ login: req.body.login });
    if (u)
        return res.status(409).send({ message: 'User already exists ' });
    User.create({
        login: req.body.login,
        password: bcrypt.hashSync(req.body.password),
        role: 'user',
    }, (err, user) => {
        if (err)
            return res.status(500).send({ message: `Could not register user: ${err}` });
        res.send({
            token: jwt.sign({ id: user._id }, secret),
        });
    });
};

exports.authorize = async (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(401).send({ message: 'No token provided' });
    jwt.verify(token, secret, (err, decoded) => {
        if (err)
            return res.status(500).send({ message: 'Invalid token' });
        User.findById(decoded.id, (err, user) => {
            if (err)
                return res.status(500).send({ message: `Authorize error ${err}` });
            if (!user)
                return res.status(404).send({ message: `User ${req.body.login} not found` });
            res.send(user);
        });
    });
};