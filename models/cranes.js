const mongoose = require("mongoose");

const cranesSchema = new mongoose.Schema({
    craneCaption: {
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

});

const Crane = mongoose.model("Crane", cranesSchema);

module.exports = Crane;