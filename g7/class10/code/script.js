// Talking a bout this
// This always points to the closest object container

let test = {
    selfInvoking: (() => console.log(this))(),
    setTimeoutArrow: setTimeout(()=> console.log(this), 2000),
    setTimeout: setTimeout(function(){console.log(this)}, 2000),
    recursion: function(num){
        console.log(this);
        if(num !== num) return num - 1;
        return 0;
    },
    // that pattern - We keep the this that we want to use later in a new variable called that ( The variable does not need to be called that but the pattern is more recognisable when the name is that )
    withoutThatPattern: function(){
        console.log(this); // the object
        let insideFunction = function(){
            console.log(this); // window
        }
        insideFunction();
    },
    withThatPattern: function(){
        console.log(this); // the object
        let that = this;
        let insideFunction = function(){
            console.log(that); // the object
        }
        insideFunction();
    },
    registerListeners: function(){
        let btn = document.getElementsByTagName("button")[0];
        let that = this;
        btn.addEventListener("click", function(){
            // addEventListener always point to the element where the addEventListener function was called
            console.log(this); // btn object
            console.log(that); // test object
        })
    }
}

// Destruction and spread
// Object
// Destructing objects basically separate property values from the object it self to have individual values
let bob = {
    name: "Bob",
    age: 22,
    isHappy: true,
    phone: 31413243,
    address: "Bob St."
}
console.log(bob);
let {name, age} = bob;
console.log("After destructions!")
console.log(name);
console.log(age);

// Array
let names = ["Bob", "Jill", "Greg"];
console.log(names);
let [person1, person2, person3] = names;
console.log("After destruction!");
console.log(person1);
console.log(person2);
console.log(person3);

// Spread
function printNames(name1, name2, name3){
    console.log(`${name1} - ${name2} - ${name3}`);
}
// Without spread operator
console.log("Without spread operator");
printNames(person1, person2, person3);
// With spread operator
console.log("With spread operator");
printNames(...names);

// Create and Assign
// Create creates an empty shell of an object so that we can populate it later. It copies the names and values of properties and methods as a whole
// barnie is a clone of dog
let dog = {
    name: "sparky",
    isHappy: true,
    bark: function(){
        console.log("BARK BARK BARK!")
    }
}

let barnie = Object.create(dog); // barnie has everything dog has
console.log("Barnie is empty")
console.log(barnie);
barnie.name = "Barnie";
barnie.color = "White";
barnie.age = 2;
barnie.happyBirthday = function(){
    console.log("Happy birthday Barnie!");
    this.age++;
}

console.log(barnie.isHappy);
console.log(`dog:`);
dog.bark();
console.log(`barnie:`);
barnie.bark();

// Assign
// Assign combines two objects in to the first object given as paramter
// The values that we merge from the second to the first don't overwrite values that already exist in the first object
console.log("WE ASSIGN:")
let addressInfo = {
    street: "Dogge Street",
    streetNumber: 24,
    contactPerson: "0703452323"
}
let newBarnie = Object.assign(barnie);
// let barnieChip = Object.assign(newBarnie, addressInfo); // copies from address to barnie
// console.log(barnie);
// console.log(addressInfo);
// console.log(barnieChip);

let copyAddressInfo = Object.create(addressInfo); // Copy of one object

