const express = require("express");
const router = express.Router();
const kahootRoutes = require("./kahoot_routes");

router.use("/kahoots", kahootRoutes)

module.exports = router;