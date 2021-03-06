const mongoose = require("mongoose");

const cranesSchema = new mongoose.Schema({
    craneCaption: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
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
    userID: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    craneRate: {
        type: Number,
        required: true
    },
    craneBackgroundRate: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    craneLikes: {
        type: Number,
        default: 0
    },
    image: {
        type: String
      },

});

const CraneModel = mongoose.model("Crane", cranesSchema);

module.exports = CraneModel;