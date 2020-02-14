// // Object.

// const test = new Object();
// const test2 = {}; // this is the same thing

// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "Move.inc";
//     this.printVehicle = function() {
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
//     }
// }

// const wheeledVehicle = Object.create(new Vehicle('1', 'Yugo', '258', 500));

// wheeledVehicle.name = "Citroen";
// const wheeledVehicle2 = new Vehicle('2', 'Yugo Scala', '358', 700);
// console.log(wheeledVehicle);
// console.log(wheeledVehicle2);

// wheeledVehicle.printVehicle();
// wheeledVehicle2.printVehicle();

// const bikeSchema = {id: 1, name: "Scott"}
// const bike = new Object();
// const bike2 = Object.create(bikeSchema);

// bikeSchema.serialNo = 12321312312;

// const aCar = Object.create(wheeledVehicle);
// console.log(aCar);

// Accessing and modifying prototype

// Array.prototype.customMap = function(callback) {
//     const newArr = [];
//     for (const element of this) {
//         const modifiedElement = callback(element);
//         newArr.push(modifiedElement);
//     }
//     return newArr;
// }

// Array.prototype.customFilter = function(callback) {
//     const filteredArr = [];
//     for (const element of this) {
//         if (callback(element)) {
//             filteredArr.push(element);
//         }
//     }
//     return filteredArr;
// }

// const evenNums = [2, 4, 6, 8];


// const result = evenNums.map(x => x + 1);
// console.log(result);

// const result2 = evenNums.customMap(x => x + 1);
// console.log(result2);

// const filterResult1 = evenNums.filter(num => num > 5);
// console.log(filterResult1);
// const filterResult2 = evenNums.customFilter(num => num > 5);
// console.log(filterResult2);

// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "Move.inc";
//     this.printVehicle = function() {
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
//     }
// }

// function WheeledVehicle(numberOfWheels, id, name, batchNo, price) {
//     Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
//     this.numberOfWheels = numberOfWheels;
//     this.drive = function() {
//         console.log(`Driving on ${this.numberOfWheels} wheels`);
//     }
// }

// // const ford = new WheeledVehicle('4', 3, "Ford", 32312321, 3000);
// // console.log(ford);

// function Car(numberOfWheels, id, name, batchNo, price, tankSize, doors, model) {
//     Object.setPrototypeOf(this, new WheeledVehicle(numberOfWheels, id, name, batchNo, price));
//     this.tankSize = tankSize;
//     this.doors = doors;
//     this.model = model;
//     this.drift = function() {
//         console.log(`${this.name} drifts`);
//     }
// }

// const opel = new Car(4, 5, "Opel", 54312543, 25000, 40, 5, "insignia");
// // console.log(opel);
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(opel)));


function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

function Student(academyName, id, first, last, age) {
    Object.setPrototypeOf(this, new Person(first, last, age));
    this.academyName = academyName;
    this.studentId = id;
    this.study = function() {
        console.log(`The student ${this.firstName} is studying in ${this.academyName} academy!`);
    }
}

let student1 = new Student("Code", 2, "Pepi", "Perovski", 29);
let student2 = new Student("Design", 4, "Viksa", "Viktorovski", 21);
// console.log(student1);
// console.log(student2);
// student1.getFullName();
// student1.study();

Person.prototype.checkForAcademy = function(student) {
    console.log(student.academyName);
}

function CodeStudent(id, first, last, age) {
    Object.setPrototypeOf(this, new Student("Code", id, first, last, age))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function(type) {
        if (type === "individual") this.hasIndividualProject = true;
        if (type === "group") this.hasGroupProject = true;
    }
}

function DesignStudent(first, sOfMonth, id, last, age) {
    Object.setPrototypeOf(this, new Student("Design", id, first, last, age));
    this.isStudentOfTheMonth = sOfMonth;
    this.attendAdobeExam = function() {
        console.log(`This student ${this.firstName} is taking an adobe exam!`);
    }
}

function NetworkStudent(first, id, last, age, part) {
    Object.setPrototypeOf(this, new Student("Network", id, first, last, age));
    this.academyPart = part;
    this.attendCiscoExam = function() {
        console.log(`This student ${this.firstName} is taking an cisco exam!`);
    }
}



let student3 = new CodeStudent(25, "Mile", "Panika", 28);
let student4 = new DesignStudent("Bobi", true, 9, "Basmiegajle", 19);
let student5 = new NetworkStudent("Trpe", 23, "Trpkovski", 32, 2);

console.log(student3);
console.log(student4);
console.log(student5);

student3.checkForAcademy(student4);