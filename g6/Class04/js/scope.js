// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// let sumResult = sum(4, 7);
// console.log(result);//throws error Uncaught ReferenceError: result is not defined


// with let we have block scope (variable lives inside the brackets, starting from where it is declared)
// with var we have functional scope (variable lives inside the function it is declared, starting from function start, but value is set on the initialization)
// function testScopes() {
//     console.log("variableWithFunctionScope before declaration: " + variableWithFunctionScope);
//     console.log("variableWithBlockScope before declaration: " + variableWithBlockScope);
//     {
//         let variableWithBlockScope = "variableWithBlockScope";
//         var variableWithFunctionScope = "variableWithFunctionScope";
//     }
//     console.log("variableWithFunctionScope: " + variableWithFunctionScope);
//     console.log("variableWithBlockScope: " + variableWithBlockScope);
// }
// testScopes();


//testing global scope
console.log(`globalFunctionScopeVariable: ${globalFunctionScopeVariable}`);
console.log(`globalBlockScopeVariable: ${globalBlockScopeVariable}`);//throws error

let globalBlockScopeVariable = "globalBlockScopeVariable";
var globalFunctionScopeVariable = "globalFunctionScopeVariable";

function testingAccessingGlobalScopeVariables() {
    console.log(`globalBlockScopeVariable: ${globalBlockScopeVariable}`);//throws error
    console.log(`globalFunctionScopeVariable: ${globalFunctionScopeVariable}`);
}
testingAccessingGlobalScopeVariables();
