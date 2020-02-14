// The secrets of "this"
function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;

  console.log(this);
}

function calculateTwoPlusTwo() {
  console.log(2 + 2);
}

// new Animal("johnny", 9, "pekingese") // Check what the "this" is in console
// Animal("johnny", 9, "pekingese") // Check what the "this" is in console
//new calculateTwoPlusTwo() // We can also create an object from any function, but it doesn't have a point

let cat = {
  thisCat: this, // globalThis
  getThisCat: function() {
    console.log(this); // cat
  },
  dog: {
    thisDog: this, // globalThis
    getThisDog: function() {
      console.log(this); // dog
    },
    getThisDogWithArrowFunc: () => {
      console.log(this); // globalThis
      const bird = {
        fly: function() {
          console.log(this); // bird
          let thisBird = this; // bird
          const fish = {
            swim: function() {
              console.log(this); // fish
              console.log(thisBird); // accessing bird in fish object
            },
            swimWithArrowFunc: () => {
              console.log(this); // bird
            }
          }
          return fish;
        }
      }
      return bird;
    }
  }
}



// Object destructuring
let trainer = {
  name: "Dejan",
  // age: 23,
  assisent: {
    name: "Vukashin",
    hair: "black",
    eyes: "blue",
    assisent: {
      name: "Don Jon",
      hair: "blue",
      eyes: "yellow"
    }
  }
}

const { name, age = 32, assisent: { hair, assisent: { eyes } } } = trainer;
// console.log(name);
// console.log(age);
// console.log(hair);
// console.log(eyes);

function printTrainerInfo({ name, age = 32, assisent: { hair, assisent: { eyes } } }) {
  console.log(`${name} ${age} ${hair} ${eyes}`);
}
// printTrainerInfo(trainer);



// Array destructuring
let rgb = [123, 255, 12];
const [red, green, blue] = rgb;

let junk = [43, "dejan", 332, [1, 2, 3], function() {}];
const [num, , num2, [arrNum1, ,arrNum3]] = junk;
const [, , , numArr, emptyFunc] = junk;



// Spread operator with arrays
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9];

function copyArray(arr) {
  let newArr = []
  for (let index = 0; index < arr.length; index++) {
    const number = arr[index];
    if (index !== 1)
      newArr.push(number);
  }
  return numArr
}

function mergeArrays(arr1, arr2, arr3, arr4) {
  let newArr = []

  for (let index = 0; index < arr1.length; index++) {
    const number = arr[index];
    if (index !== 1)
      newArr.push(number);
  }
  for (let index = 0; index < arr2.length; index++) {
    const number = arr[index];
    if (index !== 1)
      newArr.push(number);
  }
  // for (let index = 0; index < arr3.length; index++) {
  //   const number = arr[index];
  //   if (index !== 1)
  //     newArr.push(number)
  // }
  // for (let index = 0; index < arr4.length; index++) {
  //   const number = arr[index];
  //   if (index !== 1)
  //     newArr.push(number)
  // }
    
    return numArr;
}

// let newNumbers1 = copyArray(numbers1);
// let newNumbers1WithSpread = [...numbers1]; // no need to use any functions
// let mergedNumbersArrays = mergeArrays(numbers1, numbers2);
// let mergedNumbersArraysWithSpread = [...numbers1, ...numbers2]; // no need to use any functions



// Spread operator with objects
function Cat(name, hairColor, meow) {
  this.name = name;
  this.hairColor = hairColor;
  this.meow = meow
}

let blackCat = new Cat("blacky", "black", function() { console.log("MEOW!")});

let dog = {
  name: "simple dog",
  wouf: function() {
    console.log("WOUF!")
  }
}

// let copyOfBlackCat = new Cat(blackCat.name, blackCat.hairColor, blackCat.meow) // No good for if we have 500 properties/methods in "blackCat" or dynamicly added
// let copyOfBlackCatWithObject = Object.create(blackCat);
// let copyOfBlackCatWithSpread = {...blackCat} // no need to use any functions/constructors

// let melez = Object.assign({}, blackCat, dog); // The first parameter is a new empty object, every other object that we pass after the first parameter like "blackCat" and "dog" is merged into the object that we pass as a first parameter, .create() aslo returns a reference to the merged object.
// let melezWithSpread = {...blackCat, ...dog}

// Object.freeze(melez) // Cannot change the structure nor the values of the properties/methods
// Object.seal(melez) // Cannot change the strcture, but can change the values of the already defined properties/methods