/*const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const configDB = require('./config/database');
*/
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3500;

const server = http.createServer(app);

server.listen(port);

/*mongoose.connect(
    configDB.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
            //dbName: process.env.DATABASE_NAME
    },
    function(err) {
        if (err) throw err;
        console.log('Sucesssfully connected');
    }
);
*/
/*
// Middle ware
app.use(express.json({ extended: false }));
app.use(bodyParser.json());
//app.set('view engine', 'ejs'); // set up ejs for templating

app.use('/api/items', require('./app/routes/items.js'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server Started on ${PORT}'));
*/