console.log("We are live!");

// Functions as first class citizen
// Normal declaration
function sayHi(){ // Declaration
    console.log("Hey Bob"); // Code
}
sayHi(); // calling, executing or invoking a function

// Put functions in variables
let sayHiInVariable = function(){
    console.log("Hey Bob from a variable"); 
}
sayHiInVariable(); // We call the variable as if it was a function it self ( becase it is )

// Function as parameter
function calculator(func, num1, num2){ // We require function as well as 2 numbers
    console.log("Calculating...");
    // logic
    // validate num1 and num2
    return func(num1, num2); // We use func parameter as if it was a function
}

let result1 = calculator((x, y) => x + y, 3, 5); // Sum with calculator => 8
console.log(result1);
let result2 = calculator((x, y) => x - y, 5, 3); // Subtract with calculator => 2
console.log(result2);

// Function as result
function calculationGenerator(operation){
    console.log("Generating...")
    switch(operation){
        case "+":
            return function(num1, num2){ return num1 + num2; } // this is a formula
        case "-":
            return function(num1,num2){ return num1 - num2; } // this is a formula
        case "string":
            return function(name){return `Hello ${name}!`}; // this is a formula
        default: 
            console.log("No operation like that!");
            return null;
    }
}

let sum = calculationGenerator("+");
let result3 = sum(2,3);
console.log(result3 + " from return!");

// using function as an object
function sayBye(name){
    console.log(`Bye ${name}!`);
}
sayBye("Bob");
sayBye.names = ["Jill", "Greg", "Tim", "John"];
sayBye.description = "A function that is created for saying bye to people as long as you give a name!";
sayBye("Bob");
console.log(sayBye.names[0]);
console.log(sayBye);
sayBye(sayBye.names[0]); // Say bye jill
console.log(sayBye.description);

// putting functions in an array
let functions = [
    sayHi,
    sayBye,
    (name) => console.log(`This is ${name}! They are pretty cool!`)
]

functions[0]("Bob");
functions[1]("Bob");
functions[2]("Bob");

// Arguments
// arguments is available in functions and it has all the parameters that are sent to the function at the time of calling it
function sayNames(){
    if(arguments.length === 0) console.log("There are no arguments!");
    for (let argument of arguments) {
        console.log(argument);
    }
}

sayNames("jill", "Bob", "greg");
sayNames("Bob");
sayNames();
sayNames("jill", "Bob", "greg","jill", "Bob", "greg","jill", "Bob", "greg","jill", "Bob", "greg")

// Higher order functions
console.log("WE ARE STARTING WITH HIGHER ORDER FUNCTIONS ----------------------");
let students = [
    {firstName: "Bob", lastName: "Bobsky"},
    {firstName: "Greg", lastName: "Gregsky"},
    {firstName: "Jill", lastName: "Wayne"},
    {firstName: "Tony", lastName: "Balony"},
    {firstName: "Anne", lastName: "Wayne"}
];
// forEach
// forEach executes an anonymous function for every item in the array
// IT DOES NOT RETURN ANYTHING
// IT DOES NOT CHANGE THE INITIAL ARRAY
// Example with one line of code in the anonymous function
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
// Example with multiple lines of code in the anonymous function
students.forEach(student => {
    console.log("These are the students:")
    console.log(`${student.firstName} ${student.lastName}`)
});

let numbers = [2,3,4,5,5,5,3,2,1,1,1,2,3,4,23];
// filter
// Executes a function that either returns true or false on every element
// Every execution of the function of an element that returns true will be added in a new result array
// FILTER RETURNS ARRAY BACK WITH THE SAME TYPE OF ITEMS
// FILTER DOES NOT CHANGE THE INITIAL ARRAY
let filteredNumbers = numbers.filter(number => number > 3);
let filteredNumbers1 = numbers.filter(number => true); // useless filter ( We always get all numbers )
let filteredNumbers2 = numbers.filter(number => false); // problematic filter ( We never get any numbers )
console.log(filteredNumbers);
console.log(filteredNumbers1);
console.log(filteredNumbers2);

// map
// Map goes through all the items in the array and it changes the items and returns the changed item in to a new array ( It changes type of items from one array to the other )
// MAP RETURNS ARRAY BACK WITH DIFFERENT TYPES OF ITEMS
// MAP DOES NOT CHANGE THE INITIAL ARRAY
let pets = [
    {
        name: "Sparky",
        age: 3,
        favFood: "Cucumber",
        owner: {
            name: "Bob",
            age: 26
        }
    },
    {
        name: "Nelly",
        age: 2,
        favFood: "Steak",
        owner: {
            name: "Jill",
            age: 24
        }
    },
    {
        name: "Rex",
        age: 5,
        favFood: "Chicken",
        owner: {
            name: "Anne",
            age: 45
        }
    },
    {
        name: "Dobby",
        age: 1,
        favFood: "milk",
        owner: {
            name: "Bill",
            age: 33
        }
    }
];

// Function for owners above 30
let ownersOver30 = pets
.filter(pet => pet.owner.age > 30) // Will return PET objects
.map(pet => pet.owner); // Will return OWNER objects
console.log(ownersOver30);

// Reduce
// Compiles all items in one result
// Has 2 parameters
// 1 paramter - Anonymous function that has also 2 paramters
// anon 1 parameter ( result ) - Variable where all the values will be stored or combined
// anon 2 parameter ( number ) - Every item from the array will be stored here one by one
// 2 paramter - starting value of the anon function result parameter
// REDUCE DOES NOT CHANGE THE INITIAL ARRAY
// REDUCE ALWAYS RETURNS ONE RESULT
// Ex of result implementation: result = 0;
let reduceResult = numbers.reduce((result, number) => {
   return result = result + number
}, 0);
console.log("REDUCE RESULT: " + reduceResult);

// Combine all the first names of the students
let combinedNames = students
.map(student => student.firstName) // This will return array of first names ( strings )
.reduce((result, firstName) => {
    return result = result + " " + firstName;
}, "");
console.log("COMBINED NAMES:" + combinedNames);

// Sort
// SORT CHANGES THE ORIGINAL ARRAY
let newNumbers = numbers;
newNumbers.sort((num1, num2) => num1 - num2); // Ascending
console.log(numbers);
console.log(newNumbers);
newNumbers.sort((num1, num2) => num2 - num1); // Descending
console.log(numbers);
console.log(newNumbers);

// Change the -1 and 1 to sort by descending
students.sort((student1, student2) => {
    if (student1.firstName < student2.firstName) return -1;
    if (student1.firstName > student2.firstName) return 1;
    return 0;
})
console.log(students);