// Exercise 2 - Animal shelter
// Create a animal adopting app
// There should be an array of animal breeds
// There should be an input and a search button
// When the person enters an animal breed it should search the array
// If the animal exists it should show an H1 element that says: "The animal can be adopted" in green text
// If the name does not exist it should show an H1 element that says: "The animal can't be adopted" in red text
// The input should not be case sensitive (it should find the animal regardless of capital or small letters)

let animals = ['dog', 'cat', 'lizard'];

// Selectors
let input = document.getElementById('search');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

// Events

button.addEventListener('click', function() {
  let value = input.value;

  for (const animal of animals) {
    if (animal.toLowerCase() === value.toLowerCase()) {
      h1.innerText = `The animal can be adopted`;
      h1.style.color = 'green';
      return;
    }
  }
  h1.innerText = `The animal can't be adopted`;
  h1.style.color = 'red';
});
