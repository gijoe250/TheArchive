const express = require('express');
const app = express();
var mongoose = require('mongoose');
const configDB = require('../config/database');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

mongoose.connect(configDB.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATABASE_NAME
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
    console.log('Connection Succeeded');
});

app.use(express.json({ extended: false }));
app.use(bodyParser.json());

app.use('/api/post', require('./routes/post'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));