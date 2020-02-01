// // 'use strict'; // ALWAYS ON TOP
// const unsortedNumbers = [2, 5, 8, 1, 10];
// const sortedNumber = unsortedNumbers.sort((a, b) => a - b);

// const sortedNumbersDesc = [];
// unsortedNumbers.forEach(n => sortedNumbersDesc.push(n))
// sortedNumbersDesc.sort((a, b) => b - a);

// // console.log('unsortedNumbers:')
// // console.log(unsortedNumbers)
// // console.log('sortedNumber:')
// // console.log(sortedNumber)
// // console.log('sortedNumbersDesc:')
// // console.log(sortedNumbersDesc)

// Sorting strings:

// const fruits = ['kiwi', 'apple', 'banana'];

// console.log(
//     fruits.sort((a,b) => a.localeCompare(b))
// )

// let a = 'Alek';
// let b = a;
// b += 'AAA';
// // console.log(a)
// // console.log(b)

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// // console.log(arr1)
// // console.log(arr2)

// // *** Pure Functions ***

// // PURE FUNCTION
// let increseByOne = numbers => {
//     let result = [];
//     for (const number of numbers) {
//         result.push(number + 1);
//     }
//     return result;
// }

// // INPURE FUNCTION DEPENDING ON GLOBAL VARIABLE
// const one = 2;
// let increseByOne = numbers => {
//     let result = [];
//     for (const number of numbers) {
//         result.push(number + one);
//     }
//     return result;
// }

// // Inpure func with DOM iteraction
// let increseByOne = numbers => {
//     let result = [];
//     for (const number of numbers) {
//         result.push(number + 1);
//         document.getElementById('result')
//                     .innerHTML += number+1;
//     }
//     return result;
// }

// // Pure func with DOM iteraction
// let increseByOne = (numbers, element) => {
//     let result = [];
//     for (const number of numbers) {
//         result.push(number + 1);
//         element.innerHTML += number+1;
//     }
//     return result;
// }

// let numbers2 = [1, 2, 3];
// let increseByOne = () => {
//     let result = [];
//     for (const number of numbers2) {
//         result.push(number + 1);
//     }
//     return result;
// }

// USE STRICT;
// 'use strict';
// number = 15;
// console.log(number);
// delete number;
// let sum = (num1, num1) => num1 + num1;
// let eval = 5;
// let arguments = 12;
