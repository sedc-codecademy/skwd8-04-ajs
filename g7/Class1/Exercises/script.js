// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
// Create a constructor function for Student objects with:
// Properties:
// firstName
// lastName
// birthYear
// academy
// grades - array of numbers
// Methods:
// getAge() - returns age of student
// getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
// getGradesAverage() - returns the average of the student grades
// Create an array with 3 students

function Student(first, last, birth, academy, grades){
    this.firstName = first;
    this.lastName = last;
    this.birthYear = birth;
    this.academy = academy;
    this.grades = grades;
    this.getAge = function(){
        return new Date().getFullYear() - this.birthYear;
    };
    this.getInfo = function(){
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
    };
    this.getGradesAverage = function(){
        let result = 0;
        for (let grade of this.grades) {
            result += grade;
        }
        return result / grades.length;
    };
}

let students = [
    new Student("Bob", "Bobsky", 1992, "Programming", [3,4,5,3,2,3,4]),
    new Student("Jill", "Wayne", 1995, "Design", [3,2,5,5,5,1,4]),
    new Student("Greg", "Gregsky", 1992, "Networks", [3,4,5,5,2,2,3])
];

// 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
// Create a form with first name, last name, birth year and academy
// Create a button for signing up
// The button should create a new Student object and add it in the array of students
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let birthYearInput = document.getElementById("birthYear");
let academyInput = document.getElementById("academy");
let submitBtn = document.getElementsByTagName("button")[0];

submitBtn.addEventListener("click", function(){
    students.push(new Student(firstNameInput.value, lastNameInput.value, birthYearInput.value, academyInput.value));
    firstNameInput.value = lastNameInput.value = birthYearInput.value = academyInput.value = "";
    console.log(students);
});