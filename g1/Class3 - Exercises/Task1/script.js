// Exercise 1 - Colorfull list
// Create an array of 5 colors
// Create an HTML page with:
// A header
// An empty unordered list
// A button
// When the button is clicked it should fill in the empty unordered list with the colors of the array, and each item should have it's color as background color

// Array
let colors = ['green', 'pink', 'yellow', 'blue', 'red'];

// Element
let h1 = document.querySelector('h1');
let ol = document.querySelector('ol');
let btn = document.querySelector('button');

//Event
btn.addEventListener('click', function() {
  for (const color of colors) {
    let li = document.createElement('li');
    li.innerText = color;
    li.style.backgroundColor = color;
    ol.appendChild(li);
  }
});
