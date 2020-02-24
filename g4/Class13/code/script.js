//Constructor
//Constructor is a function that constructs other objects by some rules and logic.

function Human(name, age) {
    this.name = name;
    this.age = age;
}

let person = new Human("Viktor", 30)

// console.log(person)

// console.log(person.constructor)
// console.log(person.constructor.length)
// console.log(person.constructor.name)

//CLASSES
class Vehicle {
    constructor(id, name, batch, price) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = "G4 Drive";
    }

    printVehicle() {
        console.log(`${this.name}, Batch: ${this.batch}, ${this.price}`)
    }
}

let boat = new Vehicle(2, "Boat", "12c", 50000);

// console.log(boat)
// boat.printVehicle()

//Inheritance with classes
class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price)

        this.wheels = wheels;
    }

    driveVehicle() {
        console.log(`We are driving the ${this.name} on ${this.wheels}`)
    }
}

let bike = new WheeledVehicle(87, "BIke", "12g", 700, 2)

// console.log(bike)
// bike.printVehicle()
// bike.driveVehicle()

// console.log(Object.getPrototypeOf(bike))

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, enginType, ac) {
        super(id, name, batch, price, wheels)

        this.enginType = enginType;
        this.ac = ac;

        if (ac) this.price += 400;
    }

    buyCar(money) {
        money >= this.price ?
            console.log(`Congrats! You bought a Car`) :
            console.log(`You need ${this.price - money} more to buy this car!`)
    }

    // ------------- static methods --------------
    // keyword STATIC
    // definition inside of a class, but we can use them without creating an instance of the class itself

    static addAc(car) {
        if (!car.ac) {
            car.ac = true;
            car.price += 400;
            console.log(`The car has AC now!`);
        } else {
            console.log(`The car already has AC!`)
        }
    }
}

let myCar = new Car(5, "BMW 4", "22c", 45000, 4, "diesel", true)
// console.log(myCar)

// myCar.printVehicle()
// myCar.buyCar(35000);

let stojadin = new Car(99, "Stojadin", "101", 500, 4, "petrol", false);
// console.log(stojadin.id)
//console.log(stojadin);
// ---------- Calling STATIC METHODS!!! ----------------
// Car.addAc(stojadin);
// console.log(stojadin);

class Calculations {
    static pi = 3.14;

    static sum(num1, num2) {
        return num1 + num2;
    }

    static difference(num1, num2) {
        return num1 - num2;
    }
}

// console.log(Calculations.sum(1, 2));
// console.log(Calculations.difference(10, 2));
// console.log(Calculations.pi);

// ---------Getter and setter -----------
class ElectricCar extends Car {
    constructor(id, name, batch, price, wheels, enginType, owner) {
        super(id, name, batch, price, wheels, enginType, true);
        this.owner = owner;
    }
    get owner() {
        console.log("We are getting the name of the owner. Please wait...");
        return `The owner of the car is ${this._owner}`
        // return this.owner;
    }

    set owner(ownerName) {
        console.log("We are setting the owner name. Please wait....");
        ownerName.length > 1 ?
            this._owner = ownerName :
            (() => { throw new Error("The name is too short") })();
        // this.owner = ownerName;
    }
}
let myElectricCar = new ElectricCar(12, "Toyota Hybrid", "33r", 50000, 4, "hybrid", "Kristina");
console.log(myElectricCar);
console.log(myElectricCar.owner);
let myTeslaCar = new ElectricCar(12, "Tesla", "33r", 50000, 4, "hybrid", "V");
console.log(myElectricCar);
