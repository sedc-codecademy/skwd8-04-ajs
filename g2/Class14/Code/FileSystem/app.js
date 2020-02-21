const txtService = require('./txtService');
const path = "test.txt";

// txtService
// .addText("Hello this is text that needs to be added!", path);

// txtService.appendText("\nThis is appended text!", path);

console.log(txtService.readText(path));



