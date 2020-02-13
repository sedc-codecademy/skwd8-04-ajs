// function Vehicle(id, name, batchNo, price, yearProduced) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.yearProduced = yearProduced;
//     this.company = 'move.inc';
//     this.printVehicle = function() {
//         console.log(`${this.id}. ${this.name} BATCH: ${this.batchNo}, ${this.price}$ Year produced: ${this.yearProduced}`);
//     }
// }

// let wheeledVehicle = Object.create(new Vehicle(1, "Yugo", "asdf", 500, 1963));
// wheeledVehicle.drive = function() { console.log('VROOOM'); }
//     //console.log(wheeledVehicle);
// wheeledVehicle.printVehicle();
// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;
// car.color = 'black';
// car.drive();
// car.printVehicle();
// console.log(car);

// function WheeledVehicle(wheels, name) {
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function() {
//         console.log(`Driving on ${this.wheels} wheels!`);
//     }
// }

// WheeledVehicle.prototype = Object.create(new Vehicle(3, 'Yugo'));
// let car = new WheeledVehicle(4, 'Peugeot');
// car.price = 500;
// car.id = 2;
// car.batchNo = '24a';
//console.log(car);

//Adding methods on to the prototype
// WheeledVehicle.prototype.stop = function() {
//     console.log(`The vehicle ${this.name} stopped.`);
// }
// car.stop();
// console.log(car);
// car.__proto__.stop();

//The prototype chain
function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "move.inc";
    this.printVehicle = function() {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}

function WheeledVehicle(id, batch, price, name, wheels) {
    //this.__proto__= Object.create(new Vehicle(id, name, batch, price));
    Object.setPrototypeOf(this, new Vehicle(id, name, batch, price))
    this.wheels = wheels;
    this.drive = function() {
        console.log(`Driving on ${this.wheels} wheels!`);
    }
}

function Car(id, batch, price, name, doors, fuelCapacity) {
    //this.__proto__= Object.create(new WheeledVehicle(id, batch, price, name, 4));
    Object.setPrototypeOf(this, new WheeledVehicle(id, batch, price, name, 4))
    this.name = name;
    this.doors = doors;
    this.fuelCapacity = fuelCapacity;
    this.drift = function() {
        console.log(`The ${this.name} is drifting!`);
    }
}

let aCar = new Car(2, 'b8', 1800, 'Peugeot', 5, 34);
aCar.printVehicle();
aCar.drive();
aCar.drift();

console.log(Object.getPrototypeOf(aCar));

console.log(aCar.constructor);