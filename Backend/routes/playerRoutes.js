const express = require("express");
const router = express.Router();

const playerController = require("../controllers/playerController.js");

// GET all users
router.get("/", playerController.getAllPlayers);

// CREATE user
router.post("/", playerController.createPlayer);

module.exports = router;