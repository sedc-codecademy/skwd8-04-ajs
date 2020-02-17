// literal notation
let person = {
  name: "John",
  surname: "Doe",
  age: 32,
  isEmployed: true,

  printInfo: function() {
    console.log(
      `${this.name} ${this.surname} is ${this.age} years old and th is ${
        this.isEmployed === true ? "emplyed" : "not employed"
      }`
    );
  }
};
person.printInfo();

//constructor notation
function Dog(name, color, age, favouriteFood) {
  this.name = name === undefined ? "unnamed" : name;
  this.color = color;
  this.age = age;
  this.hasOwner = false;

  this.favouriteFood =
    favouriteFood === undefined ? [new Food("Bacon", "Red")] : favouriteFood;

  this.bark = function() {
    console.log("BARK BARK BARK");
  };

  this.eat = function(food) {
    this.favouriteFood.forEach(fav => {
      fav.name.toLowerCase() === food.name.toLowerCase()
        ? console.log("*My favourite*")
        : "";
    });

    console.log("NOM NOM NOM");
  };
}

function Food(name, color) {
  this.name = name;
  this.color = color;
}

let majlo = new Dog("Majlo", "Black", 8, [
  new Food("apple", "red"),
  new Food("beef", "red")
]);

console.log(majlo);
console.log(majlo.favouriteFood[0].name);

majlo.breed = "Hysky";
console.log(majlo);

majlo.bark();

majlo.eat(new Food("beef", "red"));
majlo.eat(new Food("orange", "orange"));

let doggy = new Dog();
console.log(doggy);

let food1 = new Food("orange", "orange");
let food2 = new Food("orange", "orange");

console.log(food1 === food2);

//this keyword

//this in global scope
console.log(this);

// this in a function
function whatIsThis() {
  console.log(this);
}

whatIsThis();

let obj = {
  whatIsThis: this,
  whatIsThisMehtod: function() {
    console.log(this);
  }
};

console.log(obj.whatIsThis);
obj.whatIsThisMehtod();

function ThisTemplate(description) {
  console.log(this);
  this.description = description;
  this.whatIsThis = this;

  this.whatIsThisFunc = function() {
    console.log(this);
  };
}

ThisTemplate();

let template = new ThisTemplate("some random description");
console.log(template.whatIsThis);

template.whatIsThisFunc();
