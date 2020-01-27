console.log("We are live!")

// Annonimous functions
let func = function() { console.log("Hello")};
func();
let array = [2, 4, 5, function(){ return 2 + 5 - 7 }];
console.log(array);
console.log(array[3]());

// Arrow functions
let someResult = num => num + 10;
console.log(someResult(25));
let sumFunc = (num1, num2) => num1 + num2;
console.log(sumFunc(25, 5));

let sumFunc1 = (num1, num2) => {
  let result = num1 + num2;
  console.log(`The result is: ${result}`)
  return result;
};
console.log(sumFunc1(22, 5));

let randomFunc = () => console.log("Hey guys!");
randomFunc();

// Self Invoked functions
let func = () => {
    let result = 5;
    console.log(result);
};

func();

let result = 5;
console.log(result);

result = 10;

(() => {
    let result = 5;
    console.log(result);
})();

(function(num1, num2) {
    console.log(num1 + num2);
})(2, 5);

let result = (function(num1, num2) {
    return num1 + num2;
})(7, 5);
console.log(result);

function sum(num1, num2){
  console.log(num1 + num2);
}

sum((function suma(num1, num2) {
  return num1 + num2;
})(7, 5), 5)

// Scope
// var y = 5;
// var y = 6;
// console.log(y);
let x = 5;
x = 6;
console.log(x);

let ten =  10; // Global scope
function sumPlusOne(num1, num2){
	let one =  1; // Function sumPlusOne scope
    console.log(num1 + num2 + one);
	function add5(number){
        console.log(one);
        let insideFunction = 100;
		console.log(number +  5); // Function add5 scope
    };
    //console.log(insideFunction); // WILL NOT WORK
	add5(one);
	function add10(number){
		console.log(number +  ten); // Function add10 scope
	};
	add10(ten);
}
sumPlusOne(ten,7);

// Recursion
function sumTo(num) {
  if(num === 0) {
      return 0
  }
  return num + sumTo(num - 1)
}

// With an arrow function ( shorter )
let sumTo = num => num === 0 ? 0 : num + sumTo(--num);

sumTo(5)

// Step 1: num = 5 -> 5 + sumTo(4) // Step 11: -> 5 + 10
// Step 2: num = 4 -> 4 + sumTo(3) // Step 10: -> 4 + 6
// Step 3: num = 3 -> 3 + sumTo(2) // Step 9: -> 3 + 3
// Step 4: num = 2 -> 2 + sumTo(1) // Step 8: -> 2 + 1
// Step 5: num = 1 -> 1 + sumTo(0) // Step 7: -> 1 + 0
// Step 6: num = 0 -> 0 // Returns 0 