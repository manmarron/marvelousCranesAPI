const mongoose = require("mongoose");

const cranesSchema = new mongoose.Schema({
    craneName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    craneDescription: {
        type: String,
        required: true
    },
    craneCity: {
        type: String,
        required: true
    },
    craneLatitude:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    craneLongitude:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    craneUser: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    craneRate: {
        type: Number,
        required: true
    },
    craneBackgroundRate: {
        type: Number,
        required: true
    },
    craneCaption: {
        type: String,
        required: true,
        trim: true
    }
});

const Crane = mongoose.model("Crane", cranesSchema);

module.exports = Crane;