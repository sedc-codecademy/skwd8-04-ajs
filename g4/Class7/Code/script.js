// ---------------- setTimeout ----------------
// sets the waiting time for the anonymous/arrow function to be executed
// two parameters: a function and value (ms) waiting time
// function first(){
//     console.log("first function");
// }
// function next(){
//     setTimeout(() => {
//         console.log("next");
//     }, 3000);
// }
// function last(){
//     console.log("last function");
// }
// first();
// next();
// last();

// ---------------- setInterval ----------------
// used for repeating code upon a given amount of time
// two parameters: a function and value (ms) repeat time

// let btn = document.querySelector("button");

// let timeInterval = setInterval(() => {
//     console.log("I love JS!");
// }, 2000);
// btn.addEventListener("click", () => {
//     clearInterval(timeInterval);
// })

// ---------------- Callback functions ----------------
// function calculate(callback, num1, num2){
// 	console.log("calculating...");
// 	return callback(num1, num2);
// };


// let result = calculate((x, y) => x + y, 2, 5);
// let result2 = calculate((x, y) => x - y, 10, 5)

// console.log(result);
// console.log(result2);

//two function calls but the first is delayed
// function first(){
// 	setTimeout(()=>console.log("First thing"),1000);
// } 

// function second(){
// 	console.log("Second thing!");
// }

// first();
// second();

//two function calls but the first is delayed ( solved with a callback )

// function first(callback){
// 	setTimeout(() => {
//         callback();
// 		console.log("First thing");
// 	}, 2000);
// }

// first(() => console.log("Second thing!"));

//making an ajax call without callback
function  makeCall(url){
	$.ajax({
		url: url,
		success: function(response) {
			console.log('The request succeeded!');
			return response;
		},
		error: function(response){
			console.log('The request failed!');
			return  response.responseText;
		}
	});
}

function print(results){
	console.log(results);
}

//print(makeCall("https://swapi.co/api/people/1/"));

//making an ajax call with callback
function makeCall(url, callback){
	$.ajax({
		url:  url,
		success: function(response) {
			console.log('The request succeeded!');
			callback(response)
		},
		error:  function(response){
			console.log('The request failed!');
			callback(response.responseText);
		}
	});
}

function print(results){
	console.log(results);
}

makeCall("https://swapi.co/api/people/1/", print);