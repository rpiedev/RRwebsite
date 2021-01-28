const players = document.getElementById("players");
const temps = document.getElementById("temps");
const data = document.getElementById("data");

fetch("/data")
.then(response => response.json())
.then(data => {
    players.innerText = data.players;
    temps.innerText = data.temps;
    data.innerText = data.data;
})