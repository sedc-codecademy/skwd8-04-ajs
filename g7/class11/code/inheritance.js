console.log("We are live!");

// function Vehicle(id, name, batchNo, price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "vehicle.inc",
//     this.printVehicle = function(){
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
//     }
// }

// let testVehicle1 = new Vehicle(1, "super awesome boat", "B43552", 500000);
// console.log(testVehicle1);

// function WheeledVehicle(wheels, name){
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function(){
//         console.log(`WROOM WROOM ( on ${this.wheels} wheels )`);
//     }
// }

// WheeledVehicle.prototype = Object.create(new Vehicle());
// let car = new WheeledVehicle(4, "Yugo");
// car.price = 300;
// car.id = 2;
// car.batchNo = "C34234";

function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "vehicle.inc",
    this.printVehicle = function(){
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}

function WheeledVehicle(id, batch, price, name, wheels){
    Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
    this.wheels = wheels;
    this.drive = function(){
        console.log(`WROOM WROOM ( on ${this.wheels} wheels )`);
    }
}

let car = new WheeledVehicle(3, "W34345", 22800, "Tesla", 4);
console.log(car);
