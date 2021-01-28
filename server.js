const express = require("express");
const { exec } = require("child_process");
const app = express();
const magic = `screen -r Sans-SMP -p 0 -X stuff "list $(printf '\\r')"`;
const cputemp = "sensors -A -j";
const cpuutil = "mpstat"

app.use(express.static("public"));
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

const data = {
    players: ["GMiningHero","Mikorod622"],
    data: "data",
    temp: "nada"
}
var playerGet = function (request, response, next) {
    exec(magic, () => {
        data.players = ["bruh","bruh"]
        next();
    })
}
var dataGet = function (request, response, next) {
    exec(cpuutil, (error, stdout, stderr) => {
        if(error) {console.log(error);return;}
        if(stderr) {console.log(stderr);return;}
        data.data = stdout
        next()
    })
}
var tempsGet = function (request, response, next) {
    exec(cputemp, (error, stdout, stderr) => {
        if(error) {console.log(error);return;}
        if(stderr) {console.log(stderr);return;}
        console.log(stdout)
        data.temp = JSON.parse(stdout)
        next()
    })
}
var final = function (request, response) {
    response.json(data)
}

app.get("/data", [playerGet, dataGet, tempsGet, final])

const listener = app.listen(80, () => {
    console.log("Your app is listening on port " + listener.address().port);
});