
// Storing functions as a variable
let sayHello = function (name) { console.log(`Hello ${name}`) };
let hello = name => console.log(`Hello ${name}`);

hello("Ivo");
sayHello("Martin");


//Storing functions in an array and using them 
let numberStatsFunctions = [
    (num) => num > 0 ? "Positive" : "Negative",
    (num) => num % 2 === 0 ? "Even" : "Odd",
    (num) => num >= 0 ? num.toString().length : num.toString().length - 1
]

console.log(numberStatsFunctions[0](5));
console.log(numberStatsFunctions[1](16));
console.log(numberStatsFunctions[2](22));

//Using function as an argument
function calculator(calculateFunc, num1, num2) {
    return calculateFunc(num1, num2);
}

let sum = (number1, number2) => number1 + number2;
let difference = (number1, number2) => number2 - number1;

console.log(calculator(sum, 10, 28));
console.log(calculator(difference, 50, 125));

//Returning a function from another function
function calculate(operation) {
    switch (operation) {
        case "+":
            return (num1, num2) => num1 + num2;
            break;
        case "*":
            return (num1, num2) => num1 * num2;
            break;
        default:
            console.log("ERROR!");
            break;
    }
}

let multiply = calculate("*");
let sum = calculate("+");

console.log(multiply(10, 4));
console.log(sum(2, 8));
console.log(calculate("*")(22,34));


//A function with properties and methods

function sayMyName(name) {
    console.log(`My name is ${name}`);
}

sayMyName.defaultName = "Martin";
sayMyName.getAge = birthYear => {
    return new Date().getFullYear() - birthYear;
}

console.log(sayMyName.defaultName);

sayMyName("Ivo");

sayMyName(sayMyName.defaultName);

console.log(sayMyName.getAge(1993));




let displayFullName = function () {
    console.log(arguments);
    console.log(arguments[0])
    console.log(arguments.length);

    console.log(`${arguments[0]} ${arguments[1]}`);
}

let calculateNums = function () {
    console.log(arguments);
}


displayFullName("Dejan", "Jovanov");
calculateNums(1, 2, 3);



let students = [
    { firstName: "Martin", lastName: "Panovski", grade: 7, age: 15 },
    { firstName: "Ivo", lastName: "Kostovski", grade: 10, age: 30 },
    { firstName: "Dejan", lastName: "Jovanov", grade: 1, age: 28 },
]



//Higher order functions

forEach()
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].firstName} ${students[i].lastName}`);
}


let studentsFullName = student => console.log(`${student.firstName} ${student.lastName}`)

students.forEach(studentsFullName);
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`) );

students.forEach(student => console.log(student.grade));


//filter

let above18 = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 18) {
        above18.push(students[i]);
    }
}
console.log(above18);


function above18check(student) {
    return student.age >= 18;
}

let adults = students.filter(above18check);
console.log(adults);

let passedStudents = students.filter(student => student.grade > 1);
console.log(passedStudents);


students
    .filter(student => student.grade > 1 && student.age >= 18)
    .forEach(studentsFullName);

//map 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

//add plus one to every element from the array numbers
function addOne(numbers) {
    let numbersPlusOne = [];

    for (const num of numbers) {
        numbersPlusOne.push(num + 1);
    }
    return numbersPlusOne;
}

console.log(addOne(numbers));


console.log(numbers.map(num => num + 1));

console.log(students.map(student => student.firstName));
console.log(students.map(student => student.grade));

console.log(students
            .filter(student => student.grade > 8)
            .map(student => student));


console.log(students.reduce((sum, student) => sum + student.grade, 0));


let fruits = ["apple", "orange", "banana"];

console.log(fruits.reduce((aggregator, fruit) => aggregator + fruit, ""));



let students1 = [
    { firstName: "Martin", lastName: "Panovski", grades: [7, 8, 9], age: 26 },
    { firstName: "Ivo", lastName: "Kostovski", grades: [6, 8, 9], age: 30 },
    { firstName: "Dejan", lastName: "Jovanov", grades: [8, 8, 10], age: 28 },
]


console.log(students1
            .filter(x => x.age > 27)
            .map(x => x.grades.reduce((avg, grade) => avg + grade), 0)
            .map(x => x / 3));


let unsorted = [10, 15, 9, 2, 4, 8, 5];


// Without higher order function
function sortFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(unsorted);

console.log(sortFunc(unsorted));


console.log(unsorted.sort((a, b) => a - b)); //ascending


console.log(unsorted.sort((a, b) => b - a)); // descending


let sortByNameAsc = (student1, student2) => (student1.firstName).localeCompare(student2.firstName);
let sortByNameDesc = (student1, student2) => (student2.firstName).localeCompare(student1.firstName);

console.log(students1.sort(sortByNameAsc));
console.log(students1.sort(sortByNameDesc));    



//Primitive types
let a = 10;

let b = a;

a += 3
console.log(a);
b += 10;
console.log(b);

//Reference types
let newUnsorted = [];

newUnsorted = unsorted;

console.log(unsorted.map(x => x + 1));

console.log(unsorted);
console.log(newUnsorted);



//Pure functions

let one = 1;
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + one)
    }
    return result;
}

function changeSomething(){
    return one += 2;
}

console.log(changeSomething());

console.log(increaseByOne(unsorted));




