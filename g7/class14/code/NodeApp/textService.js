const fs = require("fs");
let fileName = "db.txt";

module.exports = {
    addText: function(text){
        fs.writeFileSync(fileName, text, function(err){
            if(err){
                console.log(err);
            }
            console.log("The file was saved!");
        })
    },
    appendText: function(text){
        fs.appendFileSync(fileName, text, function(err){
            if(err){
                console.log(err);
            }
            console.log("The file was edited!");
        })
    },
    readText: function(){
        return fs.readFileSync(fileName, {encoding: "utf-8"});
    }
}