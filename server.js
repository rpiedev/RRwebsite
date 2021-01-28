const express = require("express");
const { exec } = require("child_process");
const app = express();
const magic = `screen -r Sans-SMP -p 0 -X stuff "list $(printf '\\r')"`;

app.use(express.static("public"));
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

const data = {
    players: ["GMiningHero","Mikorod622"],
    performance: "data"
  }
exec(magic, (error, stdout, stderr) => {
    app.get("/data", (request, response) => {
        response.json(data);
    });
})

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});