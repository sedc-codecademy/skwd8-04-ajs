const txtService = require('./txtService');
const fs = require('fs');

const dataFile = './books.json';
const resultsFile = './books.txt';

fs.readFile(dataFile, 'utf-8', function(err, data) {
  try {
    data = JSON.parse(data);
    console.log(data);
    data.forEach((book, index) => {
      const text = `${index + 1}. Author: ${book.author} Title: ${book.title} \n`;
      txtService.appendText(text, resultsFile);
    });
  } catch (err) {
    console.log(err);
  }
});
