//Anonymous functions
fetch('https://swapi.co/api/films').then(
    function(response){}, //Success
    function(error){}  //Error
);

function anonimousTest(a, b){
    
    let x = a(1, 5);
    let y = b(4, 6);

    console.log(x, y, x+y);
    console.log(a(4, 10) + b(10, 11));
}

anonimousTest(function(x, y){
    return x + y;
}, function(z,w){
    return z * w;
})


//Arrow function

let arrFunction = () => {}
arrFunction();

fetch('https://swapi.co/api/films').then(
    (response) => {}, //Success
    (error) => {}  //Error
);

//Escape the scope

fetch('https://swapi.co/api/films').then(
    response => {}, //Success 
    error => {}  //Error
);

fetch('https://swapi.co/api/films').then(
    response => response, //Success (response) => {return response;}
    error => error  //Error
);

let arr1 = [1,2,3,4];

arr1.map(x => x - 1); //arr1.map((x) => { return x-1});
arr1.map((x, index) => x-1);
arr1.map((x, index) => { 
    if(index > 1) 
    return x - index + 1;
});

//Self invoked functions
(function(a, b, c){
    console.log('Self invoked');
    console.log(a,b,c)
})(1,2,3);

//NEW FILE
let x = undefined;

function printValueOfX()
{
    console.log(x);
}

(function(){
    x = 15;
    printValueOfX();
})();


/* 
    Create a function (recursive) that will print 10 span elements 
    on screen
*/

function recursionPrint(c)
{
    let span = document.createElement('span');
    span.innerHTML = `Span ${c}`;
    document.body.append(span);

    if(c <= 10)
    recursionPrint(c+1);
}

recursionPrint(1);

/*
    Make 3 functions:
    1. Function takes a number through an argument and returns 
    how many digits it has.

    2. Function takes the same number and returns if it is even (true/false)

    3. Function takes the same number and returns if it is odd (true/false)
*/

function digits(x)
{
    console.log(x.toString().length);
    console.log(`Is even ${x} : ${isEven(x)}`);
    console.log(`Is odd ${x} : ${isOdd(x)}`);
    return x.toString().length;
}

function isEven(x)
{
    return x % 2 === 0;
}

function isOdd(x)
{
    return x % 2 !== 0;
}

//digits(10);
/*
    Use previous exercise, and add Input field on the screen 
    which will accept numbers (test it) and it will execute digits()
    function. Using arrow function to catch the event from input.

    keyup / onkeyup
*/

let i = document.createElement('input');
let time;
let x;
//document.addEventListener('event', () => {})
i.setAttribute('type', 'number');
i.onkeyup = (e) => {
    clearTimeout(time);
    time = setTimeout(() => {
        if(e.target.value && ! isNaN(e.target.value))
        {
            x = e.target.value;
            //digits(x);
        }
    }, 500);
}

document.body.append(i);

/*
    Use previous example and add 2nd input which will also accept 
    numbers, and it will try how many times it can divide number form
    the first input with the number from second input
*/

let i2 = document.createElement('input');
let time2;
let y;

i2.setAttribute('type', 'number');

document.body.append(i2);
i2.onkeyup = (e) => {
    clearTimeout(time2);
    time2 = setTimeout(() => {
        if(e.target.value && ! isNaN(e.target.value))
        {
            y = e.target.value;
            if( ! x )
            {
                console.log('missing X');
                return false;
            }
            else
            console.log(checkDivisionTimes(x, y));
        }
    }, 500);
}

let checkDivisionTimes = (x, y, c) => {
    c = c === undefined ? 0 : c;
    console.log(x,y,c);
    return x >= y ? checkDivisionTimes(x-y, y, c+1) : c;
}