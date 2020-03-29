const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");

const Register = require("../models/register");

router.post("/signup", (req, res, next) => {
    Register.find({ username: req.body.username })
        .exec()
        .then(user => {
            if(user.length >= 1){
                return res.status(409).json({
                    message: 'user exists'
                });
            } else {
                bcyrpt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const register = new Register({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            password: hash
                        });
                        register.save().then(result => {
                            return res.status(201).json({
                                message : "user created"
                            });
                        });
                    }
                });
            }
        })
    
});

module.exports = router;