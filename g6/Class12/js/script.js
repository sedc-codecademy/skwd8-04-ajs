// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

class ParameterlessPerson {
    //by default we get parameterless constructor
    // constructor() {//we do not need to explicitly write this

    // }
    saySomething(){
        console.log('I am ParameterlessPerson');
    }
}
let parameterlessPerson = new ParameterlessPerson();

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('Mickey', 'Mouse');

// function AcademyStudent(firstName, lastName, academyName) {
//     //calls Person function with explicitly setting its 'this' value to the current object(this)
//     Person.call(this, firstName, lastName);
//     //Object.setPrototypeOf(this, new Person(firstName, lastName));
//     this.academyName = academyName;
// }
// AcademyStudent.prototype = new Person();
// AcademyStudent.prototype.getAcademyName = function () {return this.academyName; };

class AcademyStudent extends Person {
    constructor(firstName, lastName, academyName){
        //we call here parent class(Person) constructor
        super(firstName, lastName);
        this.academyName = academyName;
    }

    //instance method (defined for instances of this class or instances of classes that inherit from this class)
    getAcademyName(){
        return this.academyName;
    }
}
let academyStudent = new AcademyStudent('Gorgi', 'Kolozov', 'Seavus');
console.log(academyStudent instanceof AcademyStudent);//true
console.log(academyStudent instanceof Person);//true
console.log(academyStudent instanceof Object);//true
console.log(academyStudent instanceof Array);//false

// function UniversityStudent(firstName, lastName, university, faculty) {
//     Person.call(this, firstName, lastName);
//     //Object.setPrototypeOf(this, new Person(firstName, lastName));
//     this.university = university;
//     this.faculty = faculty;
// }
// UniversityStudent.prototype = new Person();

class UniversityStudent extends Person {
    constructor(firstName, lastName, university, faculty) {
        super(firstName, lastName);
        this.university = university;
        this.faculty = faculty;
    }

    // static getFacultyName() {
    //     return this.faculty;//here will be returned undefined because class UniversityStudent does not have proeprty faculty (its instances do have)
    // }

    //getter for property faculty, will be executed whenever we try to read the value of property faculty
    get faculty() {
        console.log('Getting value of faculty using getter');
        return this._faculty;//returns value of property faculty
    }

    //using getters and setter we have encapsulation of our inner logic(inner property types, validation etc.)
    //encapsulation is one of the main principles of 4 Object oriented programming
    //inheritance is also part of the main principles of 4 Object oriented programming 
    set faculty(newValue){
        let allowedFacultyValues = ['Dramski', 'Praven', 'Ekonomski'];
        if (allowedFacultyValues.includes(newValue))
        {
            console.log(`Setting the value of faculty using setter, oldValue: ${this._faculty} newValue: ${newValue}`);
            this._faculty = newValue;//sets faculty property value to newValue
        } 
        else
        {
            console.log(`Value ${newValue} is not allowed for faculty`);
        }       
    }

    static getFacultyName(student) {
        if (student instanceof UniversityStudent)
            return student.faculty;

        throw new Error('getFacultyName was called with invalid parameter that is not UniversityStudent');
    }
}
let universityStudent = new UniversityStudent('Shenka', 'Kolozova', 'UKIM', 'Dramski');
//console.log(universityStudent.getFacultyName());throws error (static method is not part of instances)
//console.log(UniversityStudent.getFacultyName(universityStudent));
console.log(`Getting faculty value using getter: ${universityStudent.faculty}`);
universityStudent.faculty = 'Praven';//this will call setter of property faculty
console.log(`Getting faculty value using getter: ${universityStudent.faculty}`);
console.log(`Value of faculty: ${universityStudent.faculty} before setting invalid value`);
universityStudent.faculty = 'Bezbednost';
console.log(`Value of faculty: ${universityStudent.faculty} after setting invalid value`);

//console.log(UniversityStudent.getFacultyName(person));throws our error, if we did not throw it undefined would be returned

console.log(universityStudent.__proto__ === Object.getPrototypeOf(universityStudent));

console.log(universityStudent.getFullName());//works as expected
//console.log(UniversityStudent.getFullName());//throws error because getFullName is instance method

console.log(person.getFullName());//works as expected
//console.log(Person.getFullName());//throws error because getFullName is instance method
Object.getPrototypeOf(person);//this method(getPrototypeOf) is example for static method

//TODO: finish with the converting these two constructor functions to classes
// function CodeAcademyStudent(firstName, lastName, hasIndividualProject) {
//     AcademyStudent.call(this, firstName, lastName, 'code-academy');
//     //Object.setPrototypeOf(this, new AcademyStudent(firstName, lastName, 'code-academy'));
//     this.hasIndividualProject = hasIndividualProject;
// }
// CodeAcademyStudent.prototype = new AcademyStudent();

// let codeAcademyStudent = new CodeAcademyStudent('Pavle', 'Trajanov', false);
// let universityStudent = new UniversityStudent('Milena', 'Mileva', 'UKIM', 'FINKI');

// function DesignStudent(firstName, lastName, isStudentOfTheMonth) {
//     AcademyStudent.call(this, firstName, lastName, 'design-academy');
//     //Object.setPrototypeOf(this, new AcademyStudent(firstName, lastName, 'design-academy'));
//     this.isStudentOfTheMonth = isStudentOfTheMonth;
// }
// DesignStudent.prototype = new AcademyStudent();

// let designStudent = new DesignStudent('Petre', 'Stoilkovski', true);