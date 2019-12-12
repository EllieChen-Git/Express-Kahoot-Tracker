const express = require("express")
const router = express.Router();
const KahootController = require("../controllers/kahoot_controller");

//Landing Page with Welcome Message
// router.get("/", (req, res) => res.send("Welcome to Kahoot Tracking API")); 

// GET route to show all Kahoot records
router.get("/", KahootController.index);

// POST route to create new Kahoot records
router.post("/", KahootController.create)

// GET route to show a Kahoot record
router.get("/:id", KahootController.show)

// PUT & PATCH routes to update a Kahoot record
router.put("/:id", KahootController.update)
router.patch("/:id", KahootController.update)

// DELETE route to delete a Kahoot record
router.delete("/:id", KahootController.destroy)

module.exports = router;