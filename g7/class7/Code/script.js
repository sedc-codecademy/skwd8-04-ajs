function first(){
    console.log("This is the first");
}

function second(){
    console.log("This is the second");
}

function third(){
    console.log("This is the third");
}

// first();
// setTimeout(second, 0);
// third();

function slow(){
    let sum = 1;
    for(let i = 1; i < 5000000000; i++){
        sum *= i;
    }
    console.log(sum);
}

// setInterval(() => {
//     slow();
// }, 1000);

// function  makeCall(url){
// 	$.ajax({
// 		url:  url,
// 		success:  function (response) {
// 			console.log('The request succeeded!');
// 			return  response;
// 		},
// 		error:  function(response){
// 			console.log('The request failed!');
// 			return  response.responseText;
// 		}
// 	});
// }
// function  print(results){
// 	console.log(results);
// }
// print(makeCall("https://swapi.co/api/people/1/"));

function  makeCall(url, callback){
	$.ajax({
		url:  url,
		success:  function (response) {
			console.log('The request succeeded!');
            // callback(response)
            callback(response, print);
		},
		error:  function(response){
			console.log('The request failed!');
			callback(response.responseText);
		}
	});
}
// This only prints
function  print(results){
	console.log(results);
}
// We send print here to only print the result
// makeCall("https://swapi.co/api/people/1/", print);

function getHomeworld(url, callback){
    $.ajax({
		url:  url.homeworld,
		success:  function (response) {
            console.log('The request succeeded!');
            callback(url);
			callback(response);
		},
		error:  function(response){
			console.log('The request failed!');
			callback(response.responseText);
		}
	});
}
makeCall("https://swapi.co/api/people/1/",getHomeworld)