// +++++++++++ Fun with functions +++++++++++

// // ------- functions as we know them --------
// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

// // functions with parameters
// function printFullName(firstName, lastName) {
//     let fullName = `${firstName} ${lastName}`;
//     console.log(fullName);
// }
// let name = "Trajan";
// let surname = "Stevkovski";

// // printFullName("Trajan", "Stevkovski");
// printFullName(name, surname);
// // firstName & lastName are PARAMETERS
// // "Trajan" & "Stevskovski" are ARGUMENTS

// // functions with parameters and return
// function getNameAndTitle(firstName, lastName) {
//     let nameTitle = `Dr.${firstName} ${lastName}`;
//     return nameTitle;
// }
// console.log(getNameAndTitle("Kristina", "Spasevska"));

// // we can store the result of the function in a variable
// let fullNameTitle = getNameAndTitle("Jon", "Snow");
// console.log(fullNameTitle);

// // functions inside if statement
// if (getNameAndTitle("Geralt", "of Rivia aka Witcher").length > 20) {
//     console.log("That is a very long name");
// } else {
//     console.log("The name is fine");
// }

// // calling a function (NOT DECLARING) inside another function's definition
// function getInfo(firstname, lastname, age, city) {
//     let fullInfo = `The person ${getNameAndTitle(firstname, lastname)} 
//     is ${age} years old 
//     and lives in ${city}`;
//     return fullInfo;
// }
// console.log(getInfo("Trajan", "Stevkovski", 32, "Skopje"));

// ------------- Anonymous function ------------------
// let func = function() {
//     console.log("Hello from anonymous function");
// }
// func();

// function func02() {
//     console.log("hi")
// }
// console.log(func);
// console.log(func());
// // document.addEventListener('click', func);
// // document.addEventListener('click', func02);
// // document.addEventListener('click', function() {
// //     console.log("HI");
// // })

// ---------------- Arrow functions --------------
// shorter syntax for anonymous functions
// let addTenAnonymous = function (number) {
//     return number + 10;
// }
// console.log(addTenAnonymous);
// console.log(addTenAnonymous(10));

// // one parameter - no brackets, when body is one line, goes in the same line
// let addTenArrow = num => num + 10;
// console.log(addTenArrow(10));

// let sumAnonumous = function (num1, num2) {
//     let result = num1 + num2;
//     console.log(`The result is ${result}`);
//     return result;
// }
// sumAnonumous(3, 10);

// // two parameters - brackets(), body is more than one line
// let sumArrow = (number1, number2) => {
//     let result = number1 + number2;
//     console.log(`The result is ${result}`);
//     return result;
// }
// sumArrow(5, 10);

// let randomFuncAnonyumous = function () {
//     console.log("Hi from anonymous!");
// }
// randomFuncAnonyumous();

// // no parameters - brackets(), one line code
// let randomArrow = () => console.log("Hi from arrow!");
// randomArrow();


// Self Invoked functions


function func1() {
    console.log("Hi");
}

// func1();


// (function func1() {
//     console.log("Hello");
// })();

// let counter = 0;
// function generateId() {
//     return counter++;
// }

// IIFE Capture logic so it wont be available for the outher world

// const getId = (function () {
//     let counter = 0;
//     return function () {
//         ++counter;
//         return counter;
//     }
// })();

// counter = 100;
// console.log(counter);
// console.log(getId);

// console.log(getId(), "firstTime");
// getId();
// getId();
// console.log(getId(), "fourthTime");


// let counter = 0;
// function generateId() {
//     return counter++;
// }

// console.log(generateId(), "firstTime");
// generateId()
// generateId();
// counter = 1000;
// console.log(generateId(), "fourthTime");

// const addTen = (function (number) {
//     return function (num) {
//         return number + num;
//     }
// })(10);



