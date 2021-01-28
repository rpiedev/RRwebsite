const main = document.getElementById("main");

fetch("/data")
.then(response => response.json())
.then(data => {
    main.innerText = data.players.join("\n");
})