console.log("HEY");
console.log("FROM NODE.JS");
console.log("ANOTHER THING");

const say = require("./say");
// console.log(say.hey("Bob")); // Will not work, the name does not exist in this scope
// console.log(say.sayHey("Bob"));
// console.log(say.sum(1,2)); // Will not work since we do not export sum in the module

const textService = require("./textService");
textService.addText("Hello from the other JS!");
textService.addText("Hello from the other JS AGAIN!");
textService.appendText(" This is appended text!");
textService.appendText(`
MOAR TEXT!`);
console.log(textService.readText());

