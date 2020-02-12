# Exercises

## Exercise 1
Create 3 object templates. Academy, Student and Subject. The structure should be:
Academy
* Name - string
* Students - array of Students
* Subjects - array of Subjects
* Start - Date when it starts
* End - Date when it ends
* NumberOfClasses - number of subjects * 10, not settable
* PrintStudents - method that prints all students in console
* PrintSubjects - method that prints all subjects in console

Subject
* Title - string
* NumberOfClasses - default 10, not settable
* isElective - boolean
* Academy - Academy object
* Students - array of Students
* OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

Student
* FirstName - string
* LastName - string
* Age - number
* CompletedSubjects - emptyArray as default, not settable
* Academy - null as default, not settable
* CurrentSubject - null as default, not settable
* StartAcademy - accepts Academy object that it sets to the Academy property of the student
* StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property