const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KahootSchema = new Schema({
    winner: {
        type: String,
        required: true
    },
    kahootDate: {
        type: String,
        required: true
    }
})

module.exports = KahootSchema;