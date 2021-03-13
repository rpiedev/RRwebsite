document.addEventListener('DOMContentLoaded', function() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", updatePlayers);
    request.open("GET", "/query.json")
    request.send()
}, false);

function updatePlayers() {
    const players = JSON.parse(this.response).players
    if (players.length<1) {
        var div = document.createElement('div');
        div.innerHTML = "No players online"
        document.getElementById("players").appendChild(div)
    }
    for (var i = 0;i<players.length;i++) {
        var div = document.createElement('div');
        div.innerHTML = players[i]
        document.getElementById("players").appendChild(div)
    }

}