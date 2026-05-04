const playerService = require("../services/playerService");

// GET /api/users
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await playerService.getAllPlayers();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/users
exports.createPlayer = async (req, res) => {
    try {
        const newPlayer = await playerService.createPlayer(req.body);
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};