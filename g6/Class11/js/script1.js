function Vehicle(id, name, bathcNo, price) {
    this.id = id;
    this.name = name;
    this.bathcNo = bathcNo;
    this.price = price;

    this.company = 'move.inc';
    
    this.printVehicle = () => console.log(`${this.id} ${this.name} ${this.bathcNo} ${this.price}`);
}

let vehicle = new Vehicle(1, 'Zastava', 128, 200);
let wheeledVehicle = Object.create(vehicle);
wheeledVehicle.printVehicle();
wheeledVehicle.fuelTank = 32;
wheeledVehicle.drive = () => console.log('Brm Brm');
wheeledVehicle.drive();

let airVehicle = Object.create(vehicle);
airVehicle.fly = () => console.log('I am flying');
airVehicle.fuelTank = 32;
airVehicle.fly();
airVehicle.printVehicle();

// function AirVehicle(id, name, bathcNo, price) {
//     this.id = id;
//     this.name = name;
//     this.bathcNo = bathcNo;
//     this.price = price;

//     this.fuelTank = 32;
//     this.drive = () => console.log('Brm Brm');
//     this.fly = () => console.log('I am flying');

//     this.company = 'move.inc';
    
//     this.printVehicle = () => console.log(`${this.id} ${this.name} ${this.bathcNo} ${this.price}`);
// }