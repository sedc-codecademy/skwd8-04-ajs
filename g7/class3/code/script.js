console.log("We are live!");
// JSON

// We hardcode a json STRING
// It's a normal string but the way we write it makes it JSON ( formatting )
// With this we are simulating JSON data, but in the real world we would get this string from some sever or file
let hardcodedJson = `{
"trainer": "Dragan Gelevski",
"assistant": "Damjan Stojanovski",
"students": [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg"
],
"academy": "Code"
}`;
console.log(typeof(hardcodedJson));
// JSON.parse() - converts a JSON formated string in to JS object
let convertedHcJson = JSON.parse(hardcodedJson);
console.log(convertedHcJson);
// JSON.stringify() - converts an object back to JSON formated stirng
let convertedBackHcJson = JSON.stringify(convertedHcJson);
console.log(convertedBackHcJson);

// AJAX REQUESTS
// Vanilla JavaScript request
let btn1 = document.getElementById("btn1");
// response from the outside
let outsideResponse = {};
btn1.addEventListener("click", function(){
    let xhr = new XMLHttpRequest(); // empty request, we need to build it
    xhr.onload = function(){ // function that triggers when we get some response
        console.log("We got a response!");
        // We check the status code ( ALL HTTP REQUESTS HAVE STATUS CODE ) and if it is 2xx then it must be okay. If it is something else that it is probably not okay
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("We successfully got our stuff!");
            let response = JSON.parse(xhr.response);
            console.log(response);
            console.log(response.students[0]);
            // outsideResponse = response;
        } else {
            console.log("Something went wrong!");
            console.log(xhr.responseText); // Will write the text from the response
        }
    }
    // We open a connection so that our request knows what to do and on what address to request the stuff that we need
    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g7/class3/students.json");
    // We send the request
    xhr.send();
})

console.log(outsideResponse);

// JQUERY AJAX REQUEST
// SOME APIS return data and type JSON. JQUERY ajax calls automatically convert JSON if the request has the type JSON in it
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g7/class3/students.json",
        success: function(response){
            console.log("SUCCESS from jquery!!!!!");
            let responseObject = JSON.parse(response);
            console.log(responseObject);
        },
        error: function(response){
            console.log("Something is not right!");
            console.log(response.responseText);
        }
    })
})

// CALL Austronauts API
// If you get an error after successfull request check if you convert to JSON because the response might be converted automatically by jquery
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function(){
    $.ajax({
        url: "http://api.open-notify.org/astros.json",
        success: function(response){
            console.log("SUCCESS from jquery!!!!!");
            // let responseObject = JSON.parse(response);
            console.log(response);
        },
        error: function(response){
            console.log("Something is not right!");
            console.log(response.responseText);
        }
    })
})