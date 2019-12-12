const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KahootSchema = new Schema({
    winner: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = KahootSchema;