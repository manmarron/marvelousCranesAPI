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

//get user by id
exports.getById = (req, res) => {
    const id = req.params.id;
  
    User.findById(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(404).json({ error: "user not found." }));
  };

//get by username
exports.getByUserName = (req, res) => {
    const userName = req.params.username;
    User
      .find({"username" : userName })
      .then(
        (user) => res.status(200).json(user)
        )
      .catch(
        (err) => res.status(404).json({ error: "user not found." })
        );
  };

//get number of likes for user
exports.getByLikes = (req, res) => {
    const id = req.params.id;
    User
    .findById(id)
    .select("LikesReceived LikesSent")
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(404).json({ error: "user not found." }));
  };

//update user by userID
exports.UpdateByID = (req, res) => {
const id = req.params.id;
User.findByIdAndUpdate(id, req.body, { new: true })
    .then((updated) => res.status(200).json(updated))
    .catch((err) =>
    res.status(400).json({ error: "User could not be updated." })
    );
};
  
//update likes sent by userID
exports.updatedSentLikes = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { new: true })
      .then((updated) => res.status(200).json(updated))
      .catch((err) =>
        res.status(400).json({ error: "User could not be updated." })
      );
  };

  //update likes received by userID
  exports.updatedRecLikes = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { new: true })
      .then((updated) => res.status(200).json(updated))
      .catch((err) =>
        res.status(400).json({ error: "User could not be updated." })
      );
  };

//delete crane by id
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
      .then((removed) => res.status(200).json(removed))
      .catch((err) =>
        res.status(400).json({ error: "user could not be deleted" })
      );
  };


  //get number of likes for crane

exports.updateLikes = (req, res) => {
  const id = JSON.parse(req.query.id);
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((updated) => res.status(200).json(updated))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be updated." })
    );
};