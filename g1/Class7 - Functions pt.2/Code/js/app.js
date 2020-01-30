// Storing function in variable

let sayHello = name => console.log(`Hello ${name}`);
// sayHello('Alek');

// Storing functions in array and using them
let numberStatsFunctions = [
    num => num > 0 ? 'Positive' : 'Negative',
    num => num % 2 === 0 ? 'Even' : 'Odd',
    num => String(Math.abs(num)).length,
]

// console.log(numberStatsFunctions[0](2));
// console.log(numberStatsFunctions[1](2));
// console.log(numberStatsFunctions[2](2));

// Using functions as arguments

let calculator =
(calculatorFunc, num1a, num2a) => calculatorFunc(num1a, num2a)

let sum = (num1b, num2b) => num1b + num2b;
let difference = (num1c, num2c) => num1c - num2c;

// console.log(calculator(sum, 2, 1))
// console.log(calculator(difference, 10, 5))

// Returning a function from another function

let calculator2 = operator => {
    switch (operator) {
        case '+':
            return (num1, num2) => num1 + num2
        case '-':
            return (num1, num2) => num1 - num2
        default:
            console.log('ERROR');
            break;
    }
}
// console.log(calculator2('+')(1, 2))
// console.log(calculator2('-')(5, 2))

// FUnction with properties and a method

let sayHello2 = name => `Hello there ${name}`;

sayHello2.defaultName = 'Alek';
sayHello2.description = 'This is a func that greets a person';

sayHello2.differentGreeting = name => `Hi ${name}`;

// console.log(sayHello2('Alek'))
//`Hello there Alek`.defaultName
// console.log(sayHello2.defaultName);
// console.log(sayHello2(sayHello2.defaultName));
// console.log(sayHello2.differentGreeting('Bojan'))

// Function arguments

function longestString() {
    console.log(arguments);
    let longest = '';
    for (const argument of arguments) {
        if (argument.length > longest.length) {
            longest = argument;
        }
    }
    return longest;
}

// console.log(longestString('Aleksandar', 'Ivo', 'Bojan'));

// Higher order functions

const students = [
    {
        firstName: 'Alek',
        lastName: 'Kocevski',
        age: 10,
        averageGrade: 3
    },
    {
        firstName: 'Ivo',
        lastName: 'Kostovski',
        age: 30,
        averageGrade: 4
    },
    {
        firstName: 'Dejan',
        lastName: 'Jovanov',
        age: 25,
        averageGrade: 1
    }
]

// *** forEach ***

// without forEach
// for (const student of students) {
//     console.log(`${student.firstName} ${student.lastName}`)
// }

// students.forEach(function (student) {
//     console.log(`${student.firstName} ${student.lastName}`)
// })

// students.forEach(student => console.log(`${student.firstName} ${student.lastName}`))

// FILTER

// without filter
let adults = [];
for (const student of students) {
    if (student.age >= 18) {
        adults.push(student);
    }
}
// console.log(adults)

// with filter

// saving the value in adults2 as a copy of the students array
// let adults2 = students.filter(student => student.age > 17);
// not saving the value
// students.filter(student => student.age > 17);
// console.log(adults2)
// console.log(students)

// VERY BAD CODE
// students.filter(student => console.log(student));

// MAP
// without map
let studentsWithTitle = [];
for (const student of students) {
    student.title = 'Mr.';
    studentsWithTitle.push(student)
}
// console.log(studentsWithTitle)

// with map
let studentsWithTitle2 = 
    students.map(student => {
        student.title = 'Mr.'
        return student;
    })

// console.log(students);
// console.log(studentsWithTitle2);

// Function chaining

let students2 = students
                    .filter(s => s.age > 17)
                    .map(s => {
                        s.lastName = 'Smith';
                        return s;
                    });

// console.log(students2)

let namesMap = students.map(s => s.firstName)
let namesFilter = students.filter(s => s.firstName)
// console.log(namesMap)
// console.log(namesFilter)

// Reduce 
let allGrades = 0;
for (const s of students) {
    if (s.averageGrade > 1) {
        allGrades += s.averageGrade
    }
}
// console.log(allGrades)

let student3 = students
                .filter(s => s.averageGrade > 1)
                .map(s => s.averageGrade)
                .reduce((sum, grade) => sum += grade, 0)

// console.log(student3)


let fruits = ['Orange', 'Apple', 'Banana'];

let newFruits =
fruits.reduce((agr, curr) => agr += ` ${curr}`, 'Fruits:', '')

console.log(newFruits);

// SORT

// console.log(students);
// let sortFunc = arr => {
//     for (let s = 0; s < arr.length; s++) {
//         for (let i = s+1; s < arr.length; s++) {
//             if (arr[s].averageGrade < arr[i].averageGrade) {
//                 const temp = arr[i];
//                 arr[i] = arr[s];
//                 arr[s] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortFunc(students));
let unsortedStudents = students;
let sortedStudents = students
            .sort((a, b) => b.averageGrade - a.averageGrade);

let sortedStudents2 = students.sort();
// console.log(unsortedStudents)
console.log(sortedStudents2)
