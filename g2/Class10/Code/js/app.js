// *** Constructor Notation Templates ***

// function Dog(name, color, age, favoriteFood) {
//     this.name = name === undefined ? "unnamed" : name; // in case there is no name
//     this.color = color;
//     this.age = age;
//     this.hasOwner = false; // default value for all
//     this.favoriteFood = favoriteFood;
//     this.bark = function() {
//         console.log("BARK BARK BARK");
//     };
//     this.eat = function(food) {
//         dog.favoriteFood.forEach(fav =>
//             fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
//         console.log("NOM NOM NOM");
//     }
// }

// let sparky = new Dog("Sparky", "Brown", 1, ["Chicken", "Cucumber"]);
// let doggy = new Dog();

// *** this keyword ***

// function thisTemplate(description) {
//     // console.log(this);
//     this.description = description;
//     this.whatsThis = this;
//     this.whatsThisFunc = function() {
//         console.log(this);
//     };
// }

// thisTemplate();
// let whatsThisTemplate = new thisTemplate("we are testing this");
// console.log(whatsThisTemplate.whatsThis);
// whatsThisTemplate.whatsThisFunc();

// // this sent from the HTML
// function show(sender) {
//     console.log(sender);
// }




// *** Destructuring ***

// let dog = {
//     dogName: "Bucky",
//     dogColor: "Black",
//     dogAge: 4
// }

// // let dogName = dog.dogName;
// // let dogColor = dog.dogColor;
// // let dogAge = dog.dogAge;

// const { dogName, dogAge, dogColor } = dog;
// console.log(dogName);
// console.log(dogColor);
// console.log(dogAge);
// // console.log({ dogName, dogColor, dogAge });


// const student = {
//     name: 'John Doe',
//     age: 19,
//     scores: {
//         JavaScript: {
//             isActive: false,
//             points: 94
//         },
//         AdvancedJS: 73,
//         CSharp: 65
//     }
// };

// const { scores: { JavaScript: { points }, AdvancedJS, CSharp } } = student;
// // console.log(JavaScript); // does not exist (because it is destructured)
// console.log(points);
// console.log(AdvancedJS);
// console.log(CSharp);

// *** Array destructuring ***

// const colors = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];

// const [hex, [red, green, blue]] = colors;

// console.log({ hex, red, green, blue });

// console.log(green);

// colors[1][1] = 15;
// // after destructuring we don't have a reference anymore so we don't see
// // the changed value on the destructured variable
// console.log(green);



// *** Spread Operator ***

// const numbers = [2, 3, 5];

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(...numbers);
// console.log(sumThree(...numbers));

// const newArray = [
//     [1, 3, 5]
// ];
// console.log(...newArray); // we are getting just one array
// const [oneDimensionArr] = newArray;
// console.log(...oneDimensionArr);

// *** Extra ***
// const newStudent = {
//     ...student
// }

// console.log(student);
// console.log(newStudent);



// const dog = {
//     isHappy: true,
//     bark: function() {
//         console.log("BARK BARK BARK!");
//     }
// }

// const barnie = Object.create(dog);


// const addressInfo = {
//     street: "Dogge Street",
//     streetNumber: 24,
//     contactPerson: "071234567"
// }
// const addressInfo2 = {
//     street: "New Street",
//     contactPerson: "+38971234567",
//     neighborhood: "maalski"
// }

// let barnieChip = Object.assign(addressInfo, dog);

// console.log(barnieChip);

// const adressInfoUpdated = Object.assign(addressInfo, addressInfo2);
// console.log(adressInfoUpdated);

// console.log(Object.keys(adressInfoUpdated));
// console.log(Object.values(adressInfoUpdated));
// console.log(Object.entries(adressInfoUpdated));


// const newDog = {};
// const nameProperty = "dogName";
// newDog[nameProperty] = "Sharko";

// console.log(newDog);
// const academy = {};
// const subjects = ["javaScript", "html", "css", "C#"];

// for (const subject of subjects) {
//     academy[subject] = subject;
// }

// console.log(academy);