// # Exercises
// ## Exercise 1

// Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has
// 2. Function that takes a number through a parameter and returns if its even or odd
// 3. Function that takes a number through a parameter and returns if its positive or negative

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. 
// #### Ex: 
// **Code:** logNumberStats(-25);
// **Console:** 2 Digits, Odd, Negative

function countDigits(number) {
    let result = number.toString().length;

    if (number < 0) {
        result = result - 1;
    }

    return result;
}

function isEven(number) {
    return number % 2 == 0;
}

function isPositive(number) {
    return number >= 0;
}

function logNumberStats(number) {
    let result = `${countDigits(number)} digits, `;
    result += `${isEven(number) ? "Even" : "Odd"}, `;
    result += `${isPositive(number) ? "Positive" : "Negative"}, `;
    console.log(result);
}

logNumberStats(123);
logNumberStats(-123);
logNumberStats(124);
logNumberStats(-124);
logNumberStats(0);
logNumberStats(12345);