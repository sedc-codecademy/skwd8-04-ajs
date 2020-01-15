function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getInfo = function () {
        return `This is ${this.firstName} ${this.lastName} from ${this.academy}`;
    };

    this.getAge = function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.getGradesAverage = function () {
        let sum = 0;
        for (let grade of grades) {
            sum += grade;
        }
        return sum / this.grades.length;
    };

}

let martin = new Student("Martin", "Panovski", 1993, "SEDC", [8, 8, 6, 7]);
let dejan = new Student("Dejan", "Jovanov", 1992, "SEDC", [10, 8, 9, 6]);
let ivo = new Student("Ivo", "Kostovski", 1990, "SEDC", [8, 8, 6, 7]);

let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let birthYear = document.getElementById("birthYear");
let academy = document.getElementById("academy");
let grades = document.getElementById("grades");
let tbody = document.getElementsByTagName("tbody")[0];
let btn = document.getElementById("register");

let students = [martin, dejan, ivo];

printStudents(students);

function saveStudent(student) {
    students.push(student);
};

function printStudents(students) {

    for (let student of students) {
        let tr = document.createElement("tr");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let td_3 = document.createElement("td");
        let td_4 = document.createElement("td");
        let td_5 = document.createElement("td");

        let grades = "";
        td_1.innerText = student.firstName;
        td_2.innerText = student.lastName;
        td_3.innerText = student.birthYear;
        td_4.innerText = student.academy;

        for (let i = 0; i < student.grades.length; i++) {
            let grade = student.grades[i];
            grades += i === student.grades.length - 1 ? `${grade}` : `${grade} ,`;
        };

        td_5.innerText = grades;

        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);
        tr.appendChild(td_4);
        tr.appendChild(td_5);

        tbody.appendChild(tr);
    }
}


btn.addEventListener("click", function (e) {
    e.preventDefault();

    let firstNameVal = fName.value;
    let lastNameVal = lName.value;
    let yearOfBirthVal = birthYear.value;
    let academyVal = academy.value;
    let gradesVal = grades.value;
    let studentGradesArr = gradesVal.split(",");

    let newStudent = new Student(firstNameVal, lastNameVal, yearOfBirthVal, academyVal, new Array(studentGradesArr));

    saveStudent(newStudent);
    printStudents(students);
});