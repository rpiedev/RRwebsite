const express = require("express");
const { exec } = require("child_process");
const { nextTick } = require("process");
const app = express();
const magic = `screen -r Sans-SMP -p 0 -X stuff "list $(printf '\\r')"`;
const cputemp = "sensors coretemp-isa-0000 -A -j";
const cpuutil = "top -i"

app.use(express.static("public"));
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

const data = {
    players: ["GMiningHero","Mikorod622"],
    performance: "data",
    temp: "nada"
}
var cb0 = function (request, response, next) {
    exec(magic, () => {
        data.players = "bruh"
        next();
    })
}
var cb1 = function (request, response) {
    exec(cputemp, (error, stdout, stderr) => {
        if(error) {console.log(error);return;}
        if(stderr) {console.log(stderr);return;}
        data.temp = stdout
        response.json(data);
    })
}

app.get("/data", [cb0, cb1])

const listener = app.listen(80, () => {
    console.log("Your app is listening on port " + listener.address().port);
});