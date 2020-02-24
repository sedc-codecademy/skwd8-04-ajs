 function sayHello(message){
    console.log(message);
}

// sayHello("Hi there, we are learning Node.js!");


let person = {
    fName: "Dejan",
    lName: "Jovanov",
    age: 24,
    academy: "SEDC"
}

 function getInfo(obj){
    console.log(obj);
}

// getInfo(person.fName);

module.exports = {
    person,
    sayHello,
    getInfo
}

console.log(module);