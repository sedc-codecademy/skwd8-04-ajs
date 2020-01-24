//using plain js
// document.getElementById("getStudents")
//         .addEventListener('click', function () {
//            let xmlHttpRequest = new XMLHttpRequest();
//            xmlHttpRequest.onload = function () {
//                let successStatus = xmlHttpRequest.status >= 200
//                                         && xmlHttpRequest.status < 300;
//                 if (successStatus) {
//                     let students = JSON.parse(xmlHttpRequest.response);
//                     showStudents(students);
//                 }
//            } 
//            xmlHttpRequest.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class03/students.json");
//            xmlHttpRequest.send();
//         });
// function showStudents(students) {
//     //here we assume that all students have same value for academy
//     document.getElementById("academyName").innerHTML = students[0].academy;
//     let studentsUl = document.getElementById("students");
//     studentsUl.innerHTML = "";
//     for (const student of students) {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(`${student.firstName} ${student.lastName}`));
//         studentsUl.appendChild(li);
//     }
// }

//using jQuery library ($/jQuery is the main, global function that we get from the library)
$(document).ready(function () {
    $("#getStudents").on('click', function () {
            $.ajax({
                url:"https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class03/students.json",
                success: function (data) {
                    let students = JSON.parse(data);
                    showStudents(students);
                },
                error: function (error) {
                    console.log(error);
                }
            });
        });
});

function showStudents(students) {
    //here we assume that all students have same value for academy
    $("#academyName").text(students[0].academy);
    //by convention we start the names of jQuery objects with $
    let $studentsUl = $("#students");
    $studentsUl.empty();
    for (const student of students) {
        let $li = $("<li>");
        $li.text(`${student.firstName} ${student.lastName}`);
        $studentsUl.append($li);
    }
}