$(document).ready(function () {
    
});
//same as above
$(function () {
    $.ajax({
        url:"https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json",
        success: function (response) {
            let students = JSON.parse(response);
            console.log(students);
            solveExercise1(students);
        },
        error: function (error) {
            console.log(error);
        }
    });
});

function solveExercise1(students) {
    // ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it: 
// * All students with an average grade higher than 3
let studentsWithAverageAbove3 = students.filter(s => s.averageGrade > 3);
console.log(studentsWithAverageAbove3);
// * All female student names with an average grade of 5
let femalesWithAverageOf5 = students.filter(s => s.gender === "Female" && s.averageGrade === 5)
                                    .map(s => `${s.firstName} ${s.lastName}`);
console.log(`femalesWithAverageOf5: ${femalesWithAverageOf5}`);                                  
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age  of 24
// * All male students with a name starting with B and average grade over 2

let ageSum = students.reduce(reducer, 0);
let ageAverage = ageSum / students.length;
console.log(ageAverage);

function reducer(sumAge, student) {
    return sumAge + student.age;
}
}

