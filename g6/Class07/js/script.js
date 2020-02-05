// setTimeout(function () {
//     console.log('This is inside timeout');
// }, 5);
// console.log('After setTimeout');


// //with zero timeout
// setTimeout(function () {
//     console.log('This is inside timeout');
// }, 0);
// //even it has zero timeout it will be scheduled for waiting 
// //(through WebApis and then callback queue)
// console.log('After setTimeout');

//callback functions

// function calculate(num1, num2, callbackCalculator) {
//     console.log(`num1: ${num1}  num2: ${num2}`);
//     //do some long processing
//     //wait for processing of num1 or num2 values from the server
//     callbackCalculator(num1, num2);
// }

// let callbackSum = (number1, number2) => 
//                 console.log(`Callback sum of numbers : ${number1} and ${number2}: ${number1 + number2}`);
// calculate(2, 5, callbackSum);

// $.ajax({
//     url:"https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json",
//     success: callbackSuccess,
//     error: callbackError
// });

// function callbackSuccess(response) {
//     console.log(JSON.parse(response));
// }

// function callbackError(error) {
//     console.log(error);
// }

//good way long running task
// setInterval(() => console.log('Interval handler'), 0);

// $(function () {
//     $('button').on('click', function onClick() {
//         console.log('clicked');//this will fire
//     });
// });


//with for long running task (bad way)
$(function () {
    $('button').on('click', function onClick() {
        console.log('clicked');//this will fire
    });
});

for (let index = 0; true; index++) {
    console.log('Interval handler');
}


