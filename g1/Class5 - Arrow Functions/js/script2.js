// FUNCTIONS

//Declaration of a function
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Calling the function
getFullName('Alek', 'Kocevski');

// Saving the return value from the function
let alek = getFullName('Alek', 'Kocevski');
// console.log(alek)

// Calling function inside if statement
if (getFullName('Aleksandar', 'Kocevski').length >= 10) {
  // console.log(`That's a long name`);
}

// Using function in function
function printPersonDetails(firstName, lastName, age, address) {
  if (!address) {
    console.log('error');
    return;
  }
  return `The person ${getFullName(firstName, lastName)}, ${age} years old, lives on ${address}`;
}
// Calling function with all 4 parameters
let ivo = printPersonDetails('Ivo', 'Kostovski', 30, 'Skopje');
// console.log(ivo);

// Calling function with missing parameters
// let alek = printPersonDetails('Aleksandar', 'Kocevski', 30);
// console.log(alek);

// Adding function as value to variable
let greeting = function(name) {
  return `Hellow ${name}`;
};

// console.log(greeting('Adam'));

// Anonymus function in event listener
document.querySelector('button').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Button clicked');
});

// Arrow functions

let logSomething = function() {
  console.log('Hi there');
};
logSomething();

// One liner
let logSomething2 = () => console.log('Hi There');
logSomething2();

// Multiline
let logSomething3 = () => {
  console.log('Hi There');
  console.log('Hi There pak');
};
logSomething3();

// Arrow func. with parameters

let sumWithTen = function(num) {
  return num + 10;
};
// console.log(sumWithTen(25));

let sumWithTen2 = num => {
  return num + 10;
};
// console.log(sumWithTen2(35));

let sumWithTen3 = num => num + 10;

// console.log(sumWithTen3(13));

// Arrow with multiple parameters
let sumOfNumbers = (num1, num2) => num1 + num2;
// console.log(sumOfNumbers(1, 2));

document.querySelector('button').addEventListener('click', () => console.log('Button was clicked'));

// Self ivoked functions
let sayHello = function(name) {
  console.log(`Hello ${name}`);
};
let sayHelloArrow = name => console.log(`Hello ${name}`);
sayHello('Alek');
sayHelloArrow('Ivo');

(function(name) {
  console.log(`Hello ${name}`);
})('Goran');
(name => console.log(`Hello ${name}`))(`Dime`);

// (() => sayHello('Dragan'))()
// (name => sayHello(name))('Dragan')

// Using self ivoked functions

let fullName = ((firstName, lastName) => `${firstName} ${lastName}`)('Filip', 'Stojanovski');

console.log(fullName);

function sum(num1, num2) {
  return num1 + num2;
}
let number1 = 30;
let number2 = '12';
let result = sum(number1, parseInt(number2));
console.log(result);

// RUCURSION (STANDARD)
function sumTo(num) {
  if (num === 0) {
    return 0;
  }
  return num + sumTo(num - 1);
}
// console.log(sumTo(10));

// RUCURSION (ARROW) -
let sumToArrow = num => (num === 0 ? 0 : num + sumToArrow(--num));

console.log(sumToArrow(10));
