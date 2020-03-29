const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

const boardgameRoutes = require('./api/routes/boardgames');
const userRoutes = require('./api/routes/users');
const registerRoutes = require('./api/routes/registers');

mongoose.connect(
    'mongodb+srv://stealing:test@cluster0-oddgf.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/boardgames', boardgameRoutes);
app.use('/users', userRoutes);
app.use('/registers', registerRoutes);

module.exports = app;