// Declaring class

class Vehicle {
  constructor(id, name, batch, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batch;
    this.price = price;
    this.company = 'move.inc';
  }
  printVehicle() {
    console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}`);
  }
}

let boat = new Vehicle(1, 'Boat', 'Q2R', 50000);
// console.log(boat);
// boat.printVehicle();

// Class inheritance

class WheeledVehicle extends Vehicle {
  constructor(id, name, batch, price, wheels) {
    super(id, name, batch, price);
    this.wheels = wheels;
  }
  driveVehicle() {
    console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
  }
}

let bike = new WheeledVehicle(2, 'Bike', 'TRF', 700, 2);
// console.log(bike);
// console.log(bike.wheels);
// console.log(boat.wheels);
// bike.driveVehicle();
// bike.printVehicle();

class Car extends WheeledVehicle {
  constructor(id, name, batch, price, doors, ac) {
    super(id, name, batch, price, 4);
    this.doors = doors;
    this.airConditioning = ac;
    if (ac) this.price += 400;
  }
  buyCar(money) {
    money >= this.price
      ? console.log('Congrats! You bought a car.')
      : console.log(`You need ${this.price - money}$ more to buy this car`);
  }
  static addAc(kola) {
    if (!kola.airConditioning) {
      kola.airConditioning = true;
      kola.price += 400;
      console.log(`The car has AC now and costs ${kola.price}`);
    } else {
      console.log('The car already has AC!');
    }
  }
}

// let car = new Car(3, 'Car', 'GHJ', 5000, 5, false);
// console.log(car);
// car.buyCar(5000); // not static
// Car.addAc(car); // static

// GET & SET

class ElectricCar extends Car {
  constructor(id, name, batch, price, doors, owner) {
    super(id, name, batch, price, doors, true);
    this.owner = owner;
  }

  get owner() {
    console.log('We are getting the name of the owner. Please wait...');
    return `The car is owned by: ${this._owner}`;
  }
  set owner(ownerName) {
    console.log('We are setting the name of the owner. Please wait...');
    ownerName.length > 1 ? (this._owner = ownerName) : console.log('Owner name is too short');
  }
}

// let tesla = new ElectricCar(4, 'Tesla', 'KNB', 9000, 5, 'Alek');
// let tesla2 = new ElectricCar(4, 'Tesla', 'KNB', 9000, 5, 'Boris');
// console.log(tesla);
// console.log(tesla2);
// console.log(tesla.owner);

// console.log(car instanceof Car);
// console.log(car instanceof Vehicle);
// console.log(boat instanceof ElectricCar);

class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  get type() {
    return this._type;
  }

  set type(animalType) {
    if (animalType === 'carnivore' || animalType === 'omnivore' || animalType === 'herbivore') {
      this._type = animalType;
    } else {
      throw new Error('This is not a proper Animal!');
    }
  }

  eat(animal) {
    if (animal instanceof Animal) {
      if (this.type === 'herbivore') {
        console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
      } else {
        if (this.size < animal.size * 2) {
          console.log(
            `The animal ${this.name} tried to eat the ${animal.name} but it was too large.`
          );
        } else {
          this.isEaten = true;
          console.log(`The animal ${this.name} ate the ${animal.name}`);
        }
      }
    } else {
      console.log(`The animal ${this.name} is eating ${animal.name}`);
    }

    // If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large.
  }
}

let dog = new Animal('Blacky', 'omnivore', 10, 40);
let panda = new Animal('Panda', 'herbivore', 4, 300);
let lion = new Animal('Lion', 'carnivore', 20, 150);
// let car = new Animal('Renault', 'car', 2, 1900); // THIS SHOULD FAIL!

dog.eat(panda);
dog.eat(lion);
panda.eat(dog);
panda.eat(lion);
lion.eat(dog);
lion.eat(panda);
