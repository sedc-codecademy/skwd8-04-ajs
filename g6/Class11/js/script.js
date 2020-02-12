function Vehicle(id, name, bathcNo, price) {
    this.id = id;
    this.name = name;
    this.bathcNo = bathcNo;
    this.price = price;

    this.company = 'move.inc';
    
    this.printVehicle = () => console.log(`${this.id} ${this.name} ${this.bathcNo} ${this.price}`);
}

let vehicle = new Vehicle(1, 'Zastava', 128, 200);

function WheeledVehicle(id, name, bathcNo, price) {
    this.id = id;
    this.name = name;
    this.bathcNo = bathcNo;
    this.price = price;

    this.fuelTank = 32;
    this.drive = () => console.log('Brm Brm');

    this.company = 'move.inc';
    
    this.printVehicle = () => console.log(`${this.id} ${this.name} ${this.bathcNo} ${this.price}`);
}

function AirVehicle(id, name, bathcNo, price) {
    this.id = id;
    this.name = name;
    this.bathcNo = bathcNo;
    this.price = price;

    this.fuelTank = 32;
    this.drive = () => console.log('Brm Brm');
    this.fly = () => console.log('I am flying');

    this.company = 'move.inc';
    
    this.printVehicle = () => console.log(`${this.id} ${this.name} ${this.bathcNo} ${this.price}`);
}