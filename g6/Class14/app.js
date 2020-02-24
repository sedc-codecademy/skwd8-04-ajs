// const say = require('./say');

// say.hello();
// say.bye();
//console.log('Hello from app.js');

const txtService = require('./txtService');
txtService.writeText('This text is written using js.');//this overwrites existing data
txtService.appendText('\n\tThis text is appended using js.');//this appends text to existing data
console.log(txtService.readText());