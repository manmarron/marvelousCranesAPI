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
    },
    markers: {
        type: Array,
        lat:{
            type: String,
            lowercase: true,
            trim: true,
            required: true
        },
        lng:{
            type: String,
            lowercase: true,
            trim: true,
            required: true
        },
    },
    craneUser: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    craneRate: {
        type: String,
        required: true
    },
    craneBackgroundRate: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Array
    },
    craneLikes: {
        type: Number
    }

});

const CraneModel = mongoose.model("Crane", cranesSchema);

module.exports = CraneModel;