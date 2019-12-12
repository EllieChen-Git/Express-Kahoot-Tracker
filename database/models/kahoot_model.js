const mongoose = require("mongoose");
const KahootSchema = require("./../schemas/kahoot_schema");

const KahootModel = mongoose.model("kahoot", KahootSchema);

module.exports = KahootModel;