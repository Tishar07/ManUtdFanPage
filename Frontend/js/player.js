import { getPlayers } from "../API/api.js";
async function loadPlayers() {

    const players = await getPlayers();
    const playerContainer = document.getElementById("player-container");

    players.forEach(p => {
        const playerDiv = document.createElement("div");
        playerDiv.className="player-card";
        const nameHeader = document.createElement("h4");
        nameHeader.innerHTML= p.name;
        playerDiv.appendChild(nameHeader);
        playerContainer.appendChild(playerDiv)
    });

    
}

loadPlayers();