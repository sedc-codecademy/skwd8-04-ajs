let person = {
  name: "Dejan",
  age: 34,
  weapon: {
    type: "axe",
    color: "red"
  }
}

// // This is equivalent to object literal person object above
// let person = new Object()
// person.name = "Dejan"
// person.age = 34
// person.weapon = { type: "axe", color: "red" } // we can combine all methods of creating object





personFunctions = {
  print: function() { console.log(this); console.log(this.name); return 0 }
}

function Person(name, age, weapon) {
  this.name = name;
  this.age = age;
  this.weapon = weapon;
  // this.print = function() { console.log(this); console.log(this.name); return 0 } // This will create new functions every time we create an object from Person, not a good idea. Check the comment on line 32
  // this.print = personFunctions.print; // This will create a new reference to some function named <print> every time we create an object from Person, good idea, but not perfect. Check the comment on line 32
}

Person.prototype.print = function() { console.log(this); console.log(this.name); return 0 } // This will create one function and one reference in the prototype of Person, every object the we create from Person will have access to this reference
Person.prototype.name = "dejan" // if we create an object from Person(<person1>) and console.log(person1.name), first it will look for a property <name> in person1, if it finds it then it will log it in the console, if it doesn't find it, it will look for <name> in the prototype of person1... In this line we set a name property in the prototype, but person1 still has a priority over his properties
// console.log(Person.prototype)

// let dejan = new Person("dejan")
// let vukashin = new Person("vukashin")
// let dimitar = new Person("dimitar")
// let andreja = new Person("andreja")

dimitar.logThis = function() { console.log(this) } // logThis will only be available in dimitar
let personProtoype = {
  constructor: Person, // Our manually set constructor property
  logThis: function() { console.log(this) }
}
Person.prototype = personProtoype // logThis will be available in all person objects
