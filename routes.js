const express = require("express");
const router = express.Router();
const KahootController = require("./controllers/kahoot_controller");

// get route to show all kahoot records
router.get("/kahoots", KahootController.index);

// post route to create new records
router.post("/kahoots", KahootController.create)

module.exports = router;