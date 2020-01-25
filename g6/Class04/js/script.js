//function declaration
//this function has 2 parameters
function sum(num1, num2) {
    return num1 + num2;
}

//invoke function
let firstNumber = 7;
let secondNumber = 3;
//firstNumber and secondNumber are arguments to sum function
let result = sum(firstNumber, secondNumber);
console.log(`sum of ${firstNumber} and ${secondNumber}: ${result}`);

let result1 = sum(firstNumber, secondNumber, 12, 15);
console.log("With more arguments than needed: " + result1);

let result2 = sum(firstNumber);
console.log("With less arguments than needed: " + result2);

function sayHello() {
    console.log('hello');
}

let resultFromSayHello = sayHello();
//undefined

function sumWithStatmentsAfterReturn(num1, num2) {
    return num1 + num2;

    console.log('Statements after return');//this will never be executed
}

function sumWithValidation(num1, num2) {
    if (typeof(num1) !== "number" || typeof(num2) !== "number")
        throw Error(`Passed arguments must be of type number!`);

    return num1 + num2;
}

console.log('sumWithValidation With valid arguments: ' + sumWithValidation(2, 3));
//console.log('sumWithValidation With invalid arguments: ' + sumWithValidation(2, false));
//after getting error script execution terminates

//sumAsFunctionExpression(2, 7);//this throws error

let sumAsFunctionExpression = function (num1, num2) {
    return num1 + num2;
};
console.log(`sumAsFunctionExpression: ${sumAsFunctionExpression(4, 3)}`);

//self invoked function (IIFE - Immediately Invoked Function Expressions)
let resultFromSelfInvokedFunction = (function (num1, num2){
                                                return num1 + num2;
                                            })(9, 10);
console.log("resultFromSelfInvokedFunction: " + resultFromSelfInvokedFunction);    

let num1 = 9;
let num2 = 10;
let resultFromGlobalNums = num1 + num2;
console.log("resultFromGlobalNums" + resultFromGlobalNums);

//arrow functions
let sumAsArrowFunction = (num1, num2) => num1 + num2;
console.log(`sumAsArrowFunction: ${sumAsArrowFunction(2, 7)}`);

let sumAsArrowFunctionWithManyStatements = (num1, num2) => {
    console.log(`Executing function sumAsArrowFunctionWithManyStatements with arguments: ${num1} and ${num2}`);
    return num1 + num2;
};
sumAsArrowFunctionWithManyStatements(8, 2);

//arrow function without parameters
//let sayHelloAsArrowFunction = () => console.log("Hello from arrow function");
let sayHelloAsArrowFunction = _ => console.log("Hello from arrow function");//same as above line
sayHelloAsArrowFunction();

//arrow function with one parameter
let sayHelloToSomeone = name => console.log(`Hello ${name}`);
//let sayHelloToSomeone = (name) => console.log(`Hello ${name}`);//same as above line but we do not need parenteses
sayHelloToSomeone('Pero Antic');

