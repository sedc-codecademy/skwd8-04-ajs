function Person(name, age, weapon) {
  this.name = name;
  this.age = age;
  this.weapon = weapon;
}

function Student(name, weapon, laptop) {
  Person.call(this, name, undefined, weapon) // .call() method calls the Person function and changes it's "this" pointer to the first parameter
  // this.name = name;
  // this.age = age;
  // this.weapon = weapon;
  this.laptop = laptop;
}
// Student.prototype = Object.create(Person.prototype) // Creates an object(which we will use as Student prototype), and sets Person.prototype as it's prototype

let dejan = new Person("dejan")
let vukashin = new Person("vukashin")
let dimitar = new Person("dimitar")
let andreja = new Person("andreja")

Object.setPrototypeOf(dejan, Object.create(Student.prototype)) // Sets the prototype of "dejan" to Student prototype instead of Person by default