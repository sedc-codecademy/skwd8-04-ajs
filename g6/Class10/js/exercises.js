// # Exercises
// ## Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be:
// Academy
// * Name - string
// * Students - array of Students
// * Subjects - array of Subjects
// * Start - Date when it starts
// * End - Date when it ends
// * NumberOfClasses - number of subjects * 10, not settable
// * PrintStudents - method that prints all students in console
// * PrintSubjects - method that prints all subjects in console

function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;

    //this property will have only the first number of subjects
    //TODO: fix that
    this.numberOfClasses = this.subjects.length * 10;
    
    //check this - student is object
    this.printStudents = () =>  console.log(this.students); //this.students.forEach(student => console.log(student));
    this.printSubjects = () => console.log(this.subjects); //this.subjects.forEach(subject => console.log(subject));
}

// Subject
// * Title - string
// * NumberOfClasses - default 10, not settable
// * isElective - boolean
// * Academy - Academy object
// * Students - array of Students
// * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;

    this.numberOfClasses = 10;

    this.overrideClasses = (number) => {
        if (number >= 3) 
            this.numberOfClasses = number;
    }
}

// Student
// * FirstName - string
// * LastName - string
// * Age - number
// * CompletedSubjects - emptyArray as default, not settable
// * Academy - null as default, not settable 
// * CurrentSubject - null as default, not settable
// * StartAcademy - accepts Academy object that it sets to the Academy property of the student
// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property


function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = (academy) => {
        this.academy = academy;
        this.academy.students.push(this);
    }
    this.startSubject = (subject) => {
        if (!this.academy) {
            console.log(`StartSubject was called but student ${this.firstName} ${this.lastName} has no academy`);
            return;
        }

        if (!this.academy.subjects.includes(subject)) {
            console.log(`StartSubject was called but students academy does not contains passed subject`);
            return;
        }
        
        if (this.currentSubject) //if this.currentSubject has value this(this.currentSubject) will evaluate to true, else to false
            this.completedSubjects.push(this.currentSubject);
        
        this.currentSubject = subject;
        this.currentSubject.students.push(this);
    };
}

let student = new Student('Jane', 'Sandanski', 117);
let academy = new Academy('Vecerna bugarska skola', [], [], new Date(1903, 7, 2), new Date(1903, 7, 12));
let subject = new Subject('Advanced-js', false, academy, []);

student.startAcademy(academy);//should complete without error
student.startSubject(subject);//should log error in the console

academy.subjects.push(subject);//should complete without error
student.startSubject(subject);//should complete without error

console.log('Printing academy students:');
academy.printStudents();
console.log('Printing academy subjects:');
academy.printSubjects();

let cSharpBasic = new Subject('C#-basic', false, academy, []);
academy.subjects.push(cSharpBasic);
student.startSubject(cSharpBasic);//advanced-js should be added to completed-subjects before setting cSharpBasic as currentSubject

console.log('Printing academy students:');
academy.printStudents();
console.log('Printing academy subjects:');
academy.printSubjects();

console.log(`subject.numberOfClasses before override: ${subject.numberOfClasses}`);
subject.overrideClasses(2);//this should not change the value numberOfClasses
console.log(`subject.numberOfClasses after invalid override: ${subject.numberOfClasses}`);
subject.overrideClasses(3);
console.log(`subject.numberOfClasses after valid override: ${subject.numberOfClasses}`);


// ## Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). 
// If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject