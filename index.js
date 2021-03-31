const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const port = 8000;

const corsOptions = {
    origin: '*'
}

var  uri = "mongodb+srv://ryantran:trantran2312@cluster0.tynq9.mongodb.net/reviewify?retryWrites=true&w=majority"


app.use(cors(corsOptions));

app.use(bodyParser.json());

var movieRoute = require('./Routes/movieRoute')
app.use('/admin', movieRoute);


app.listen(port, () =>{
    console.log(`Web Service is listening on port ${port}`);
    console.log("Connecting to the Database")

    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
});