function vratiTri() {
    return 3;
}

vratiTri.myName = "vukashin"
vratiTri.speak = (word) => console.log(`${vratiTri.myName} said: ${word}`)


let students = [
    {
        name: "Vukashin",
        subject: "Advanced.JS",
        academy: "Code"
    },
    {
        name: "Dushko",
        subject: "Advanced.JS",
        academy: "Code"
    },
    {
        name: "Monika",
        subject: "Advanced.JS",
        academy: "Code"
    },
    {
        name: "Anita",
        subject: "Advanced.JS",
        academy: "Code"
    }
]

let studentsMsgs = students.map(s => `Hello ${s.name} is studying ${s.academy} subject: ${s.subject} `)

function printMessage(msg) {
    console.log(msg)
    return msg
}
function printAlert(msg) {
    alert(msg)
}
function printDocument(msg) {
    document.write(msg)
    return msg
}

function printRandom(parametar) {
    parametar.map(msg => 
        Math.random() > 0.5 ? 
        printMessage(msg) : 
        printDocument(msg))
}

function onSquare(n) {
    return n * n
}

let numbers = [2, 3, 5, 8]
numbers.map(n => n * n)
numbers.map(function(n) {
    return onSquare(n)
})


function one() {
    two()
    two()
}

function two() {
    three()
    three()
}

function three() {
    four()
    four()
}

function four() {
    console.log("I am four")
}

// one()

let btnClick = document.getElementById("btnClick")

btnClick.addEventListener("click", e => {
    console.log("This is from btn click")
})

function first(callback) {
    // setTimeout(() => console.log("I am finished"), 0)
    // console.log("I am first")
    setTimeout(() => {
        console.log("I am first")
        callback()
    }, 0)
}

let second = () => console.log("I am second")
let thrid = () => console.log("I am third")

first(second)
first(thrid)
first(() => console.log("I am fifth"))
// second()

// let dejan = 3
// dejan

// fetch("someURL", {})
//     .then(res => res.json())
//     .then(data => console.log(data))

// $.ajax({
//     url: "https://code.jquery.com/jquery-3.4.1.min.js",
//     success: res => {
//         for (let index = 0; index < 100000; index++) {
//             console.log(index)
//         }
//         console.log(res)
//     },
//     error: err => console.log(err),
//     async: false
// })

// second()


let firstNumbers = [1, 2, 5, 7, 2, 9 ]
let secondNumbers = [1, 6, 2, 8, 32, 12, 88, 7, 97]

let diff = (arr1, arr2) => {
    let result = [];
    for (let index = 0; index < arr1.length; index++) {
        const arr1El = arr1[index];
        let goodToGo = true;
        for (let index = 0; index < arr2.length; index++) {
            const arr2El = arr2[index];
            if (arr1El === arr2El) goodToGo = false;
        }
        if (goodToGo) result.push(arr1El)
    }
    for (let index = 0; index < arr2.length; index++) {
        const arr2El = arr2[index];
        let goodToGo = true;
        for (let index = 0; index < arr1.length; index++) {
            const arr1El = arr1[index];
            if (arr1El === arr2El) goodToGo = false;
        }
        if (goodToGo) result.push(arr2El)
    }
    return result;
}

let diffArr = [
    ...flatten(firstNumbers).filter(f => !secondNumbers.includes(f)),
    ...flatten(secondNumbers).filter(s => !firstNumbers.includes(s))
]
let newArr = [
]
for (const num of firstNumbers) {
    newArr.push(num)
}
for (const num of secondNumbers) {
    newArr.push(num)
}

function flatten(arr) {
    return arr.toString().split(",").map(i => Number(i));
}
