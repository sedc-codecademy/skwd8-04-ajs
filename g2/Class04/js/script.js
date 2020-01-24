// console.log('connected !');
let logSomething = function(shouldLog) {
    console.log("Hello there!");
};
// Arrow function
let logSomethingArrow = shouldLog => shouldLog ? console.log("Hello there!") : false;

//regular function
let sumWith10 = function(num) {
    return num + 10;
}

// Arrow function single line
let sumFunc = num => num + 10;

// Arrow function mutli line
let sumFunc2 = num => {
    let result = num + 10;
    return `The sum of ${num} + 10 is equal to ${result}`;
}


// Exercise 1

let numberOfDigits = number => String(Math.abs(number)).length;
let evenOrOdd = number => number % 2 === 0 ? 'even' : 'odd';
let positiveOrNegative = number => number >= 0 ? 'positive' : 'negative';

let numberStats = number => {
    let digitsCount = numberOfDigits(number);
    let isEven = evenOrOdd(number);
    let isPositive = positiveOrNegative(number);

    return `${digitsCount} Digits, ${isEven}, ${isPositive}`;
};

// console.log(numberStats(-25));

// //IIFE example regular
// (function(number) {
//     let digitsCount = numberOfDigits(number);
//     let isEven = evenOrOdd(number);
//     let isPositive = positiveOrNegative(number);

//     console.log(`${digitsCount} Digits, ${isEven}, ${isPositive}`);
// })(-25);

// //IIFE example arrow syntax
// (number => {
//     let digitsCount = numberOfDigits(number);
//     let isEven = evenOrOdd(number);
//     let isPositive = positiveOrNegative(number);

//     console.log(`${digitsCount} Digits, ${isEven}, ${isPositive}`);
// })(-25);


// // RECURSION 
// function sumTo(num) {
//     if (num === 0) {
//         return 0
//     }
//     return num + sumTo(num - 1)
// }
// sumTo(4);


// var result = "Ivo";

// function getFullName(firstName, lastName) {
//     var result = `${firstName} ${lastName}`;
//     console.log(result);
// }
// getFullName("Cave", "Johnson"); // Will log Cave Johnson in the console
// console.log(result);


// EXERCISE 2
const sizeInput = document.getElementById("textSize");
const colorInput = document.getElementById("textColor");
const header = document.getElementById("result");
const button = document.getElementsByTagName("button")[0];

const changeElementColor = (element, color) => {
    element.style.color = color ? color : "black";
}

const changeElementTextSize = (element, size) => {
    element.style.fontSize = size ? `${size}px` : "24px";
}

button.addEventListener("click", () => {
    changeElementColor(header, colorInput.value);
    changeElementTextSize(header, sizeInput.value);
});