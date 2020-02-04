//-----------higher order functions --------------

// HOF are functions that take another function as a parameter

let numbers = [1, 2, 3, 4, 5];
console.log("original array", numbers);

//
// ---------------- MAP -------------------
// .map is used to transform elements in array, it returns the SAME number of elements in a new array

console.log("============= MAP ===============");
// normal function that returns new array, each element is multiplied by 2
function multiplyByTwo(array) {
  let newArray = [];

  for (const number of array) {
    newArray.push(number * 2);
  }

  return newArray;
}
let multiplied = multiplyByTwo(numbers);
console.log("multiplied array with normal JS function", multiplied);

// .map with anonymous function
let multipliedMapAnonymous = numbers.map(function(number) {
  return number * 2;
});
console.log("multiplied with .map using anonymous", multipliedMapAnonymous);

// .map with arrow
// USE THIS!
let multipliedMapArrow = numbers.map(number => number * 2);
console.log("multiplied with .map using arrow", multipliedMapArrow);

//
// ---------------- FILTER -------------------
// .filter is used to filter elements in array, it returns ONLY the elements that passed the condition in a new array

console.log("============= FILTER ===============");

// normal function that returns new array with elements larger than 3
function largerThanThree(array) {
  let newArray = [];

  for (const number of array) {
    if (number > 3) {
      newArray.push(number);
    }
  }

  return newArray;
}

let filteredArray = largerThanThree(numbers);
console.log("filtered array with normal JS function", filteredArray);

// .filter with anonymous
let filteredArrayAnonymous = numbers.filter(function(number) {
  return number > 3;
});
console.log("filtered with .filter using anonymous", filteredArrayAnonymous);

// .filter with arrow
// USE THIS!
let filteredArrayArrow = numbers.filter(number => number > 3);
console.log("filtered with .filter using arrow", filteredArrayArrow);

//
// ---------------- REDUCE -------------------
// .reduce accepts a function with two parameters: the accumulator/sum and the current element of the array. It returns only ONE value

console.log("============= REDUCE ===============");

// normal function that sums elements in an array and returns THE RESULT
function sum(array) {
  let totalSum = 0;

  for (const number of array) {
    totalSum += number;
  }

  return totalSum;
}

let sumArray = sum(numbers);
console.log("sum of elements in an array with normal JS function", sumArray);

let sumReduce = numbers.reduce((total, number) => (total += number), 0);
// let sumReduce = numbers.reduce((total, number) => total += number);

console.log("sum of elements in an array with .reduce", sumReduce);

console.log("============= Holy trinity ===============");
let result = numbers
  .filter(number => number > 3)
  .map(number => number + 3)
  .reduce((sum, num) => sum + num);
console.log("result of holy trinity", result);

//
// ------------------------ FOREACH ----------------------------
// runs a code for every element without any result in return
console.log("============= FOR EACH ===============");
numbers.forEach(number => console.log(number + 3));
// numbers.forEach(x => console.log(x));

//
// ----------------- SORT -----------------------
// .sort actually sorts the array

let numbersDescending = numbers.sort((f, s) => s - f);
console.log("sorted array - DESCENDING", numbersDescending);

let numbersAscending = numbers.sort((f, s) => f - s);
console.log("sorted array - ASCENDING", numbersAscending);

//
// --------------- COPY OF AN ARRAY ------------------

console.log("============= COPY OF AN ARRAY ===============");

const newNumbers = numbers;
console.log("new numbers", newNumbers);
console.log("original numbers", numbers);

console.log("sorting!!!!!!!!");
newNumbers.sort((f, s) => s - f);
console.log("new numbers", newNumbers);
console.log("original numbers", numbers);
// we do NOT make a copy of the array numbers in newNumbers. We just pass a reference.
// bad way to copy an array

// bring back back to normal
console.log("back to normal");
newNumbers.sort((f, s) => f - s);
console.log("new numbers", newNumbers);
console.log("original numbers", numbers);

// real copy
console.log("making a real copy");
// introducing spread operator, takes all elements and packs them into an array
const newNumbersCopy = [...numbers];
console.log("real copy numbers", newNumbersCopy);
console.log("original numbers", numbers);
newNumbersCopy.sort((f, s) => s - f);
console.log("sorting copy");
console.log("real copy numbers", newNumbersCopy);
console.log("original numbers", numbers);
// good way to copy an array, we do not touch the original array
