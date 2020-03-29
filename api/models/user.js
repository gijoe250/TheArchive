const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //boardgame: {type: mongoose.Schema.Types.ObjectId, ref: 'Boardgame', required: true},
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String
});

module.exports = mongoose.model('User', userSchema);