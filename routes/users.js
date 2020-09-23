const express = require("express");
const router = express();
const UserController = require("../controllers/users");

router
  .post("/Users", UserController.create)
  .post("/login", UserController.LogUserIn)
  
  .get("/:id/users", UserController.getById)
  .get("/:username/user", UserController.getByUserName)
  .get("/users/:id", UserController.getByLikes)
  .patch("/updateUsers/:id", UserController.UpdateByID)
  .patch("/sent/:id", UserController.updatedSentLikes)
  .patch("/recvd/:id", UserController.updatedRecLikes)
  .delete("/delete/:id", UserController.deleteUser)

  module.exports = router;
