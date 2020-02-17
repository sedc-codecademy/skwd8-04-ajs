function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

function AcademyStudent(firstName, lastName, academyName) {
    //calls Person function with explicitly setting its 'this' value to the current object(this)
    Person.call(this, firstName, lastName);
    //Object.setPrototypeOf(this, new Person(firstName, lastName));
    this.academyName = academyName;
}
AcademyStudent.prototype = new Person();
AcademyStudent.prototype.getAcademyName = function () {return this.academyName; };

function UniversityStudent(firstName, lastName, university, faculty) {
    Person.call(this, firstName, lastName);
    //Object.setPrototypeOf(this, new Person(firstName, lastName));
    this.university = university;
    this.faculty = faculty;
}
UniversityStudent.prototype = new Person();

function CodeAcademyStudent(firstName, lastName, hasIndividualProject) {
    AcademyStudent.call(this, firstName, lastName, 'code-academy');
    //Object.setPrototypeOf(this, new AcademyStudent(firstName, lastName, 'code-academy'));
    this.hasIndividualProject = hasIndividualProject;
}
CodeAcademyStudent.prototype = new AcademyStudent();

let codeAcademyStudent = new CodeAcademyStudent('Pavle', 'Trajanov', false);
let universityStudent = new UniversityStudent('Milena', 'Mileva', 'UKIM', 'FINKI');

function DesignStudent(firstName, lastName, isStudentOfTheMonth) {
    AcademyStudent.call(this, firstName, lastName, 'design-academy');
    //Object.setPrototypeOf(this, new AcademyStudent(firstName, lastName, 'design-academy'));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
}
DesignStudent.prototype = new AcademyStudent();

let designStudent = new DesignStudent('Petre', 'Stoilkovski', true);