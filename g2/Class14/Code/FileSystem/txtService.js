const fs = require("fs");

function addText(text, path) {
    fs.writeFileSync(path, text, function (err) {
        if (err) {
            console.log("Error: ", err);
        }
        console.log("The text was written in the file successfully!");
    })
}

function appendText(text, path) {
    fs.appendFileSync(path, text, function (err) {
        if (err) {
            console.log("Error: ", err);
        }
        console.log("The text was appended in the file successfully!");
    });
}

function readText(path) {
    return fs.readFileSync(path, { encoding: 'utf-8' })
}

module.exports = {
    addText,
    appendText,
    readText
}
