function AnimalFunc(name, breed, age, color) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;
}
AnimalFunc.prototype.eat = function(food) {
  console.log(`${this.name} Eating... ${food}`)
}
AnimalFunc.print = function(animalObj) {
  console.log(`printing AnimalFunc... ${animalObj.name}`)
}

function DogFunc(name, breed, age, color, pedigree) {
  AnimalFunc.call(this, name, breed, age, color);
  this.pedigree = pedigree
}
DogFunc.prototype = Object.create(AnimalFunc.prototype)
DogFunc.prototype.wouf = function() {
  console.log("wouf wouf")
}

class Animal {
  constructor(name, breed, age, color) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
  }

  eat(food) {
    console.log(`[class] Eating ${food}`)
  }

  static print(animal) {
    console.log(`This animal is named: ${animal.name}`)
  }

  static sumAge(...animals) {
    let sum = 0;
    for (const animal of animals) {
      if(animal.age)
        sum += animal.age
    }
    return sum
  }
}

class Dog extends Animal {
  constructor(name, breed, age, color) {
    super(name, breed, age, color)
    this._pedigree = false;
  }

  get pedigree() {
    // console.log("Getting")
    // return this.name
    return this._pedigree ? `${this.name} is with pedigree` : `${this.name} is not with pedigree`;
  }

  set pedigree(value) {
    // console.log("Setting " + value)
    if (typeof value === "boolean")
      this._pedigree = value;
    else
      throw new Error("Cannot set pedigree to a non boolean")
  }

  wouf() {
    console.log("wouf wouf")
  }
}
