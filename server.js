const express = require("express");
const { exec } = require("child_process");
const app = express();

const magic = `screen -r Sans-SMP -p 0 -X stuff "list $(printf '\\r')"`;
console.log(magic);
/*exec(magic, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout)
})
*/