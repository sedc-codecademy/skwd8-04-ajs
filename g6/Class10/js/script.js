// document.querySelector('body')
//         .innerHTML = '<p>Hello</p>';

// //same as above
// //document is property of object window
// window.document.querySelector('body')
//         .innerHTML = '<p>Hello</p>';

// console.log(typeof(console));//object
// console.log(typeof(window.console));//object
// console.log(typeof(console.log));//function

// let student = {
//     name: 'Pavle',
//     academy: 'SEDC',
//     sayHello: function () {
//         console.log(`Hello from ${this.name}. I study in ${this.academy}.`)
//     }
// };
// student.sayHello();

// let student2 = {
//     name: 'Ana',
//     academy: 'SEDC',
//     sayHello: function () {
//         //this is not good way
//         //console.log(`Hello from ${student2.name}. I study in ${student2.academy}.`);
//         console.log(`Hello from ${this.name}. I study in ${this.academy}.`);
//     }
// };
// student2.sayHello();

// let katerina = {
//     name: 'Katerina',
//     academy: 'SEDC'
// };
// katerina.sayHello = student2.sayHello;
// katerina.sayHello();//here we get Ana when we do not use this in sayHello function

// function Student(name) {
//     //when we call the function with the new keyword implicitly here is created new Object()
//     this.name = name;
//     this.academy = 'SEDC';
//     this.sayHello = function () {
//         console.log(`Hello from ${this.name}. I study in ${this.academy}.`)
//     }
//     this.setAcademy = function (academy) {
//         this.academy = academy;
//     }
// }

// let darko = new Student('Darko');
// darko.sayHello();
// let stefan = new Student('Stefan');
// stefan.sayHello();
// stefan.setAcademy('new academy');
// console.log('after setting academy');
// stefan.sayHello();

// let vasil = Student('Vasil');//in this case window will be sent as this
// vasil.sayHello();

// let vasil = new Student('Vasil');
// vasil.sayHello();

// let sayHello = vasil.sayHello;//here this is the object that we operate on
// sayHello();//this depends from execution context (here is window)

let testObject = {
    thisValue : this,//here this will be window
    printThisValue: function () {
        console.log('This from function: ' + this);//here this will be object that we are working on
    }
};
console.log('testObject.thisValue: ' + testObject.thisValue);
testObject.printThisValue();
