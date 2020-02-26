const txtService = require('./txtService');

const path = 'test.txt';

// txtService.addText('First line of text', path);

// txtService.appendText('\n This is new text in a new line', path);

console.log(txtService.readText(path));
