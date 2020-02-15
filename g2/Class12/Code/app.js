//Constructor function - regular
function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;

    this.printVehicle = function() {
        console.log(`${this.id}. ${this.name} Batch: ${this.batchNo} Price: ${this.price}`);
    }
}

//Same as adding method in classes 
Vehicle.prototype.getInfo = function () {
    console.log(`${this.id}. ${this.name} Batch: ${this.batchNo} Price: ${this.price}`);
}

let vehicle = new Vehicle(1, "Yugo", 123123, 500);
console.log(vehicle);



// Classes: Declaration of class
// class Vehicle {
//     constructor(id, name, batchNo, price) {
//         this.id = id;
//         this.name = name;
//         this.batchNo = batchNo;
//         this.price = price;
//         this.company = "Move.Inc";
//     }
//     getInfo() {
//         console.log(`This is ${this.name} vehicle. It costs ${this.price}`)
//     }
// }
// let vehicle = new Vehicle(1, "Yugo", 123123, 500);
// console.log(vehicle);


//Inheritance with classes 
class WheeledVehicle extends Vehicle {
    constructor(id, name, batchNo, price, wheels) {
        super(id, name, batchNo, price)
        this.wheels = wheels;
    }
    getNumOfWheels() {
        console.log(`This vehicle has ${this.wheels} wheels!`);
    }
}

let bike = new WheeledVehicle(2, "Bike", 10220, 500, 2);
let car = new WheeledVehicle(3, "Car", 19295, 2000, 4);
// console.log(bike);
// console.log(car);


class Car extends WheeledVehicle {
    constructor(id, name, batchNo, price, doors, hasAc) {
        super(id, name, batchNo, price, 4)
        this.doors = doors;
        this.hasAc = hasAc;
        this.hasAc ? this.price += 400 : this.price;
    }
    buyCar(amount) {
        amount >= this.price ?
            console.log(`Congrats, you just bought ${this.name}!`) :
            console.log(`Sorry, you don't have enough money for this car!`)
    }

    static addAc(car) {
        if (!car.hasAc) {
            car.hasAc = true;
            car.price += 400;
            console.log(`The car has AC now and it costs ${car.price}`);
        } else {
            console.log(`The car already has AC!`);
        }
    }
}

let yugo = new Car(10, "Yugo", 11111, 400, 3, false);
let toyota = new Car(11, "Auris", 11223, 7000, 5, true);
let citroen = new Car(10, "Citroen", 12333, 10000, 5, true);

// console.log(yugo);
// console.log(toyota);
// console.log(citroen);


class ElectricCar extends Car {
    constructor(id, name, batchNo, price, batteryCapacity){
        super(id, name, batchNo, price, true)
        this.batteryCapacity = batteryCapacity;
    }

    get batteryCapacity(){
        console.log(`We are getting battery capacity of ${this.name} car!`)
        return `${this.name} has ${this._batteryCapacity} Ah!`
    }

    set batteryCapacity(batteryCapacity) {
        console.log(`We are setting the battery capacity of the ${this.name}. Please wait...`);

        batteryCapacity > 100 ? 
        this._batteryCapacity = batteryCapacity :
        (() => {throw new Error(`Cannot set battery capacity below 100 Ah!`)})();
    }
}

// let tesla = new ElectricCar(15, "Tesla", 15512, 1000000, 1000);
// console.log(tesla); 



//Using default constructor
class Person {
    constructor() {

    }
    fName;
    lName;
    age;
    sayHello() {
        console.log("Hello from Person class!")
    }
}
// let person = new Person();
// person.sayHello();
