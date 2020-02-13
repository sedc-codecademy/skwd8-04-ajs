//Excercise 1
function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
function Student(academyName, id, first, last, age){
    Object.setPrototypeOf(this, new Person(first, last, age));
    this.academyName = academyName;
    this.studentId = id;
    this.study = function(){
        console.log(`The studet ${this.firstName} is studying in ${this.academyName} academy!`);
    }
}

let student1 = new Student("Code", 2, "Pepi", "Perovski", 29);
let student2 = new Student("Design", 4, "Viksa", "Viktorovski", 21);
// console.log(student1);
// console.log(student2);
// student1.getFullName();
// student1.study();
