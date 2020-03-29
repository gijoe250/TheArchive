const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");
const Boardgame = require("../models/boardgame");

// Handle incoming GET requests to /orders
router.get("/", (req, res, next) => {
  User.find()
    .select("user _id")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        users: docs.map(doc => {
          return {
            _id: doc._id,
            boardgame: doc.boardgame,
            username: doc.username,
            password: doc.password,
            request: {
              type: "GET",
              url: "http://localhost:3000/users/" + doc._id
            }
          };
        })
      });
    })
});

router.post("/", (req, res, next) => {
  User.findById(req.body.boardgameId)
    .then(boardgame => {
      if (!boardgame) {
        return res.status(404).json({
          message: "Boardgame not found"
        });
      }
      const user = new User({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
       // quantity: req.body.quantity,
        boardgame: req.body.boardgameId
      });
      return user.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "User stored",
        createUser: {
          _id: result._id,
          boardgame: result.boardgame,
          username: result.username,
          password: result.password
          //quantity: result.quantity
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/users/" + result._id
        }
      });
    })
});

router.get("/:userId", (req, res, next) => {
  User.findById(req.params.userId)
    .exec()
    .then(user => {
      if (!user) {
        return res.status(404).json({
          message: "User not found"
        });
      }
      res.status(200).json({
        user: user,
        request: {
          type: "GET",
          url: "http://localhost:3000/users"
        }
      });
    })
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/users",
          body: { userId: "ID" }
        }
      });
    })
});

module.exports = router;