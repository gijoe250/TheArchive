const express = require('express');
const router = express.Router();
var Post = require('../models/post');

//@route        GET api/profile
//@description  Test route
//@access       Public
router.get('/', (req, res) => res.send('items route'));

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

module.exports = router;