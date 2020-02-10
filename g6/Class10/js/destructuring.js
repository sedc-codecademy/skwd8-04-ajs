let student = {
    id: 0,
    name: 'Petar',
    address: {
        city: 'Skopje',
        title: 'Leninova',
        number: 9
    },
    scores: {
        advancedJs: 9,
        html: 8,
        introductionToPrograming: 10
    }
};

//without desctructuring
// function showInfo(student) {
//     let info = `Student ${student.name} has these scores: `;
//     info += ` advancedJs: ${student.scores.advancedJs}`;
//     info += ` html: ${student.scores.html}`;
//     info += ` introductionToPrograming: ${student.scores.introductionToPrograming}`;
//     console.log(info)
// }

//with desctructuring
function showInfo({name, scores: {advancedJs, html, introductionToPrograming}}) {
    let info = `Student ${name} has these scores: `;
    info += ` advancedJs: ${advancedJs}`;
    info += ` html: ${html}`;
    info += ` introductionToPrograming: ${introductionToPrograming}`;
    console.log(info)
}
showInfo(student);

//let {name, scores: {html}} = student; //declaration and initialization in the same line
let name, html;//declaration
//setting default values for birthDate and for name
({name = 'name not set', scores: {html}, birthDate = new Date(2000, 9,9)} = student);//initialization
console.log(name);//prints Petar
console.log(html);//prints 8
console.log(birthDate);

let rgb = [120, 0, 255];
//let [red, green, blue] = rgb;
//let [red, , blue] = rgb;//ignoring second value of the array
//let [red] = rgb;//getting only the first value
// let [red, ...rest] = rgb;//spread operator
// console.log('red: ' + red);
// console.log('rest: ' + rest);
//console.log('blue: ' + blue);

//let rgbCopy = rgb;//they reference to the same array
// let [...rgbCopy] = rgb;//this is copy from the array
// rgb.push('new value');
// console.log(rgbCopy);
// console.log(rgb);

//will check later
let testString = 'Hello from the code';
let charsArray = [...testString];
testSpreadString(charsArray);


function testSpreadString(params) {
    console.log(params);
}

let numbers = [1, 2, 3, 7, 0];
//let max = Math.max(numbers);

//let max = Math.max.bind(null, numbers);
//above call is same as below
let max = Math.max(...numbers);
//let max = Math.max(1, 2, 3, 7, 0);
console.log(max);

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sum(1, 2, 3));
let numbersToSum = [1, 5, 7, 9];
let newNumber = 87;
let newNumbersToSum = [11, ...numbersToSum, newNumber];
console.log(`newNumbersToSum: ${newNumbersToSum}`)
console.log(sum(...numbersToSum));





