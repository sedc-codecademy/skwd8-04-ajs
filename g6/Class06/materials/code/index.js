const numbers = [1, 2, 3, 6, 4, 5, 7];

// const doubleArray = function(numbers) {
//   const result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const value = element * 2; 
//     result.push(value);
//   }
//   return result;
// }

// const tripleArray = function(numbers) {
//   const result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const value = element * 3; 
//     result.push(value);
//   }
//   return result;
// }

// const multiplyArray = function(numbers, multiplier) {
//   const result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const value = element * multiplier; 
//     result.push(value);
//   }
//   return result;
// }

// const addToArray = function(numbers, add) {
//   const result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const value = element + add; 
//     result.push(value);
//   }
//   return result;
// }

// const square = function(numbers) {
//   const result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const value = element * element; 
//     result.push(value);
//   }
//   return result;
// }

// const operateArray = function(numbers, operation) {
//   const result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const value = operation(element); 
//     result.push(value);
//   }
//   return result; 
// }

const operateArrayGenerator = function (operation) {
  const resultFunc = function (numbers) {
    const result = [];
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      const value = operation(element);
      result.push(value);
    }
    return result;
  };

  return resultFunc;
}

const doubleArray = operateArrayGenerator(n => n * 2);
const tripleArray = operateArrayGenerator(n => n * 3);
const squareArray = operateArrayGenerator(n => n * n);

const multiplyArray = function (numbers, multiplier) {
  const operator = operateArrayGenerator(n => n * multiplier);
  return operator(numbers);
}

const addToArray = function (numbers, add) {
  const operator = operateArrayGenerator(n => n + add);
  return operator(numbers);
}

const sedc = [
  {
    name: "Boris",
    last: "Trajkovski",
    age: undefined,
    address: undefined,
    grades: [],
    feedback: undefined,
  },
  {
    name: "Vasil",
    last: "Sherimov"
  },
  {
    name: "Stefan",
    last: "Kocev"
  }
]


const getEvens = function (numbers) {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 === 0) {
      result.push(number);
    }
  }
  return result;
}

const getOdds = function (numbers) {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 !== 0) {
      result.push(number);
    }
  }
  return result;
}

const underFive = function (numbers) {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number < 5) {
      result.push(number);
    }
  }
  return result;
}

const getGoodOnes = function (numbers, predicate) {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (predicate(number)) {
      result.push(number);
    }
  }
  return result;
}
// getGoodOnes(numbers, n => n % 2 === 0);
// getGoodOnes(numbers, n => n % 2 !== 0);
// getGoodOnes(numbers, n => n < 5);
// numbers.filter(n => n % 2 === 0)

// getGoodOnes(sedc, s => s.name[0] === 'B')
// sedc.filter(s => s.name[0] !== 'B')

const sortAsc = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    // no need to use "i" anywhere
    for (let j = 0; j < numbers.length; j++) {
      const currentNum = numbers[j];
      const nextNum = numbers[j + 1];
      if (currentNum > nextNum) {
        numbers[j] = nextNum;
        numbers[j + 1] = currentNum;
      }
    }
  }
  return numbers;
}

const sortDesc = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const currentNum = numbers[j];
      const nextNum = numbers[j + 1];
      if (currentNum < nextNum) {
        numbers[j] = nextNum;
        numbers[j + 1] = currentNum;
      }
    }
  }
  return numbers;
}

const sortAnyhow = function (numbers, predicate) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const currentNum = numbers[j];
      const nextNum = numbers[j + 1];
      if (predicate(currentNum, nextNum) >= 1) {
        numbers[j] = nextNum;
        numbers[j + 1] = currentNum;
      }
    }
  }
  return numbers;
}
// sortAnyhow(numbers, (num1, num2) => num1 - num2) // Ascending
// numbers.sort((num1, num2) => num2 - num1) // Descending

function funcWithoutParams() {
  // for(let i = 0; i < arguments.length; i++) {
  //   console.log(arguments[i])
  // }
  for (const arg of arguments) {
    console.log(arg);
  }
  return arguments;
}
funcWithoutParams(3, 4, "chevrolet shelby ss", () => {})

const findMin = function (numbers) {
  let min = +Infinity;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element < min) {
      min = element;
    }
  }
  return min;
}

console.dir(findMin)
findMin.tosho = "Tosho"
console.dir(findMin)
findMin.tosho = "Dejan"
findMin.doSomething = function() {
  console.log(this)
  console.dir(this)
}

console.log(this)
console.log(window)

// Copyright Weko :P