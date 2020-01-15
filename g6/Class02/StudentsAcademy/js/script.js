function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
    }

    this.getGradesAverage = function () {
        //calculate sum
        let sum = 0;

        for (const currentGrade of this.grades) {
            sum += currentGrade;//sum = sum + currentGrade;
        }
        return sum / grades.length;
    }
}

let student1 = new Student("Student1", "Student1LastName", 1990, "SEDC", [7, 8, 9]);
let student2 = new Student("Student2", "Student2LastName", 1980, "SEDC", [10, 8, 9]);
let student3 = new Student("Student3", "Student3LastName", 2000, "SEDC", [7, 10, 9]);

let g6 = [student1, student2, student3];

let studentButton = document.getElementById('addStudent');
studentButton.addEventListener('click', function () {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let birthYear = document.getElementById('birthYear').value;
    let academy = document.getElementById('academy').value;
    let grades = document.getElementById('grades').value;

    let gradesAsNumbers = grades.split(',')//['1','2','3','4'] array of strings
                                .map(function(item){return parseInt(item, 10)});
    
    let student = new Student(firstName, lastName, birthYear, academy, gradesAsNumbers);
    g6.push(student);
});
        
