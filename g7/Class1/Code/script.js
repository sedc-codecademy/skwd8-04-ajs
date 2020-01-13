// Creating object with object literal
let jill = {
    name: "Jill",
    phoneNumber: 123412412
}
let personObject = {
    firstName: "Bob",
    middleName: "Bobovski",
    lastName: "Bobsky",
    gender: "m",
    age: 29,
    friends:[
        jill,
        {
            name: "Greg",
            phoneNumber: 234325334
        }
    ],
    sayHi: function(){
        console.log(`${this.firstName} says Hi!`);
    }
}

console.log(personObject.friends[0].name); // Jill

// Constructor function
// Template on building new Person objects
function Friend(name, phone){
    this.name = name;
    this.phone = phone;
}
function Person(firstname, middlename, lastname, gender, age, friends){
    this.firstName = firstname;
    this.middleName = middlename;
    this.lastName = lastname;
    this.gender = gender; // this.gender(first) = new property caled gender on the newly created object AND gender(second) = the value that we get from the user that creates this new object 
    this.age = age;
    this.friends = friends;
    this.sayHi = function(){
        console.log(`${this.firstName} says Hi!`);
    };
    this.sayBye = function(){
        console.log(`${this.firstName} says Bye!`);
    },
    this.countFriends= function(){
        console.log(`${this.firstName} has ${this.friends.length} friends!`);
    }
}
let people = [];
// We build new objects with Person constructor function
// It's shorter, easier, reusable and scalable
// We can create as manny objects as we want and we will be sure that all of them have the same property names and methods
let person1 = new Person("Greg","Gregovski","Gregsky","M",45,[new Friend("Jill", 3242343)]);
person1.isHappy = true;
let person2 = new Person("Frank","Franklin","Sinatra","M",29,[new Friend("Albert", 3432542)]);
let person3 = new Person("Anne","Wayne","Annovska","F",33,[]);

let today = new Date();
