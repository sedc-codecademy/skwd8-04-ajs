//normal if else statement
function isPositive(number) {
    if (number > 0) {
        return "number is positive."
    } else {
        return "number is negative."
    }
}
// ternary expresion
let isPositiveArrow = number => number > 0 ? "number is positive." : "number is negative.";

//storing functions as a variable 
let sayHello = function(name) {
    console.log(`Hello there ${name}`)
}

//storing functions in an array
let numberStateFUnctions = [
    number => number > 0 ? "number is positive." : "number is negative.",
    number => number % 2 === 0 ? "number is even" : "number is odd",
    number => number >= 0 ? number.toString().length : number.toString().length - 1
]

console.log(numberStateFUnctions[0](52))
console.log(numberStateFUnctions[1](52))
console.log(numberStateFUnctions[2](52))

//using fucntion as an argument
function calculator(calculateFunc, number1, number2) {
    return calculateFunc(number1, number2)
}

function sum(input1, input2) {
    return input1 + input2;
}

function difference(input1, input2) {
    return input1 - input2;
}

let result = calculator(difference, 120, 50);
console.log(result);

    //with self invoked function
let result2 = calculator(function(number1, number2) {
    return number1 * number2;
}, 2, 10)

    //with self invoked function and arrow function
let result2Arrow = calculator((number1, number2) => number1 * number2, 2, 10);

console.log(result2);
console.log(result2Arrow);

//function with properties and methods
function sayHello2(name) {
    return `Hello there ${name}`
}

//Adding properties to a function
sayHello2.defaultName = "Bob";
console.log(sayHello2(sayHello2.defaultName))

//Adding methods to a function
sayHello2.differentGreeting = function(name) {
    return `Hi ${name}`;
}

console.log(sayHello2.differentGreeting(sayHello2.defaultName))

//function arguments
function longestString() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[2]);
}

longestString("str1","str2","str3", "str4");
