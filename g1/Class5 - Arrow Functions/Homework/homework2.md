# Homework 2

## Part 1 (Basic)
Create an app that prints out dog breeds in a table:

Name | Breed | Hair | Size | Age | Color 
--- | --- | --- | --- |--- |---
Murdzo | Jack Russell Terrier | long | Large | 7 | black
Blacky | Rottweiler | Short | Large | puppy | black

Print out the dogs from the array in a table. Check if the dogs age is 1 or less. If so, change the age number with the word 'puppy' and print it in it's age column.

* Try using arrow functions instead of the basic style declaration (read more: https://javascript.info/arrow-functions-basics)
* Try using ternary operator instead of basic if else statement (read more: https://guide.freecodecamp.org/c/ternary-operator/)

Notes: Feel free to use selectors as ou wish, and to choose the moment of calling the function (if on click of a button or on page load).

Use this array of dogs:
````
[
  {
    name: 'Aron',
    breed: 'Golden Retriever',
    hair: 'Medium',
    size: 'Large',
    age: 1,
    color: 'Golden'
  },
  {
    name: 'Jack',
    breed: 'Fox terrier',
    hair: 'Short',
    size: 'Medium',
    age: 10,
    color: 'White-brown'
  },
  {
    name: 'Hector',
    breed: 'Dogo Argentino',
    hair: 'Short',
    size: 'Extra large',
    age: 1,
    color: 'White'
  },
  {
    name: 'Alfa',
    breed: 'Great Dane',
    hair: 'Short',
    size: 'Extra large',
    age: 5,
    color: 'Gray'
  },
  {
    name: 'Bono',
    breed: 'French bulldog',
    hair: 'Short',
    size: 'Small',
    age: 6,
    color: 'Black'
  }
];
````

## Part 2 (Not mandatory!)
As a bonus, make this JS Object a JSON, and by uloading it to: http://myjson.com/ get the value as a response.

Note: Use XMR, ajax, or fetch as you wish. (read more: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
