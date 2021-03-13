const express = require("express");
const query = require("minecraft-query");
const fs = require('fs');
var sansfile = require("./views/query.json")

const app = express();
const mc = new query({host: "sans-smp.ddns.net", port:25565})

const interval = setInterval(function () {
    mc.fullStat().then(result=>{
        fs.writeFile("./views/query.json", JSON.stringify(result), (err) => {
            if (err) throw err;
        })
    })
}, 5000)

app.use(express.static(__dirname+"/views"))
app.get("/query.json", function (req,res) {
    res.json(__dirname+"/views/query.json")
})

const listener = app.listen(80, () => {
    console.log("Your app is listening on port " + listener.address().port);
});