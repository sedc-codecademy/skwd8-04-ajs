let person = {
  name: "Dejan",
  age: 34,
  weapon: {
    type: "axe",
    color: "red"
  }
}

let cukashin = {...person} // <cukashin> is a copy from object person
let dezhan = person // <dezhan> is a new reference to person object

let numbers = [2, 3 ,4 ,6]
let numbers2 = [...numbers]

const { name, age, weapon: { color } } = person

// this function takes a person object
function printInfo({ name, age, weapon: { color } }) {
  console.log(name, age, color);
}


function Person(name, age, type) {
  this.name = name
  this.age = age
  this.weapon = {
    type, // Shortcut for <type: type>
    color: "red"
  }
}
