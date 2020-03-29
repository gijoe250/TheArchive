const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Boardgame = require('../models/boardgame');

//@route        GET api/profile
//@description  Test route
//@access       Public
router.get('/', (req, res, next) => {
    Boardgame.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
});

router.post('/', (req, res, next) => {
    const boardgame = new Boardgame({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    boardgame.save();
    res.status(201).json({
        message: 'Handling POST reqs to /boardgames',
        boardgame: boardgame
    });
});

router.get('/:boardgameId', (req, res, next) => {
    const id = req.params.boardgameId;
    Boardgame.findById(id)
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

router.patch('/:boardgameId', (req, res, next) => {
    const id = req.params.boardgameId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Boardgame.update({ _id : id}, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
});
//deletes
router.delete('/:boardgameId', (req, res, next) => {
   const id = req.params.boardgameId;
   Boardgame.remove({ _id : id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
});

module.exports = router;