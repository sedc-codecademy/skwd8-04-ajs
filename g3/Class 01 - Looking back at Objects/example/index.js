

let obj = {
  name: 'dejan',
  age: 16
}

function Obj(name, age) {
  this.name = name;
  this.age = age
}

let newObj1 = new Obj('dejan', 15) // 0x3337398478373
let myNewObj = newObj1 // 0x3337398478373

newObj1.age = 23
console.log(newObj1)
console.log(myNewObj)
myNewObj.age = 65

let newInt = 3 // 0x37373738 = 3
let myNewInt = newInt // 0x86875747 - 3

newInt = 8 // 0x37373738 = 8
// myNewInt // 0x86875747 = 3

console.log(newObj1)
console.log(myNewObj)

console.log(newInt)
console.log(myNewInt)

// let newObj2 = new Obj('dejan', 15)

// newObj1

