console.log("Hi");

// ------- Variables in functional scope cannot be reached from outside ---
let test = "I am in global scope";

function testScope() {
    let test = 'I am in local scope';
}
testScope();
 //console.log(test); // "I am in global scope"

 // ------- Change value of global variable inside a function ---------
 let test2 = "I am in global scope";

function testScope2() {
    test2 = 'I am in local scope';
}
testScope2();
console.log(test2);

// ------------------ VAR vs LET --------------
var x = 10;
if(true) {
    var x = 2;
}
// console.log(x);
// variables with VAR in block scope can be reached from outside/global scope

let y = 10;
if(true) {
    let y = 2;
    
}
console.log(y);
// variables with LET in block scope CANNOT be reached from outside/global scope

// ---------- LET vs CONST
let a = 5;
// code code code
a = 600;
console.log(a);
// with LET you can assign a new value


const b = 5;
// b = 600;
console.log(b);
// with CONST you cannot assign a new value

// ----- arrays and object are reference types and can change value with const
const array = [];
// code code 
array.push(1);
array.push(2);
console.log(array);