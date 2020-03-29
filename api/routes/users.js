const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

//@route        GET api/profile
//@description  Test route
//@access       Public
router.get('/', (req, res, next) => {
    User.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
});

router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
    });
    user.save();
    res.status(201).json({
        message: 'Handling POST reqs to /users',
        user: user
    });
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    });
});

router.patch('/:UserId', (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    User.update({ _id : id}, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
});

router.delete('/:userId', (req, res, next) => {
   const id = req.params.userId;
   User.remove({ _id : id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
});

module.exports = router;