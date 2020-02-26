const fs = require('fs');
let file = "log.txt";

module.exports = {
    log: text => {
        fs.appendFileSync(file, text, err=> {
            if(err)
                return console.log(err) 
        })
    }
}