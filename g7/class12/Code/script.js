console.log("We are live");
let statistics = {
    vehicleCounter: 0,
    wheeledVehicleCounter: 0,
    carCounter: 0
}

// class, capital letter is a convention
class Vehicle {
    // Try put counter in class
    // The function that is called the first time a new object is created
    constructor(id, name, batch, price){
        // this.id = new object property
        // id = the constructor parameter
        this.id = id; // Names of properties don't have to be the same as the constructor parameters
        this.name = name;
        this.batchNo = batch;
        this.price = price;
        console.log(`A new vehicle of type ${name} is being created!`);
        statistics.vehicleCounter++;
    }
    printVehicle() {
        console.log(`${this.id} - ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}
let spaceShip = new Vehicle(9000, "Colony 9", "space040404", 10000000000);
console.log(spaceShip);
spaceShip.printVehicle();

class WheeledVehicle extends Vehicle{
    constructor(id, name, batch, price, wheels){
        // with super we can accsess and call the constructor of the parent
        super(id, name, batch, price);
        this.wheels = wheels;
        console.log(`A new wheeled vehicle of type ${name} is being created!`);
        statistics.wheeledVehicleCounter++;
    }
    driveVehicle(){
        console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
    }
}
let trotinet = new WheeledVehicle(12, "SuperTrotinet", "Trotinet2124", 600, 3);
console.log(trotinet);
trotinet.printVehicle();
trotinet.driveVehicle();

class Car extends WheeledVehicle{
    constructor(id, name, batch, price, doors, ac, company){
        super(id, name, batch, price, 4);
        this.doors = doors;
        this.airConditioning = ac;
        // This will give default value in case the person doesn't enter any company
        this.manufacturer = company === undefined ? "Car Inc." : company;
        // This is just hardcoding the name of the manufacturer for all cars
        // this.manufacturer = "Car Inc.";

        if(ac) this.price += 400;
        if(doors < 1) throw new Error("Object can't be created. Not enough doors!");
        console.log(`A new car of type ${name} is being created!`);
        statistics.carCounter++;
    }
    buyCar(money) {
        money >= this.price ? console.log(`Congrats! You bought a ${this.name}`) : console.log(`You need ${this.price - money} more to buy this car!`);
    }
}

let tesla = new Car(144, "Tesla", "T21431", 40000, 5, false);
console.log(tesla);
tesla.printVehicle();
tesla.driveVehicle();
tesla.buyCar(34000); 