class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class UniversityStudent extends Person {
    constructor(firstName, lastName, university, faculty, facultyAccessesSubscribers) {
        super(firstName, lastName);
        this.university = university;
        this.faculty = faculty;
        //if facultyAccessesSubscribers is truthy then it will be saved into this.facultyAccessesSubscribers, otherwise empty array will be saved
        this.facultyAccessesSubscribers = facultyAccessesSubscribers || [];
        this.facultyAccesses = 0;
    }

    //static properties/methods are on class level they can be accessed using class name
    static staticFacultyAccesses = 0;
    
    // static getFacultyName() {
    //     return this.faculty;//here will be returned undefined because class UniversityStudent does not have proeprty faculty (its instances do have)
    // }

    //this property/method is on instance level, it can be accessed only using instances of this class
    //getter for property faculty, will be executed whenever we try to read the value of property faculty
    get faculty() {
        this.facultyAccessesSubscribers.forEach(subscriber => subscriber(this._faculty));
        UniversityStudent.staticFacultyAccesses++;//same as UniversityStudent.staticFacultyAccesses = UniversityStudent.staticFacultyAccesses + 1;
        this.facultyAccesses++;
        //console.log('Getting value of faculty using getter');
        //console.log(this.faculty);this goes into infinite recursion
        return this._faculty;//returns value of property faculty
    }

    //using getters and setter we have encapsulation of our inner logic(inner property types, validation etc.)
    //encapsulation is one of the main principles of 4 Object oriented programming
    //inheritance is also part of the main principles of 4 Object oriented programming 
    set faculty(newValue){
        let allowedFacultyValues = ['Dramski', 'Praven', 'Ekonomski'];
        if (allowedFacultyValues.includes(newValue))
        {
            console.log(`Setting the value of faculty using setter, oldValue: ${this._faculty} newValue: ${newValue}`);
            this._faculty = newValue;//sets faculty property value to newValue
        } 
        else
        {
            console.log(`Value ${newValue} is not allowed for faculty`);
        }       
    }

    static getFacultyName(student) {
        if (student instanceof UniversityStudent)
            return student.faculty;

        throw new Error('getFacultyName was called with invalid parameter that is not UniversityStudent');
    }
}
//UniversityStudent.staticFacultyAccesses = 0;
let universityStudent = new UniversityStudent('Shenka', 'Kolozova', 'UKIM', 'Dramski');
universityStudent.facultyAccessesSubscribers.push(()=> console.log('Faculty accesses subscriber was called'));

let ugdStudent = new UniversityStudent('Mickey', 'Mouse', 'UGD', 'Informatic');