// Objects part 1

// What are objects?

// console.log('document');
// console.log(typeof document);

// console.log('document.getElementById');
// console.log(typeof document.getElementById);

// console.log('[]');
// console.log(typeof []);

// console.log('[]');
// console.log(typeof [].length);
// console.log(typeof [].push);

// console.log('console');
// console.log(console);
// console.log(console.log);

// console.log('window');
// console.log(window);

// console.log('hey');
// window.console.log('hey2');

// window: {
//     console: {
//         log = () => {

//         }
//     }
// }

// window.document...
// window.alert('dsad');

// Constructor Notation Templates

function Dog(name, color, age, favoriteFood) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.hasOwner = false;
    this.favoriteFood = favoriteFood;

    this.bark = function() {
        console.log('AV AV AV');
    };

    this.eat = function(food) {
        this.favoriteFood.forEach(ff =>
            ff.toLowerCase() === food.toLowerCase() ? console.log(`My favourite food is ${food}`) : ''
        );
    };
}

let archi = new Dog('Archi', 'white', 5, ['meat', 'fruit']);

// This

// This globaly
// console.log(this); // returns Window

// this in a function
// function whatIsThis() {
//   console.log(this);
// }
// whatIsThis();

// this in an object
// let thisObj = {
//   whatsThis: this
// };
// console.log(thisObj.whatsThis);

// this in an object method with regular function
// let thisObj = {
//   whatsThis: this,
//   whatsThisMethod: function() {
//     console.log(this);
//   }
// };

// console.log(thisObj.whatsThis);
// thisObj.whatsThisMethod();

// this in an object method with arrow function
// let thisObj = {
//   whatsThis: this,
//   whatsThisMethod: () => {
//     console.log(this);
//   }
// };

// console.log(thisObj.whatsThis);
// thisObj.whatsThisMethod();

// Destructuring objects
// let dog = {
//   dogName: 'Murdzo',
//   dogColor: 'White',
//   dogAge: 4
// };

// console.log(dog.dogName);
// console.log(dog.dogColor);
// console.log(dog.dogAge);
// console.log('---------');

// const { dogName, dogColor, dogAge } = dog;
// console.log(dogName);
// console.log(dogColor);
// console.log(dogAge);

// const student = {
//   name: 'John Doe',
//   age: 19,
//   scores: {
//     JavaScript: 74,
//     AdvancedJS: 63,
//     CSharp: null
//   }
// };

// function displaySummary(student) {
//   console.log('Hello ' + student.name);
//   console.log('Your JavaScript score is ' + (student.scores.JavaScript || 0));
//   console.log('Your AdvancedJS score is ' + (student.scores.AdvancedJS || 0));
//   console.log('Your CSharp score is ' + (student.scores.CSharp || 0));
// }
// displaySummary(student);

function displaySummary({ name, scores: { JavaScript = 0, AdvancedJS = 0, CSharp = 0 } }) {
    console.log('Hello ' + name);
    console.log('Your JavaScript score is ' + JavaScript);
    console.log('Your AdvancedJS score is ' + AdvancedJS);
    console.log('Your CSharp score is ' + CSharp);
}
// displaySummary(student);

// Destructuring arrays

// const rgb = [255, 200, 0];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue} `);

// nested array

const colors = ['#FFFFFF', [255, 0, 255], 'rgb(255, 0, 190)'];

const [hex, [red, green, blue]] = colors;

// console.log(hex, red, green, blue);

// Spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

arr2.sort((a, b) => b - a);
// console.log(arr1);
// console.log(arr2);

let arr3 = [];
arr1.forEach(e => arr3.push(e));
arr3.sort((a, b) => a - b);
// console.log(arr3);

let arr4 = [...arr3];
arr4.sort((a, b) => b - a);
// console.log(arr3);
// console.log(arr4);

// let arr5 = [...arr3, 4];
// console.log(arr5);

// let arr6 = [0, ...arr3];

// [...asradasd, ...dsadasdas, ...djgsajdfas]
// console.log(arr6);

let numbers = [2, 3, 5];

numbers = [1, ...numbers, 6];
// console.log(numbers);

function sumNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

const student = {
    name: 'John Doe',
    age: 19
};

let student2 = {...student };
let student3 = student;

student2.grade = 2;
student3.grade = 3;

// console.log(student);
// console.log(student2);
// console.log(student3);

let student4 = {
    ...student,
    grade: 5
};

// console.log(student4);

// console.log(sumNumbers(1, 2, 3));
// console.log(sumNumbers(...numbers));

// Object methods

let dog = {
    isHappy: true,
    bark: function() {
        console.log('AV AV AV');
    }
};

// let barnie = {...dog}
let barnie = Object.create(dog);
barnie.name = 'Barnie';
// console.log(dog);
// console.log(barnie);

let addressInfo = {
    street: 'Partizanska',
    streetNumber: 12,
    contactPerson: 38970223305
};

// let barnieChip = Object.assign(barnie, addressInfo);
let barnieChip = {...barnie, ...addressInfo };
// console.log(barnieChip);

let barnieKeys = Object.keys(barnieChip);
console.log(barnieKeys);

let barnieValues = Object.values(barnieChip);
console.log(barnieValues);

let barnieEntries = Object.entries(barnieChip);
console.log(barnieEntries);

//dynamic creation of properties and methods
let newDog = {};
let nameProperty = "dogName";
barnie[nameProperty] = "Murdzo";
console.log(barnie);

//Manipulating the reading and writing accessibility of entities
//freeze
//Object.freeze(barnie);
//barnie.friend = "Alek";
//console.log(barnie);
barnie.dogName = "Dejan";
//console.log(barnie);

//seal
Object.seal(barnie);
barnie.dogName = "Sharko";
console.log(barnie);
barnie.friend = "Alek";

//check if sealed/frozen
console.log(Object.isSealed(barnie));
console.log(Object.isFrozen(barnie));