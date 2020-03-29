const mongoose = require('mongoose');

const boardgameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    minPlayers: Number,
    maxPlayers: Number,
    difficulty: Number,
    duration: Number,
    description: String
});

module.exports = mongoose.model('Boardgame', boardgameSchema);