//ajax call using plain javascript
// let xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onload = function() {
//     if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300) {
//         let student = JSON.parse(xmlHttpRequest.response);
//         console.log(`Student: ${student.firstName} ${student.lastName} from academy ${student.academy} was loaded from server`);
//     }
// };
// //HttpMethods: ["GET", "POST", "PUT", "DELETE"]
// //only GET important now
// xmlHttpRequest.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class03/student.json");
// xmlHttpRequest.send();


//exercise:
// make ajax call to starWars api (https://swapi.co/api/people/1/)
// log the received data into console
let xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onload = function() {
    if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300) {
        console.log(xmlHttpRequest.response);
    }
};
xmlHttpRequest.open("GET", "https://swapi.co/api/people/1/");
xmlHttpRequest.send();


//ajax call using jQuery library
// $(document).ready(function () {
//     $.ajax({
//         url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class03/student.json",
//         success: function(data) {
//             console.log(data);
//         },
//         error: function(error) {
//             console.log(error);
//         }
//     });
// });