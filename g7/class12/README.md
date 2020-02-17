# Objects pt3 &#x1F34E;
## Classes in JavaScript
Inheritance with prototypes can be a hassle. JavaScript was not built with object oriented functionalities in mind from the beginning and it was pretty hard to work with prototypes. This is why in ES6 JavaScript finally got classes and object oriented features. From that point forward we can use classes instead of constructor functions and use inheritance and constructors very easy. We could also access the parent constructor pretty easy as well. This is a huge change for the language that made developers lives very easy. So classes are just like constructor classes but they are written in a different manner and have a few neat features. They can be created by just writing the keyword **class**. Note that these changes did not change how JavaScript, the new classes still work with prototypes behind the scenes. It is just better structured and made easier and more convenient to use. 
```javascript
class Vehicle {
    constructor(id, name, batch, price) {
        this.id = id;
		this.name = name;
		this.batchNo = batch;
		this.price = price;
		this.company = "move.inc";
    }
    printVehicle() {
		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}
let boat = new Vehicle(33, "Boat", "2z3", 50000);
console.log(boat);
boat.printVehicle();
```
## Inheritance with classes
When using inheritance with prototypes in JavaScript, we needed to do a lot of the connecting and setting up by our selves. But when using classes this has changed. We can now inherit very easy with one keyword. When creating classes we can just add the **extends** keyword next to the class name and write another class. This will tell the class that we are creating that it inherits from the class after the extends keyword. Nothing to connect or write extra code, it connects by it self. 
```javascript
class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
	    super(id, name, batch, price)
        this.wheels = wheels;
    }
    driveVehicle() {
		console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
    }
}
let bike = new WheeledVehicle(87, "Bike", "12g", 700, 2);
console.log(bike);
bike.printVehicle();
bike.driveVehicle();
console.log(Object.getPrototypeOf(bike));
```
## Constructors
Classes also contain a keyword for it's constructor. We can use it to dictate what the person needs to enter when they try and create a new instance of an object from the class. This can be done with the **constructor()** keyword. We can also access the constructor of the parent if we inherit from another class. This can be written inside the constructor with the keyword **super()**. Inside the super constructor we can pass values as we would pass for the constructor of the parent class. 
```javascript
class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac) {
	    super(id, name, batch, price, 4);
        this.doors = doors;
        this.airConditioning = ac;
        if(ac) this.price += 400;
    }
    buyCar(money) {
	    money >= this.price ? console.log("Congrats! You bought a car") : 
		console.log(`You need ${this.price - money} more to buy this car!`);
    }
}
let car = new Car(99, "Car", "22k", 7800, 4, false);
console.log(car);
car.printVehicle();
car.driveVehicle();
car.buyCar(5000);
console.log(Object.getPrototypeOf(car));
```
## Static methods
When we write methods in a class, the methods are stored in the prototype. These functions can be called only if we create an object from the class. But if we want to create a method on the class it self, that can be called without creating an object, we can with the keyword **static**. The static methods are great for creating utility and service methods on the class it self. 
```javascript
class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac) {
	    super(id, name, batch, price, 4);
        this.doors = doors;
        this.airConditioning = ac;
        if(ac) this.price += 400;
    }
    buyCar(money) {
	    money >= this.price ? console.log("Congrats! You bought a car") : 
		console.log(`You need ${this.price - money} more to buy this car!`);
    }
    static addAc(car){
		if(!car.airConditioning){
			car.airConditioning = true;
			car.price += 400;
			console.log(`The car has AC now and it costs ${car.price}`);
		} else {
			console.log(`The car already has AC!`);
		}
	}
}

#### Check if an object is an instance of a class
```javascript
console.log(myElectricCar instanceof ElectricCar);
console.log(myElectricCar instanceof Car);
console.log(myElectricCar instanceof Vehicle);
```

## Extra materials &#x1F4D9;
* [Class syntax explained](https://javascript.info/class)
* [From prototypes to Classes](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
* [JavaScript classes under the hood](https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677)
