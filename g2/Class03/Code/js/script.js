// console.log('Connected and good to go !');

// JSON EXAMPLE
let jsonExample = `{
    "trainer1": "Dejan Jovanov",
    "trainer2": "Ivo Kostovski",
    "students": [
        "Krsto",
        "Trpe",
        "Martin",
        "Ivana",
        "Monika"
    ],
    "academy": {
        "type": "Web Development",
        "year": 2020,
        "isActive": true
    }
}`;

let jsObject = JSON.parse(jsonExample);

// console.log(jsObject);

// Plain/Vanilla JS request
// let button = document.getElementById("submitBtn")
//     .addEventListener("click", function() {
//         let xhr = new XMLHttpRequest();
//         xhr.onload = function() {
//             console.log('Request is sent');
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 console.log("Request successfull");
//                 let parsedResponse = JSON.parse(xhr.response);
//                 console.log('response from request: ', parsedResponse);
//             } else {
//                 console.log(xhr.responseText);
//             }
//         }
//         xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//         xhr.send();
//     });

// // Jquery AJAX
// $("#submitBtn").on("click", function() {
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/albums",
//         success: function(response) {
//             console.log("Request successfull");
//             // let parsedResponse = JSON.parse(response);
//             console.log('response from request: ', response);
//         },
//         error: function(response) {
//             console.log('The request failed because of: ', response);
//         }
//     })
// });

// FETCH
let button = document.getElementById("submitBtn").addEventListener('click', () => {
    fetch('http://api.open-notify.org/astros.json')
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            console.log(myJson);
        });
});