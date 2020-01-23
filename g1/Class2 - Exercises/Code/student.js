function Student(firstName, lastName, birthYear, academy, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function(){
        return new Date().getFullYear() - this.birthYear;
    }

    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`;
    }
    // grades = [1,2,3]
    this.getGradesAverage = function() {
        let sum = 0;
        for (const grade of this.grades) {
            sum = sum + grade;
        }
        let average = sum / this.grades.length;
        return average;
    }
}

let listOfStudents = [];

let petar = new Student('Petar', 'Petrovski', 1990, 'SEDC', [1, 2, 5]);
listOfStudents.push(petar);

// console.log('Petar:', petar)
let petarsAge = petar.getAge();
// console.log(petar.getGradesAverage());

let stojan = new Student('Stojan', 'Stojanovski', 1903, 'SEDC', [2,5,4,5,1,2]);
listOfStudents.push(stojan);

// console.log(listOfStudents);
// with saving
// console.log(petarsAge)

// without saving, direct call
// console.log(petar.getAge())

// console.log(petar.getInfo());

// ELEMENTS
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let birthYear = document.getElementById('birthYear');
let academy = document.getElementById('academy');
let grades = document.getElementById('grades');
let registerBtn = document.getElementById('register');

let tBody = document.querySelector('tbody');

// EVENT 
registerBtn.addEventListener('click', function() {
    tBody.innerHTML = '';
    let firstName = fName.value;
    let lastName = lName.value;
    let birthYearValue = birthYear.value;
    let academyValue = academy.value;
    let gradesValue = grades.value.split(','); // split returns an array of strings;
    let student = new Student(firstName,lastName, birthYearValue, academyValue, gradesValue)

    listOfStudents.push(student);

    for (const student of listOfStudents) {
        // OPTION 1
        // tBody.innerHTML +=   `<tr>
        //                         <td>${student.firstName}</td>
        //                         <td>${student.lastName}</td>
        //                         <td>${student.birthYear}</td>
        //                         <td>${student.academy}</td>
        //                         <td>${student.grades}</td>
        //                     </tr>`

        // OPTION 2
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        td1.innerText = student.firstName;
        td2.innerText = student.lastName;
        td3.innerText = student.birthYear;
        td4.innerText = student.academy;
        td5.innerText = student.grades;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        
        tBody.appendChild(tr);
    }
})
