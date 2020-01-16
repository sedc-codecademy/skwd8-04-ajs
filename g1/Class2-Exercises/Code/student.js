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

let petar = new Student('Petar', 'Petrovski', 1990, 'SEDC', [1, 2, 5]);
console.log('Petar:', petar)
let petarsAge = petar.getAge();
console.log(petar.getGradesAverage());

let stojan = new Student('Stojan', 'Stojanovski', 1903, 'SEDC', [2,5,4,5,1,2]);

// with saving
// console.log(petarsAge)

// without saving, direct call
// console.log(petar.getAge())

// console.log(petar.getInfo());