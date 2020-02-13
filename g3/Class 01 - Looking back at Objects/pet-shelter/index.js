
const shelter = [];
function Pet(name, type,breed,preferredFood,age,isHealthy) {
  this.name = name;
  this.type = type;
  this.breed = breed;
  this.preferredFood = preferredFood;
  this.age = age;
  this.isHealthy = isHealthy;
  this.owner = '';
  this.isAbandoned = false;
  
  this.eat = function() {
    return The `${this.type} ${this.name} is eating ${this.preferredFood }`;
  }

  this.adopt = function(person = '') {
    this.owner = person;
  }

  this.isAdopted = function() {
    return this.owner ? true : false;
  }
}

const dog = new Pet('Spike', 'dog', 'AFAF', 'meat', 7, true);
shelter.push(dog);
const dogOne = new Pet('Spoke', 'dog', 'AFAF', 'meat', 7, true);
shelter.push(dogOne);
const cat = new Pet('Tom', 'cat', 'MJAU', 'milk', 7, true);
shelter.push(cat);

// Part 2
// Create a function (constructor or regular) that will return an object that describes a person, with the following properties:

// firstName - The first name of the person
// lastName - The last name of the person
// age - The age of the person
// adopt - method that gets shelter array as a parameter and a string with the type of pet the person wants to adopt
// (bonus) pets - an array of the pets the person owns (initially empty)
// (bonus) abandon - method that abandons a pet whose owner is the person
// Create at least two persons. Have each of them adopt an animal from the shelter.
// (bonus) The pets should be added to the pets array of their owners and removed form the shelter.
// (bonus) Have one person adopt an animal that the other has abandoned.
// (bonus) Have one person adopt an animal that the other person currently owns.

function Person(firstName, lastName,age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.pets = [];


  this.adopt = function(arr, petType) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].type === petType) {
          arr[i].adopt(this);
          this.pets.push(arr[i]);
          arr.splice(i, 1);
          return;
      }
  }
}
    this.abandon = function(petType) {
      for (let i = 0; i < this.pets.length; i++) {
          if (this.pets[i].type === petType) {
            this.pets[i].adopt();
            this.pets[i].isAbandoned = true;
            shelter.push(this.pets[i]);
            this.pets.splice(i, 1);
            return;
          }
      }
    }

    this.getPetThatOtherPersonAbanddoned = function (arr, petType) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].type === petType && arr[i].isAbandoned) {
                    arr[i].adopt(this);
                    this.pets.push(arr[i]);
                    arr.splice(i, 1);
                    return;
                }
            }
    }

    this.getPetThatOtherPersonCurrlentlyOwns = function(arr, petType) {
        this.adopt(arr, petType);
    }
}
const vukashin = new Person('Vukashin', 'Obradovikj', 18);

//Adopt, Set Owner, add to my Pets and remove from Shelter !!
console.log(shelter);
vukashin.adopt(shelter, 'dog');
console.log(vukashin.pets);
console.log(shelter);


//Abanndon Pet remove from my pets and return to shelter !
vukashin.abandon('dog');
console.log(vukashin.pets);
console.log(shelter);

//Adopt Pet that other person Abanndoned !

const dejan = new Person('Dejan', 'Blazeski', 19);

dejan.getPetThatOtherPersonAbanddoned(shelter, 'dog');
console.log(dejan.pets);
console.log(shelter);

// Adopt Pet that other person currently owns!!!

vukashin.getPetThatOtherPersonCurrlentlyOwns(shelter, 'dog');

console.log(vukashin.pets);

console.log(shelter);


// Pet Shelter Refactored !!!!!

// const shelter = [];
// function Pet(name, type,breed,preferredFood,age,isHealthy) {
//   this.name = name;
//   this.type = type;
//   this.breed = breed;
//   this.preferredFood = preferredFood;
//   this.age = age;
//   this.isHealthy = isHealthy;
//   this.owner = '';
//   this.isAbandoned = false;
  
//   this.eat = function() {
//     return The `${this.type} ${this.name} is eating ${this.preferredFood }`;
//   }

//   this.adopt = function(person = '') {
//     this.owner = person;
//   }

//   this.isAdopted = function() {
//     return this.owner ? true : false;
//   }
// }

// const dog = new Pet('Spike', 'dog', 'AFAF', 'meat', 7, true);
// shelter.push(dog);
// const dogOne = new Pet('Spoke', 'dog', 'AFAF', 'meat', 7, true);
// shelter.push(dogOne);
// const cat = new Pet('Tom', 'cat', 'MJAU', 'milk', 7, true);
// shelter.push(cat);


// function Person(firstName, lastName,age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.pets = [];

//   this.getPet = function(arr, petType) {
//       let obj = arr.find(pet => pet.type === petType);
//       this.adopt(obj);
//       let index = arr.indexOf(obj);
//       arr.splice(index, 1);
//   }

//   this.adopt = function(obj) {
//       obj.adopt(this);
//       this.pets.push(obj);
//   }

//     this.abandon = function(petType) {
//            let obj = this.pets.find(pet => pet.type === petType);
//              let index = this.pets.indexOf(obj);
//              this.pets.splice(index, 1);
//              shelter.push(obj);
//     }

//     this.getPetThatOtherPersonAbanddoned = function (arr, petType) {

//     }

//     this.getPetThatOtherPersonCurrlentlyOwns = function(arr, petType) {
//     }
// }


