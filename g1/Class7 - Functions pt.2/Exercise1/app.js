fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json')
    .then(res => res.json())
    .then(students => {
    //   console.table(allStudentsAvgGradeMoreThan3(students));
    //   console.log(fStudentsAvgGrade5(students));
    // console.log(mStudentsSkopjeOver18(students));
    console.log(fAverageGrades(students))
    console.log(mStudentsB(students))
    })
    .catch(err => console.error(err))
// All students with an average grade higher than 3
// => [{..}, {...}];
let allStudentsAvgGradeMoreThan3
    = students => students.filter(s => s.averageGrade > 3);
// All female student names with an average grade of 5
// => ['...', '...'];
let fStudentsAvgGrade5 =
        students => students
                .filter(s => s.gender === "Female"
                            && s.averageGrade === 5)
                .map(f => f.firstName);

// All male student full names who live in Skopje and are over 18 years old // => ['... ...', '... ...']
let mStudentNamesSkopjeOver18 =
            students => students.filter(s => s.gender === 'Male'
                                            && s.city === 'Skopje'
                                            && s.age > 18)
                                .map(s => `${s.firstName} ${s.lastName}`)

// The average grades of all female students over the age of 24
// => 123

let fAverageGrades =
                students => students
                            .filter(s => s.gender === 'Female'
                                            && s.age > 24)
                            .map(f => f.averageGrade)
                            .reduce((sum, avgGrade) => sum + avgGrade, 0)

// All male students with a name starting with B and average grade over 2
// => [{..}, {...}];

let mStudentsB =
                students => students.filter(s => s.gender === 'Male'
                                        && s.averageGrade > 2
                                        && s.firstName[0] === 'B')