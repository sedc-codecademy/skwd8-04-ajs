function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function AcademyStudent(firstName, lastName, academyName) {
    Object.setPrototypeOf(this, new Person(firstName, lastName));
    this.academyName = academyName;
}

function UniversityStudent(firstName, lastName, university, faculty) {
    Object.setPrototypeOf(this, new Person(firstName, lastName));
    this.university = university;
    this.faculty = faculty;
}

function CodeAcademyStudent(firstName, lastName, hasIndividualProject) {
    Object.setPrototypeOf(this, new AcademyStudent(firstName, lastName, 'code-academy'));
    this.hasIndividualProject = hasIndividualProject;
}

let codeAcademyStudent = new CodeAcademyStudent('Pavle', 'Trajanov', false);
let universityStudent = new UniversityStudent('Milena', 'Mileva', 'UKIM', 'FINKI');

function DesignStudent(firstName, lastName, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new AcademyStudent(firstName, lastName, 'code-academy'));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
}

let designStudent = new DesignStudent('Petre', 'Stoilkovski', true);