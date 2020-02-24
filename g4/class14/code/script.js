const saySomething = require("./say");
const textService = require("./txtService");
//console.log("Hello from NODE.js");

//console.log(saySomething);
// console.log(saySomething.hello("Krisitna"));
// console.log(saySomething.bye("Krisitna"));
// console.log(saySomething.me.name);

textService.addText("Hello, this is first line.");
textService.appendText("\nThis is another line of text.");
console.log(textService.readText());
textService.addText("\nNovo dete")
console.log(textService.readText());
