function doSomething() //Block scope
{
    let a = 10;

    if(a == 15)
    {
        let b = 30;
    }
    else if(a == 10)
    {
        let b = 10;
        let a = 10;
    }

    console.log(b);
}

//Function as first class citizents

//as parameter

function a(a, b)
{
    return a + b;
}

function b(c, d)
{
    return c - d;
}

function wrapSummary(e, f)
{
    console.log(e * f);
}

wrapSummary(a(5, 10), b(7, 14));
//as return

function doSomethingElse()
{
    let c = 10;
    return (a, b) => {
        return a * b * c;
    }
}

let do2 = doSomethingElse()

function names()
{
    let firstNames = [' Petko', 'Trajko', 'Petkana', 'Trajkana', 'Paca', 'Pajo', 'Panda', 'Vera', 'Donka', 'Petit'];

    return (f) => { //filterByFirstLetter
        return firstNames.filter((name) => name.charAt(0) === f); //name[0] === f
    }
}

let aa = names();
aa('T');

//fn in var

let fnName = () => {}
// function fnName(){}

function names2()
{
    this.names = [];
    
    this.addName = (name) => {
        this.names.push(name);
    }

    this.findName = (name) =>
    {
        return this.names.filter(item => item === name);
    }

    return this;
}

let n2 = names2();


//HOF reduce

const array1 = [1, 2, 3, 4];
array1.reduce(function(accumulator, currentValue, index){
    console.log(accumulator)
    return accumulator + currentValue;
});

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

let array2 = [1,2,3,4,5,6,7,8,9,10]
    .map((el) => {  return el * 10; })
    .filter((el) => el < 40)
    .reduce((acc, el) => acc + el);

console.log(array2);

let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]



var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
