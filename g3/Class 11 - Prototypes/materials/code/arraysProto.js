// MAP, FILTER, SORT from Functions Part 2 Class
// MAP
function map2(numbers, operator) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let opratorResult = operator(element);
    result.push(opratorResult);
  }
  return result;
}

// FILTER
function filter2(numbers, predicate) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(predicate(element)) {
      result.push(element);
    }
  }
  return result;
}

// SORT
function sort2(numbers, predicate) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers.length; j++) {
      const currentNum = numbers[j]
      const nextNumber = numbers[j + 1]
      if (predicate(currentNum, nextNumber) >= 1) {
        numbers[j] = nextNumber;
        numbers[j + 1] = currentNum;
      }
    }
  }
  return numbers;
}




let arr = []; // Creating a new empty array, this will set the prototype of Array in <arr> object where method like push(), pop() are defined, that's why we can use them
let arrConstr = new Array(); // Creating a new empty array, exactly the same as above

let obj = {};
let objConstr = new Object();

let numbers = [1, 2, 3, 4, 5, 6, 9, 7, 12, 11];
let numbers2 = [1, 2, 3, 4, 5, 6, 9, 7, 10, 11];

// // <map2> will be available only in numbers object
// numbers.map2 = function(operator) {
//   let result = [];
//   for (let index = 0; index < this.length; index++) {
//     const element = this[index];
//     let opratorResult = operator(element);
//     result.push(opratorResult);
//   }
//   return result;
// }

Array.prototype.map2 = function(operator) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    let opratorResult = operator(element);
    result.push(opratorResult);
  }
  return result;
}
Array.prototype.filter2 = function(predicate) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if(predicate(element)) {
      result.push(element);
    }
  }
  return result;
}
Array.prototype.sort2 = function(predicate) {
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
      const currentNum = this[j]
      const nextNumber = this[j + 1]
      if (predicate(currentNum, nextNumber) >= 1) {
        this[j] = nextNumber;
        this[j + 1] = currentNum;
      }
    }
  }
  return this;
}
