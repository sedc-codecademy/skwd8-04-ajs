console.log("Hi there!");

// // JSON parse and JSON stringify
// let academy = {
//     name: "SEDC Web Development",
//     trainer: "Viktor Jakovlev",
//     assistant: "Kristina Spasevska",
//     students: [
//         "Bob Bobsky",
//         "Jon Snow",
//         "Timmy"
//     ]
// }
// console.log(academy);

// let academyJson = JSON.stringify(academy);
// console.log(academyJson);

// let academyJsonToJSobject = JSON.parse(academyJson);
// console.log(academyJsonToJSobject);

// // ---------- the bad way ----------------
// $(document).ready(function(){
//     let button = document.getElementById("sendRequest");
//     let display = document.getElementById("person");

//     let myObject = {};

//     button.addEventListener('click', function() {
//         $.ajax({
//             url: "https://swapi.co/api/people/4/",
//             method: "GET",
//             success: function(response) {
//                 console.log("Success!");
//                 // let myObject = JSON.parse(response);
//                 // JQUERY does this for us
//                 console.log(response);
//                 myObject = response;
//             },
//             error: function(response) {
//                 console.log("Error!");
//                 console.log(response);
//             }
//         })

//         display.innerHTML = "";
//         display.innerHTML += `
//             <p>Name: ${myObject.name}</p>
//             <p>Height: ${myObject.height}</p>
//             <p>Mass: ${myObject.mass}</p>
//             <p>Birthyear: ${myObject.birth_year}</p>
//             <p>Eye color: ${myObject.eye_color}</p>
        
//         `
//     })
// })

// // -------------------the okay way---------------
// $(document).ready(function(){
//     let button = document.getElementById("sendRequest");
//     let display = document.getElementById("person");

//     button.addEventListener('click', function() {
//         $.ajax({
//             url: "https://swapi.co/api/people/4/",
//             method: "GET",
//             success: function(response) {
//                 console.log("Success!");
//                 // let myObject = JSON.parse(response);
//                 // JQUERY does this for us
//                 console.log(response);
                
//                 display.innerHTML = "";
//                 display.innerHTML += `
//                     <p>Name: ${response.name}</p>
//                     <p>Height: ${response.height}</p>
//                     <p>Mass: ${response.mass}</p>
//                     <p>Birthyear: ${response.birth_year}</p>
//                     <p>Eye color: ${response.eye_color}</p>
//                `
//             },
//             error: function(response) {
//                 console.log("Error!");
//                 console.log(response);
//             }
//         })  
//     })
// })

// ---------------the best way----------------
// $(document).ready(function(){
//     let button = document.getElementById("sendRequest");
//     let display = document.getElementById("person");

//     button.addEventListener('click', function() {
//         $.ajax({
//             url: "https://swapi.co/api/people/4/",
//             method: "GET",
//             success: function(response) {
//                 console.log("Success!");
//                 // let myObject = JSON.parse(response);
//                 // JQUERY does this for us
//                 console.log(response);
//                 printInfo(display, response);
                
//             },
//             error: function(response) {
//                 console.log("Error!");
//                 console.log(response);
//             }
//         }) 
//     })
// })

function printInfo(element, object) {
    element.innerHTML = "";
    element.innerHTML += `
        <p>Name: ${object.name}</p>
        <p>Height: ${object.height}</p>
        <p>Mass: ${object.mass}</p>
        <p>Birthyear: ${object.birth_year}</p>
        <p>Eye color: ${object.eye_color}</p>
    `
}

//plain JavaScript Axaj request
// let request = new XMLHttpRequest(); 
// let method = "GET";
// let url = "https://jsonplaceholder.typicode.com/users";

// request.open(method, url);

// request.onload = function() {
//     if(request.status >= 200 && request.status < 300) {
//         // console.log(request.response)
//         // console.log(typeof(request.response))
//         console.log(request.status)
//         let parsedResult = JSON.parse(request.response)
//         console.log(parsedResult)
//         console.log(typeof(parsedResult))
//         console.log("Success");
//     } else {
//         console.log("Error!")
//     }
// }

// request.send();


//-------------Request with fetch, very FANCY--------------
let button = document.getElementById("sendRequest");
let display = document.getElementById("person");

button.addEventListener('click', function(){
    fetch('https://swapi.co/api/people/4/')
    .then(function(response) {  
        // response.json() === JSON.parse(response)
        // here we get a Promise, the data is wrapped inside the Promise
        return response.json(); 
    })
    .then(function(response) {
        // here we have the real data (js object) that we can work with
        printInfo(display, response); 
    })
})

// button.addEventListener('click', getData);
// function getData(){
//     fetch('https://swapi.co/api/people/4/')
//     .then(function(response) {  
//         // response.json() === JSON.parse(response)
//         // here we get a Promise, the data is wrapped inside the Promise
//         return response.json(); 
//     })
//     .then(function(response) {
//         // here we have the real data (js object) that we can work with
//         printInfo(display, response); 
//     })
// }