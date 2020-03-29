const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Boardgame = require('../models/boardgame');

//@route        GET api/profile
//@description  Test route
//@access       Public
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET reqs to /boardgames'
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    // console.log(req.body.price);

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
});

router.patch('/:boardgameId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated'
    });
});

router.delete('/:boardgameId', (req, res, next) => {
    res.status(200).json({
        message: 'delete'
    });
});

module.exports = router;