// IIFE Wrap program in self invoking function to create own scope that cannot be accessed from the outside world
(function () {
    const arrayOfNames = [];

    const getId = (function () {
        let counter = 0;
        return function () {
            ++counter;
            return counter;
        }
    })();

    document.getElementById("addName").addEventListener("click", function () {
        let element = document.getElementById("name");
        let name = element.value;
        let ul = document.getElementById("result");

        arrayOfNames.push(getNameObject(name));
        printNames(arrayOfNames, ul);
    })

    const createNameObject = function (name) {
        return { id: getId(), name: name };
    }

    const getNameObject = name => createNameObject(name);

    const printNames = function (namesArray, element) {
        element.innerHTML = '';
        let namesHtml = '';

        for (const name of namesArray) {
            namesHtml += `<li>Id: ${name.id}, Name: ${name.name}</li>`;
        }
        element.innerHTML = namesHtml;
    }
})();


// (function (global) {

// })(this);


// Creating swapi url generator

const swapiUrlGenerator = (function () {
    const baseUrl = "https://swapi.co/api/";

    const getAllPeople = () => `${baseUrl}people`;
    const getPeopleById = id => `${getAllPeople()}/${id}`;
    const getAllPlanets = () => `${baseUrl}planets`;
    const getPlanetById = id => `${getAllPlanets()}/${id}`;

    return {
        getAllPeople,
        getPeopleById,
        getAllPlanets,
        getPlanetById
    }
})();

// console.log(swapiUrlGenerator.getAllPeople());
// console.log(swapiUrlGenerator.getPeopleById(123123));
// console.log(swapiUrlGenerator.getAllPlanets());
// console.log(swapiUrlGenerator.getPlanetById(3));


// REcursion

function sumTo(num) {
    if (num === 0) {
        return 0;
    }
    return num + sumTo(num - 1);
}

function sumToFor(num) {
    let result = 0;
    for (let i = num; i >= 0; i--) {
        result += i;
    }
    return result;
}

// let result = sumTo(5);
// console.log(result);
// console.log(sumToFor(5));

// const fibonacci = n => {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // console.log(fibonacci(40));


// const memo = {
//     1: 1,
//     2: 1
// }

// const fibonacciMemo = n => {
//     let result;

//     if (memo[n]) {
//         result = memo[n];
//     } else {
//         result = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
//         memo[n] = result;
//     }

//     return result;
// }

// console.log(fibonacciMemo(200));

// console.log(memo);

// const fib = (function () {
//     const memo = {
//         1: 1,
//         2: 1
//     }

//     const fib = function (n) {
//         let result;

//         if (memo[n]) {
//             result = memo[n];
//         } else {
//             result = fib(n - 1) + fib(n - 2);
//             memo[n] = result;
//         }

//         return result;
//     }

//     return fib;
// })()

let source = {
    name: "root",
    weight: 10,
    children: [
        {
            name: "one",
            weight: 1,
            children: [
                {
                    name: "one-one",
                    weight: 11,
                    children: [
                        {
                            name: "one-one-one",
                            weight: 111,
                            children: [
                                {
                                    name: "one-one-one-one",
                                    weight: 111,
                                    children: [
                                        {
                                            name: "one-one-one-one-one",
                                            weight: 111,
                                            children: [
                                                {
                                                    name: "one-one-one-one-one-one",
                                                    weight: 111,
                                                    children: [
                                                        {
                                                            name: "one-one-one-one-one-one-one",
                                                            weight: 111,
                                                            children: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "one-one-one-two",
                                    weight: 111,
                                    children: []
                                }, {
                                    name: "one-one-one-three",
                                    weight: 111,
                                    children: []
                                },]
                        },
                        {
                            name: "one-one-two",
                            weight: 112,
                            children: []
                        },
                        {
                            name: "one-one-three",
                            weight: 113,
                            children: []
                        }
                    ]
                },
                {
                    name: "one-two",
                    weight: 12,
                    children: []
                }
            ]
        },
        {
            name: "two",
            weight: 2,
            children: [
                {
                    name: "two-one",
                    weight: 21,
                    children: []
                },
                {
                    name: "two-two",
                    weight: 22,
                    children: []
                }
            ]
        }
    ]
}


function getWeight(node) {
    console.log(node.name);
    let totalWeight = node.weight;
    for (const child of node.children) {
        totalWeight += getWeight(child);
    }
    return totalWeight;
}

console.log(getWeight(source));