const express = require('express');
const router = express.Router();
var Post = require('../models/post');

// Add new post
router.post('/', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title: title,
        description: description
    });

    new_post.save(function(error) {
        if (error) {
            console.log(error);
        }
        res.send({
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