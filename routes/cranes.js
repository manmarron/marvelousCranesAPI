const express = require("express");
const router = express();
const Crane = require("../models/cranes");

//create new Crane
router.post("/addCrane", async (req,res) => {
    const crane = await Crane({
        craneName: req.body.craneName,
        craneDescription: req.body.craneDescription,
        craneCity: req.body.craneCity,
        craneLatitude: req.body.craneLatitude,
        craneLongitude: req.body.craneLongitude,
        craneUser: req.body.craneUser,
        craneRate: req.body.craneRate,
        craneBackgroundRate:  req.body.craneBackgroundRate,
        craneCaption: req.body.craneCaption
    })

    try {
        const newCrane = await crane.save();
        res.status(201).json(newCrane);
    } catch (err) {
        res.status(400).json({ message: err.message });
    };

});

//Get Crane

module.exports = router;