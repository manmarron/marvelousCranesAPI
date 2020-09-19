const express = require("express");
const router = express();
const Crane = require("../models/cranes");

//create new Crane
router.post("/addCrane", async (req,res) => {
    const crane = await Crane({
        craneCaption: req.body.craneCaption,
        craneDescription: req.body.craneDescription,
        markers: req.body.markers,
        craneUser: req.body.craneUser,
        craneRate: req.body.craneRate,
        craneBackgroundRate:  req.body.craneBackgroundRate,
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