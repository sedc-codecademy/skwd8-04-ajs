
// let nums = [1, 2, 3, 4, -10, 9, 8];

// let result = nums.reduce((accumulator, currentItem) => {
//     return accumulator + currentItem;
// }, 0);
// console.log(result);


// let resultMap = nums.map(x => {
//     return x + 1;
// });
// console.log(resultMap);


// let filtered = nums.filter(x => {
//     return x > 7
// });
// console.log(filtered);


// let sortAsc = nums.sort((a, b) => {
//     return a - b
// });

// console.log(sortAsc);
// let sortDesc = nums.sort((a, b) => b - a);
// console.log(sortDesc);


// let first = () => console.log("First");
// let second = () => console.log("Second");
// let third = () => console.log("Third");



// first();
// setTimeout(second, 3000);
// third();


// with annonymous function
// setTimeout(function(){ console.log("This happens later!")}, 2000);
// with arrow function
// setTimeout(() =>  console.log("This happens later!"), 4000);

// setTimeout(function(){ console.log("AJAX CALL!")}, 0);


//Callbacks 

let first = () => setTimeout(() => console.log("First thing..."), 1000);
let second = () => console.log("Second thing...");


// first();
// second();

let firstThing = function(callback) {
    setTimeout(function() {
        console.log("First thing....");
        callback();
    }, 1000);
};

// firstThing(second);



// AJAX Call

// function getData(url) {
//     $.ajax({
//         url:  url,
//         success:  function (response) {
//             console.log('The request succeeded!');
//             return  response;
//         },
//         error:  function(response){
//             console.log('The request failed!');
//             return  response.responseText;
//         }
//     });
// }

// function print(response){
//     console.log(response);
// }

// // print(getData("https://swapi.co/api/people/1/"));


// function getData(url, callback) {
//     $.ajax({
//         url:  url,
//         success:  function (data) {
//             console.log('The request succeeded!');
//             callback(data);
//         },
//         error:  function(error){
//             console.log('The request failed!');
//             callback(error.responseText);
//         }
//     });
// }

// getData("https://swapi.co/api/people/1/", print);


// setInterval(function() {
//     console.log("Hi there!");
// }, 1000);


function loop(counter){
    while(counter < 99999){
        console.log(counter);
        counter++;
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    loop(0);
});

