// Basic function scope with var
// function getFullName(firstName, lastName) {
// 	var result = `${firstName} ${lastName}`;
// 	console.log('Inside the function:',result);
// }
// getFullName('Alek', 'Kocevski');
// console.log('Outside the function:',result);

// Basic function scope with let
// function getFullName(firstName, lastName) {
// 	let result = `${firstName} ${lastName}`;
// 	console.log('Inside the function:',result);
// }
// getFullName('Alek', 'Kocevski');
// console.log('Outside the function:',result);

//

// var result = 'Ivo Kostovski';
// function getFullName(firstName, lastName) {
// 	var result = `${firstName} ${lastName}`;
// 	console.log('Inside the function:',result);
// }
// getFullName('Alek', 'Kocevski');
// console.log('Outside the function:', result);

// var result = 'Ivo Kostovski';
// function getFullName(firstName, lastName) {
// 	result = `${firstName} ${lastName}`;
// 	console.log('Inside the function:',result);
// }
// getFullName('Alek', 'Kocevski');
// console.log('Outside the function:', result);

// let result = 'Ivo Kostovski';
// function getFullName(firstName, lastName) {
// 	let result = `${firstName} ${lastName}`;
// 	console.log('Inside the function:',result);
// }
// getFullName('Alek', 'Kocevski');
// console.log('Outside the function:', result);

// let result = 'Ivo Kostovski';
// function getFullName(firstName, lastName) {
// 	result = `${firstName} ${lastName}`;
// 	console.log('Inside the function:',result);
// }
// getFullName('Alek', 'Kocevski');
// console.log('Outside the function:', result);

// var name = 'Alek';
// var name = 'Ivo';
// console.log(name)

// let name = 'Alek';
// let name = 'Ivo';
// console.log(name)

function getFullName(firstName, lastName) {
	if (firstName.length > 1 && lastName.length > 1){
		let blockResult = `${firstName} ${lastName}`;
		var functionResult = `${firstName} ${lastName}`;
        console.log('LET Inside IF', blockResult); 
        console.log('VAR Inside IF', functionResult); 
	}
	// console.log('LET Inside FUNC', blockResult ); 
	console.log('VAR Inside FUNC', functionResult); 
}
getFullName("Cave", "Johnson"); 
// console.log('LET Outside FUNC', blockResult); 
console.log('VAR Outside FUNC', functionResult);