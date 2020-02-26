const fs = require('fs');
let fileName = 'test.txt';
module.exports = {
    writeText: function (text) {
        fs.writeFileSync(fileName, text);
    },
    // readText: function () {
    //     return fs.readFileSync(fileName, { encoding: 'utf8' });
    // },
    //same as above
    readText: () =>
        fs.readFileSync(fileName, { encoding: 'utf8' }),
    appendText: (text) =>
        fs.appendFileSync(fileName, text)
};