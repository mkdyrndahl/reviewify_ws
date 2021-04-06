const express = require('express');
const fileUpload = require("express-fileupload");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const port = 8000;

const corsOptions = {
    origin: '*',
    methods: "GET,PUT,POST,DELETE"
}

// enable files upload
app.use(fileUpload({
  createParentPath: true
}));

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/', require('./Routes/imageRoute'));
app.use('/admin', require('./Routes/movieRoute'));
app.use('/', require('./Routes/authRoute'));
app.use('/', require('./Routes/reviewRoute'));

app.listen(port, () => {
    console.log(`Web Service is listening on port ${port}`);
    const mongoHost = process.env.DB_HOST;
    console.log(`Connecting to the Database ${mongoHost}`);
    mongoose.connect(mongoHost, { useNewUrlParser: true, useUnifiedTopology: true });
});
