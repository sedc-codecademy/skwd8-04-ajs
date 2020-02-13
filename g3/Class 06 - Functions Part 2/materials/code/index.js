// Looking back at Functions Part 1
// Multi-level object
let myObj = {
  level11: {
    level21: {
      level3: {
        leveln: {}
      }
    },
    level22: {}
  },
  level12: {},
  level13: {}
}

// A recursive function that prints only the first item(property) of each level
function printOnlyFirstofLevels(obj) {
  let keys = Object.keys(obj);
  if (keys.length === 0) {
    console.log("Ne treba nisto da pravime");
  }
  else {
    console.log(obj);
    printOnlyFirstofLevels(obj[keys[0]]);
  }
}

// A recursive function that prints every item(property) of each level
function printAllofLevels(obj) {
  let keys = Object.keys(obj);
  if (keys.length === 0) {
    console.log("Ne treba nisto da pravime");
  }
  else {
    for (const key of keys) {
      console.log(obj[key]);
      printAllofLevels(obj[key]);
    }
  }
}

// Example of comparation with var and let using local and block scope
function localScope() {
  var outer = 1;
  if(true) {
    var inner = 2;
    let inner2 = 2; // "inner2" is not used anywhere
  }

  console.log(outer);
  console.log(inner);
  console.log(inner2); // this "inner2" is different from the one in the if statement and does not exists in this scope
  console.log(window);
}
// End of looking back at Functions Part 1


let numbers = [1, 2, 3, 3, 3, 4, 8, 5, 6, 7]

// function doubleArray(numbers) {
//   let result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     let newVariable = element * 2;
//     result.push(newVariable);
//   }
//   return result;
// }

// function tripleArray(numbers) {
//   let result = [];
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     let newVariable = element * 3;
//     result.push(newVariable);
//   }
//   return result;
// }

function multiplyArray(numbers, multiplyer) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let newVariable = element * multiplyer;
    result.push(newVariable);
  }
  return result;
}

function addToArray(numbers, toAdd) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let newVariable = element + toAdd;
    result.push(newVariable);
  }
  return result;
}

function operateArray(numbers, operator) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let opratorResult = operator(element);
    result.push(opratorResult);
  }
  return result;
}

let operateArrGenerator = function(operator) {
  let resultFunc = function(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      let opratorResult = operator(element);
      result.push(opratorResult);
    }
    return result;
  }
  return resultFunc;
}

let doubleArray = operateArrGenerator(n => n * n)
let tripleArray = operateArrGenerator(n => n * n * n)
// doubleArray(numbers)
// operateArray(numbers, n => n * n * n)
// numbers.map(n => n * 4)



function getOdds(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 !== 0) {
      result.push(element);
    }
  }
  return result;
}

function getEvens(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0) {
      result.push(element);
    }
  }
  return result;
}

function underSix(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element < 6) {
      result.push(element);
    }
  }
  return result;
}

function getGoodOnes(numbers, predicate) {
  let result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(predicate(element)) {
      result.push(element);
    }
  }
  return result;
}
// let aboveFive = getGoodOnes(numbers, n => n > 5);
// let aboveFiveSame = numbers.filter(n => n > 5);

let sedc = [
  {
    name: "Andreja",
    lastName: "Bogojevska"
  },
  {
    name: "Buco",
    lastName: "Bucovski"
  },
  {
    name: "Manekita",
    lastName: "Sunny Linda"
  }
];
// let mStudents = sedc.filter(s => s.name[0] === "M").map(s => `${s.name} ${s.lastName}`);



function sortAsc(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers.length; j++) {
      const currentNum = numbers[j]
      const nextNumber = numbers[j + 1]
      if (currentNum > nextNumber) {
        numbers[j] = nextNumber;
        numbers[j + 1] = currentNum;
      }
    }
  }
  return numbers;
}

function sortDesc(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers.length; j++) {
      const currentNum = numbers[j]
      const nextNumber = numbers[j + 1]
      if (currentNum < nextNumber) {
        numbers[j] = nextNumber;
        numbers[j + 1] = currentNum;
      }
    }
  }
  return numbers;
}

function sortAnyhow(numbers, predicate) {
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
// let ascArr = sortAnyhow(numbers, (curr, next) => curr - next);
// let descArr = numbers.sort((num1, num2) => num2 - num1);


// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%206%20-%20Functions%20Part%202/materials/students.json")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     // Working with "data"
//     console.log(data
//       .filter(s => s.gender === "Male")
//       .filter(s => s.firstName[0] === "B")
//       .filter(s => s.averageGrade > 2)
//     )
//   })
