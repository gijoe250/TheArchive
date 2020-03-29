const mongoose = require('mongoose');

const boardgameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongoose.model('Boardgame', boardgameSchema);