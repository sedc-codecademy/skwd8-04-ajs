console.log("We are live!");
// Anonymous functions
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById('btn2');
// Here we give an anonymous function to the addEventListner function parameter
// Here we can't access the anon function elsewhere
btn1.addEventListener("click", function(){
  console.log("We are inside anonymous function!");
  console.log("This:")
  // this keyword shows the current object where the function was called
  // The current object is btn1 and addEventListener is a method for that object
  // That is why this keyword will point to btn1
  console.log(this);
})
// This approach is similar to the approach above in result
// Here we can access the function for the button anywhere in our script
function annonBtnFunc(){
  console.log("We are inside normal function!");
  console.log("This:")
  console.log(this);
}
btn1.addEventListener("click", annonBtnFunc);

// window - The object that represents the whole browser including javascript, history, information about OS, information about browser
// These two are the same. The first only leaves behind window in order for scripts to be more readable
annonBtnFunc();
window.annonBtnFunc(); // this will work and this keyword will be window instead of the button like it was in event listener

// Use anon in a variable
// Variable changes it's tipe depending on what we store in it
// If we store anon func it will become a function and act like a function
let myFunc = function(){
  console.log("We are inside variable function!");
  console.log("This:")
  console.log(this);
}

myFunc();

// Arrow function 
// Multiple parameters and return
let sum = function(num1, num2){
  return num1 + num2;
}
// We don't need to write return when we have only 1 statement
let sumArrow = (num1, num2) => num1 + num2;

// One parameter 
let sayHello = function(name){
  console.log(`Hello there ${name}!`);
}

let sayHelloArrow1 = (name) => console.log(`Hello there ${name}!`);
let sayHelloArrow2 = name => console.log(`Hello there ${name}!`);

// No parameters
let sayBye = function(){
  console.log("bye bye bye!");
}
// _ or () represents NO PARAMETERS
// => represents arrow function
// After the arrow we write our code as in normal functions
let sayByeArrow1 = _ => console.log("bye bye bye!");
let sayByeArrow2 = () => console.log("bye bye bye!");

// Multiple lines of code with return
let count = function(num){
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} `;   
  }
  return result;
}
// Arrow functions can omit return if there are no { } and only one statement, but we must write return for multiple lines of code inside { }
let countArrow = num => {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} `;   
  }
  return result;
}

// this keyword in arrow functions
// If we need to point to the object where the function was called DONT USE ARROW FUNCTIONS because they don't point to it
// For any other case where this keyword is not needed arrow functions are GREAT
btn2.addEventListener("click", () => {
  console.log("We are inside arrow function!");
  console.log("This:")
  // this keyword points to window object
  console.log(this);
})

// Normal object methods with arrow and normal anon function
let dog = {
  food: "carrots",
  normalEat: function(){
    console.log(`The dog is noming on ${this.food}`);
    console.log("This:");
    console.log(this);
  },
  arrowEat: () => {
    console.log(`The dog is noming on ${this.food}`);
    console.log("This:");
    console.log(this);
  }
}

dog.normalEat();
dog.arrowEat();

// Normal if statement
if(dog.food === "carrots") {
  console.log("Dog loves carrots");
} else {
  console.log("Dog is sad!");
}

// We can omit the brackets if there are ONLY 1 statement in the if and else
if(dog.food === "carrots") console.log("Dog loves carrots");
else console.log("Dog is sad!");

// One line if ( ternary operator )
// Code before ? is a statment which must be true or false
// ? -> its an if ( ternary operator )
// the first item after the ? is what code should be executed if the statement is true
// The second item after : is the code that should be executed if the statement is false
dog.food === "carrots" ? console.log("Dog loves carrots") : console.log("Dog is sad!");

// RECURSION
function sumTo(num){
  if(num === 0){
    return 0;
  }
  return num + sumTo(num -1);
}

console.log(`Recursive magic: ${sumTo(8)}`);

// SCOPE
// LET - Connected to block scope
// LET - Doesn't let us write duplicate names of variables
// VAR - Connected to function scope
// VAR - Can be redeclared with the same name
function sum5(num){
  if(num !== 0){
    let fiveLet = 5;
    var fiveVar = 5;
    // These are working since fiveLet is in it's own scope and fiveVar is in it's own scope as well
    console.log(num + fiveLet);
    console.log(num + fiveVar);
  }
  // console.log(`We added ${fiveLet}`); // This can't access fiveLet inside of the { } of the if
  console.log(`We added ${fiveVar}`); // This can be accessed because fiveVar is in the same FUNCTION
}
// We can't access var or let inside of function
// console.log(`Trying to get value from func: ${fiveLet}`);
// console.log(`Trying to get value from func: ${fiveVar}`);
sum5(7);

// IF we don't put let or var and we assign a value, the variable becomes declared automatically at the top with VAR
// Also this is a bad practice
bob = "Bob Bobsky";
console.log(bob);