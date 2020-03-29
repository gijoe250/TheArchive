const express = require('express');
const router = express.Router();
const Post = require('../models/post');
var mongoose = require('mongoose');

// Add new post
router.post('/', (req, res) => {
    console.log(req.body.title);
    console.log(req.body.description);

    //  var db = req.db;
    //  var title = req.body.title;
    //  var description = req.body.description;

    const new_post = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
    });

    new_post.save(function(error) {
        if (error) {
            console.log(error);
        }
        res.send({
            post: new_post,
            success: true,
            message: 'Post saved successfully!'
        });
    });
});

router.get('/', (req, res) => {
    console.log('reach the function');
    Post.find({}, 'title description', function(error, posts) {
        if (error) {
            console.error(error);
        }
        res.send({
            posts: posts
        });
    }).sort({ _id: -1 });
});

module.exports = router;