// Hard-coded JSON string, we get this string when we get a response from API
let studentsJson = `
{
    "trainer": "Dejan Blazheski",
    "assistant": "Vukashin Obradovikj",
    "students": [
      "Bob",
      "Samantha",
      "Chris",
      "Jill",
      "Greg"
    ],
    "academy": "Code"
}`
let studentsObject = JSON.parse(studentsJson) // We convert that JSON string into a valid JavaScript Object, so that we can work with it in our app
console.log(studentsObject.trainer)


let testObject = { // We have a JavaScript Object, that we want to send to some API
    masa: "drvena",
    stolce: "plasticno"
}
let testJson = JSON.stringify(test) // First we need to convert that object into a JSON string
console.log(testJson)



// Plain JavaScript way of sending AJAX
let xhr = new XMLHttpRequest()
console.log(xhr.response)
xhr.onload = function() {
    if(xhr.status >= 200 || xhr.status < 300) {
        console.log(xhr)
        console.log(xhr.response)
    }
    else {
        console.log(xhr)
    }
}
xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%203%20-%20AJAX/Exercises/students.json")
xhr.send()

// Using JQuery
$.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%203%20-%20AJAX/Exercises/students.json",
    method: "GET",
    success: (data) => {
        console.log(JSON.parse(data))
    },
    error: function(err) {
        console.log(err)
    }
})

// Using Fetch API, which is built-in JavaScript API like the document API(document object)
fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%203%20-%20AJAX/Exercises/students.json")
.then(res => { 
    console.log(res)
    return res.json()
 })
.then(data => console.log(data))
.catch(err => console.log(err))






$.ajax({
    url: "https://swapi.co/api/people/1",
    success: (data) => {
        console.log(data)
    }
})





let h1Element = document.getElementById("h1Element")
let ulElement = document.getElementById("ulElement")
let btnElement = document.getElementById("btnElement")

btnElement.addEventListener("click", (e) => {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%203%20-%20AJAX/Exercises/students.json")
    .then(res => res.json())
    .then(data => {
        renderTrainer(data.trainer)
        renderStudents(data.students)
    })
})

function renderTrainer(trainer) {
    h1Element.textContent = trainer
}

function renderStudents(students) {
    for (const student of students) {
        let li = document.createElement("li")
        li.textContent = student
        ulElement.append(li)
    }
}

