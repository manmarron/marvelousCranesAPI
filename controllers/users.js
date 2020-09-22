const express = require("express");
const router = express();
const User = require("../models/users");
//const jwt = require("jwt-simple");
//const JWT_SECRET = "cranes";


//create new user
exports.create = async (req, res) => {
    const params = { ...req.body};
    User.create(params)
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(400).json(err));
  };


//User Login

exports.LogUserIn = async (req, res) => {
    const params = { ...req.body};
    User.findOne({ username: req.body.username }).then((user) => {
        if(!user) {
            res.status(401).json({
                message: "User/Password not found."
            })
        } else {
            if(user.validatePassword(req.body.password)) {
                //var token = jwt.encode(user, JWT_SECRET);
                //res.status(200).json({token: token});
                res.status(200).json(user);
                //jwt token/cookies - remember me log in
            } else {
                res.status(401).json({
                    message: "Password/User not found."
                });
            }
        }
    })
}