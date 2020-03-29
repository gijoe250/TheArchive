const express = require('express');
const app = express();

var mongoose = require('mongoose');
const configDB = require('../config/database');
var bodyParser = require('body-parser');

/**/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/**/

mongoose.connect(configDB.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test'
});

/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
    console.log('Connection Succeeded');
});
*/

app.use(express.json({ extended: false }));
app.use(bodyParser.json());

app.use('/api/post', require('./routes/post'));
//app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

module.exports = app;