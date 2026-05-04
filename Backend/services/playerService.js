const db = require("../db/db");

// Get all players
exports.getAllPlayers = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM manutdplayers", (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Create Player to correct
exports.createUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        db.query(sql, [user.name, user.email], (err, result) => {
            if (err) return reject(err);
            resolve({ id: result.insertId, ...user });
        });
    });
};