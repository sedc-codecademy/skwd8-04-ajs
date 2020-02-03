// // ----- higher order function aditional parameters ------

// let array = [1, 2, 3, 4, 5, 6, 7];

// // map
// // second parameter in the map() function is INDEX
// array.map((element, index) => {
//   console.log(index);
// });

// console.log("--------------");

// // filter
// // second parameter in the filter() function is INDEX
// array.filter((element, index) => {
//   console.log(index);
// });

// //reduce

// array.reduce((accumulator, currentItem, index, array) => {
//   console.log("accumulator: ", accumulator);
//   console.log("current item: ", currentItem);
//   console.log("index: ", index);
//   console.log("array: ", array);
//   console.log("------------");
// });

// console.log("-------------------------");

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log("before callng the function: ", numbers);

//pure function
// function increaseByOne(array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + 1);
//   }

//   return result;
// }

// let number = 5;

// function increaseByOne(array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + number);
//   }

//   return result;
// }

// function increaseByOne() {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] += 1;
//   }
// }

// increaseByOne(numbers);
// console.log("after callng the function: ", numbers);

"use strict";

// number = 15;
// console.log(number);

// function sum(num, num) {
//   return num + num;
// }

// console.log(sum(5, 10));

let color = "red";

function changeColor() {
  color = "blue";
  let color2 = "purple";
  console.log(color2);
}
changeColor();

color2 = "orange";

console.log(color2);
