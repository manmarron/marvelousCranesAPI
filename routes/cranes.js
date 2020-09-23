const express = require("express");
const router = express();
const CraneController = require("../controllers/cranes");

router
  .post("/addCrane", CraneController.create)
  .get("/cranes", CraneController.query)
  .get("/craneID", CraneController.getById)
  .get("/craneUser", CraneController.getByUserName)
  .get("/craneLikes", CraneController.getByLikes)
  .patch("/Update", CraneController.updatedCrane)
  .delete("/Delete", CraneController.deleteCrane)
  .get("/craneRatings", CraneController.getByCraneRatings)
  .get("/bkGroundRatings", CraneController.getByBkGrdRating)
  .get("/AllRatings", CraneController.getByAllRatings)
  .patch("/Increment", CraneController.updateLikes)



  module.exports = router;