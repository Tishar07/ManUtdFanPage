import { Players } from "../API/api.js";

function displayPlayers(players){
    const playerContainer = document.getElementById("player-container");
    playerContainer.innerHTML="";
    players.forEach(p => {
        const playerDiv = document.createElement("div");
        const nameHeader = document.createElement("h4");
        const image = document.createElement("img");
        image.src=p.ImagePath;
        image.alt = p.name;
        playerDiv.className="player-card";
        nameHeader.innerHTML= p.name;
        playerDiv.appendChild(nameHeader);
        playerDiv.appendChild(image);
        playerContainer.appendChild(playerDiv)
    });

}

function loadPlayers() {
    let url = Players();
    fetch(url+"GetAllPlayer")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(players => {
            displayPlayers(players);
        })
        .catch(error => {
            console.error("Error loading players:", error);
    });
}

function FilterPlayer(){
    const sort = document.getElementById("SortValue").value;
    const order = document.getElementById("Order").value;
    const playerPosition= document.querySelectorAll('#FieldPlayers input[type="checkbox"]');
    let checkedPlayers = [];
    playerPosition.forEach(p=>{
        if(p.checked){
            checkedPlayers.push(p.value);
            console.log(p.value)
        }
    });

    const data = {
        sort:sort,
        order:order,
        position: checkedPlayers
    };
    let url = Players();
    fetch(url+"/FilterPlayer",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(response =>{
        if(!response.ok){
            throw new Error("Fetch to Filter Failed !")
        }
        return response.json();
    }).then(filteredPlayers=>{
        displayPlayers(filteredPlayers);

    }).catch(error=>{
        console.error("Error Filtering")
    })

}

function resetFilter(){
    let dropdownsFilter = document.querySelectorAll("select");
    dropdownsFilter.forEach(element =>{
        element.selectedIndex = 0;
    });
    let checkedPlayers = document.querySelectorAll('input[type="checkbox"]');
    checkedPlayers.forEach(element=>{
        element.checked=false;
    })
    loadPlayers();
}

loadPlayers();

window.resetFilter = resetFilter;
window.FilterPlayer = FilterPlayer;