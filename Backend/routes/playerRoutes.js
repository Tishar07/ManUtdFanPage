const express = require("express");
const router = express.Router();

const playerController = require("../controllers/playerController.js");

router.get("/GetAllPlayer", playerController.getAllPlayers);

router.post("/FilterPlayer", playerController.getFilterPlayers);

router.post("/CreatePlayer",playerController.createPlayer)

module.exports = router;