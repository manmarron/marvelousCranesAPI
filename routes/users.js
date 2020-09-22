const express = require("express");
const router = express();
const UserController = require("../controllers/users");

router
  .post("/Users", UserController.create)
  .post("/login", UserController.LogUserIn)
  /*.get("/:id/cranes", UserController.getById)
  .get("/cranes/:userName", UserController.getByUserName)
  .get("/:id/craneLikes", UserController.getByLikes)
  .patch("/:id", UserController.updatedCrane)
  .delete("/:id", UserController.deleteCrane)*/

  module.exports = router;