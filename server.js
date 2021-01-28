const express = require("express");
const { exec } = require("child_process");
const { nextTick } = require("process");
const app = express();
const magic = `screen -r Sans-SMP -p 0 -X stuff "list $(printf '\\r')"`;
const cputemp = "sensors coretemp-isa-0000 -A -j";
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
        console.log("pl")
        data.players = ["bruh","bruh"]
        next();
    })
}
var dataGet = function (request, response, next) {
    exec(cpuutil, (error, stdout, stderr) => {
        console.log("da")
        if(error) {console.log(error);return;}
        if(stderr) {console.log(stderr);return;}
        data.data = stdout
    })
}
var tempsGet = function (request, response) {
    exec(cputemp, (error, stdout, stderr) => {
        console.log("te")
        if(error) {console.log(error);return;}
        if(stderr) {console.log(stderr);return;}
        data.temp = stdout
        response.json(data);
    })
}

app.get("/data", [playerGet, dataGet, tempsGet])

const listener = app.listen(80, () => {
    console.log("Your app is listening on port " + listener.address().port);
});