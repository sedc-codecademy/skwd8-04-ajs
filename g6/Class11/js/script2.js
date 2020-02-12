function Vehicle(id, name, bathcNo, price) {
    this.id = id;
    this.name = name;
    this.bathcNo = bathcNo;
    this.price = price;

    this.company = 'move.inc';
    
    this.printVehicle = () => {
        console.log(`${this.id} ${this.name} ${this.bathcNo} ${this.price}`);

    }
}

function WheeledVehicle(id, name, batch, price,  wheels) {

    //this sets current object to inherit from Vehicle
    Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));

    this.wheels = wheels;
    this.drive = () => console.log(`Driving on ${this.wheels} wheels`);
}

let wheeledVehicle = new WheeledVehicle(23, 'Honda', 33, 1000, 2);
console.log(wheeledVehicle);
wheeledVehicle.printVehicle();

console.log(Object.getPrototypeOf(wheeledVehicle));

let vehicle = new wheeledVehicle.constructor(7, 'Yugo', 80, 100);
console.log(vehicle);