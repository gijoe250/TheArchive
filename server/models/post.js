const mongoose = require('mongoose');
//var Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String
});

module.exports = mongoose.model('Post', PostSchema);