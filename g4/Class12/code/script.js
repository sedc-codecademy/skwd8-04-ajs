// -------------- Inheritance --------------
function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "G4 drive";

    this.printVehicle = function(){
        console.log(`${this.name} - ${this.batchNo} - ${this.price}`);
    }
}

const wheeledVehicle = new Vehicle(12, "Yugo", "25BC", 500);
wheeledVehicle.drive = function(){
    console.log("WROOM WROOM!!!");
}
console.log(wheeledVehicle);
// wheeledVehicle.drive();

const car = Object.create(wheeledVehicle);
car.drive();
console.log(car);
car.doors = 5;
console.log(car);

// -------------- PROTOTYPE --------------
// Every time we create an object, JavaScript sticks a new property to that object called _proto_. 
//This prototype property keeps all the information about the object that we inherited from.

let emptyObj = new Object();
console.log(emptyObj);

let notAnEmptyProject = {
    propOne: "one",
    propTwo: false
}

console.log(notAnEmptyProject);

function Vehicle1(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "G4 drive";

    this.printVehicle = function(){
        console.log(`${this.name} - ${this.batchNo} - ${this.price}`);
    }
}

function WheeledVehicle1(wheels, name) {
    this.wheels = wheels;
    this.name = name;

    this.drive = function() {
        console.log(`Driving on ${this.wheels} wheels`)
    }
}

WheeledVehicle1.prototype = Object.create(new Vehicle1())

let mycar = new WheeledVehicle1(4, "Audi a5");

mycar.batchNo = "34a"
mycar.price = 6000

console.log(mycar);
console.log(mycar.company);

mycar.printVehicle();

// //Adding methods on to the prototype

WheeledVehicle1.prototype.stop = function() {
    console.log(`The vehicle ${this.name} has stopped!`)
}

mycar.stop();
console.log(mycar)

//-------------- PROTOTYPE CHAIN --------------

function Vehicle2(id, name, batchNo, price){
	this.id = id;
	this.name = name;
	this.batchNo = batchNo;
	this.price = price;
	this.company = "move.inc";
	this.printVehicle = function(){
		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
	}
}

function WheeledVehicle2(id, name, batchNo, price, wheels) {
    Object.setPrototypeOf(this, new Vehicle2(id, name, batchNo, price))

    this.wheels = wheels;
    this.drive = function () {
        console.log(`Driving on ${this.wheels} wheels`)
    }
}

let wheeledCar = new WheeledVehicle2(5, "M3", "225", 500, 4);
console.log(wheeledCar);

function Car(id, name, batchNo, price, wheels, doors, fuelCapacity) {

    Object.setPrototypeOf(this, new WheeledVehicle2(id, name, batchNo, price, wheels))

    this.doors = doors;
    this.fuelCapacity = fuelCapacity

    this.drift = function() {
        console.log(`The ${this.name} is drifting!!!`);
    }
}

let myCar = new Car(2, "my car", "24f", 500, 3, 2, 45)
console.log(myCar);

myCar.printVehicle()
myCar.drive()
myCar.drift()

