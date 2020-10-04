const express = require("express");
const router = express();
const UserController = require("../controllers/users");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
router
  .post("/Users", UserController.create)
  

//need reworking
  .get("/:id/users", UserController.getById)
  .get("/:username/user", UserController.getByUserName)
  .get("/users/:id", UserController.getByLikes)
  .patch("/updateUsers/:id", UserController.UpdateByID)
  .patch("/sent/:id", UserController.updatedSentLikes)
  .patch("/recvd/:id", UserController.updatedRecLikes)
  .delete("/delete/:id", UserController.deleteUser)

  .patch("/incrementUserLike", UserController.updateLikes)

  //.post("/login", UserController.LogUserIn)

  .get("/getUserInfo", authenticateToken, (req, res) => { 

    const id = req.newUser.name;
    User.find({"username" : id })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(404).json({ error: "user not found." }));

  })

  .post("/login", (req, res) => {
    const params = { ...req.body}
    
    const newUser = { 
      name: req.body.username, 
      emailAdd: req.body.emailAddress
        }
    User.findOne({ username: req.body.username }).then((user) => {
        if(!user) {
            res.status(401).json({
                message: "User/Password not found."
            })
        } else {
            if(user.validatePassword(req.body.password)) {
                
                const accessToken = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET)
                res.json({ accessToken: accessToken })
                
                res.status(200).json(user);
                //jwt token/cookies - remember me log in
            } else {
                res.status(401).json({
                    message: "Password/User not found."
                });
            }
        }
    })
}  )

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, newUser) => {
    if (err) return console.log(err) + res.sendStatus(403) 
    req.newUser = newUser
    next()
  })

}
  module.exports = router;
