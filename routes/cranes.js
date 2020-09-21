const express = require("express");
const router = express();
const CraneController = require("../controllers/cranes");

router
  .post("/addCrane", CraneController.create)
  .get("/cranes", CraneController.query)
  .get("/:id/cranes", CraneController.getById)
  .get("/cranes/:userName", CraneController.getByUserName)

  .patch("/:id", CraneController.updatedCrane)
  .delete("/:id", CraneController.deleteCrane);

  module.exports = router;