// ------------ DESTRUCTURING ------------
// Destructuring simply implies breaking down a complex structure into simpler parts.
// In JavaScript, this complex structure is usually an object or an array.

const person = {
  name: "Kristina",
  lastname: "Spasevska",
  age: 32
};

// const namePerson = person.name;
// const lastnamePerson = person.lastname;
// console.log(namePerson, lastnamePerson);

// ---------------- OBJECT DESTRUCTURING ---------
console.log("------- object destructuring -----");

// with destructuring
// case sensitive!!!
const { name, lastname } = person;
console.log(name, lastname);

// // destructuring with custom names
const { name: firstName, lastname: lastName } = person;
console.log(firstName, lastName);

// ------ default values
//const { name, lastname, isLazy = true } = person;
// console.log(name, lastname, isLazy);

// ---------------- ARRAY DESTRUCTURING ---------
const hobbies = ["Reading", "Hiking", "Sports"];

console.log("------- array destructuring -----");

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
console.log(hobby1, hobby2);

const [hobby01, hobby02] = hobbies;
console.log(hobby01, hobby02);

// --------- OBJECT METHODS ----------

const dog = {
  isHappy: true,
  bark: function() {
    console.log("WOOOF WOOF");
  }
};

// --------- Object.create()-------
// Create is a method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument.
const barnie = Object.create(dog); // barnie has everything the dog has
barnie.name = "Barnie";
barnie.breed = "Dzukela";
console.log("-----Object.create()----", barnie);

// --------- Object.assign() --------
// Assign is a method that can merge two objects in to one. It accepts two objects and it tries to merge the second object in to the first one.
const addressInfo = {
  street: "Dogge Street",
  streetNumber: 24,
  contactPerson: "0703452323"
};

const barnieChip = Object.assign(barnie, addressInfo);
console.log("-----Object.assign()----", barnieChip);

let anotherAddress = {
  street: "Other Street",
  streetNumber: 12,
  contactPerson: "072990002"
};
// we override the existing values of the object
const barnieChipUpdate = Object.assign(barnieChip, anotherAddress);
console.log(barnieChipUpdate);

// ------------- Object.keys() & Object.values() & Object.entries()--------
const barnieKeys = Object.keys(barnie);
console.log("Object.keys()----", barnieKeys);
// all property names in an array

const barnieValues = Object.values(barnie);
console.log("Object.values()----", barnieValues);
// all values of properties in an array

const barnieEntries = Object.entries(barnie);
console.log("Object.entries()-----", barnieEntries);
// array of smaller arrays with two elements, one is the property and the other is the value
