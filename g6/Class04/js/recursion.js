//Calculate Factoriel without recursion
//n! = n * (n-1) * (n-2) * ... * 1
//ex: 4! = 4 * 3 * 2 * 1


// function factoriel(n) {
//     let result = 1;
//     for (let i = n; i > 0; i--) {
//         result = result * i;
//     }
//     return result;
// }
// console.log(`factoriel(3) = ${factoriel(3)}`);
// console.log(`factoriel(4) = ${factoriel(4)}`);
// console.log(`factoriel(5) = ${factoriel(5)}`);
// console.log(`factoriel(6) = ${factoriel(6)}`);

//Calculate Factoriel with recursion
//1! = 1
//2! = 2 * 1 = 2 * 1!
//3! = 3 * 2 * 1 = 3 * 2!
//4! = 4 * 3 * 2 * 1 = 4 * 3!
//5! = 5 * 4 * 3 * 2 *  = 5 * 4!
//n! = n * (n-1) * (n-2) * ... * 1 = n * (n - 1)!

//not good
// function factorielWithRecursion(n) {
//     return n * factorielWithRecursion(n - 1);
// }

// factorielWithRecursion(5);//this will throw exception (Uncaught RangeError: Maximum call stack size exceeded)


function factorielWithRecursion(n) {
    if (n === 1)
        return 1;
    return n * factorielWithRecursion(n - 1);
}

let factorielResult = factorielWithRecursion(3);
//3! = 3 * 2!
//2! = 2 * 1!
//1! = 1
//2! = 2 * 1 = 2
//3! = 3 * 2 = 6
console.log(factorielResult);


function factorielWithRecursion(n) {
    if (n === 1)
        return 1;
    return n * factorielWithRecursion(n + 1);
}