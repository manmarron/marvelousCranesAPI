const express = require("express");
const router = express();
const ImageController = require("../controllers/images");

router
  //.post("/addCrane", ImageController.create)
  .get("/getAllImages", ImageController.getAll)




  module.exports = router;