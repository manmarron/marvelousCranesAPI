const express = require("express");
const router = express();
const CraneController = require("../controllers/cranes");

router
  .post("/addCrane", CraneController.create)
  .get("/cranes", CraneController.query)
  .get("/cranes/:craneUser", CraneController.getById)
  .patch("/:id", CraneController.updatedCrane)
  .delete("/:id", CraneController.deleteCrane);

  module.exports = router;