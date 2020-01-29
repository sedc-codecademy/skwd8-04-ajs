
// ************** First exercise **************

// let list = document.getElementById("namesList");

// let button = document.getElementById("populateList");

// let saveBtn = document.getElementById("save");

// let name = document.getElementById("name");

// let names = ["Martin", "Dejan", "Viktor", "Angela", "Aleksandar"];

// function populateList(listEl, array){
//     listEl.innerHTML = "";
//     for(let name of array){
//         listEl.innerHTML += `<li>${name}</li>`;
//     }
// }

// function addName(name, arr){
//     if(name !== ""){
//         arr.push(name);
//     }
// }

// function clearInput(input){
//     name.value = "";
// }


// button.addEventListener("click", function() {
//     populateList(list, names);
// });

// saveBtn.addEventListener("click", function() {
//     addName(name.value, names);
//     clearInput(name);
// });



// ************** Second exercise **************

// let searchBtn = document.getElementById("searchBtn");

// let searchInput = document.getElementById("search");
// let result = document.getElementById("result");
// let movies = ["Top Gun", "Rambo", "The Irishman", "Gone Girl"];

// function findMovie(searcInput, resElement) {
//     for (let movie of movies) {
//         if (searcInput !== "") {
//             if (searcInput.toLowerCase().trim() === movie.toLowerCase()) {
//                 resElement.style.color = "green";
//                 resElement.innerText = "This movie can be rented!";
//                 break;
//             } else {
//                 resElement.style.color = "red";
//                 resElement.innerText = "This movie can't be rented!";
//             }
//         } else {
//             resElement.style.color = "red";
//             resElement.innerText = "Please enter valid movie name!";
//         }
//     }
// }

// searchBtn.addEventListener("click", function () {
//     findMovie(searchInput.value, result);
// });


let showRemindersBtn = document.getElementById("btnShow");
let addRemindersBtn = document.getElementById("btnAdd");
let showReminders = document.getElementById("btnShow");
let tBody = document.getElementsByTagName("tbody")[0];

let title = document.getElementById("title");
let priority = document.getElementById("priority");
let description = document.getElementById("description");
let color = document.getElementById("color")



function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

let reminders = [];



function addReminder(reminder) {
    reminders.push(reminder);
}

function populateTable(remindersArr) {
    for (let reminder of remindersArr) {
        tBody.innerHTML += `
        <tr>
            <td style="color:${reminder.color}">${reminder.title}</td>
            <td>${reminder.priority}</td>
            <td>${reminder.description}</td>
        </tr>
        `
    }
}

addRemindersBtn.addEventListener("click", function () {
    let newReminder = new Reminder(title.value, priority.value, color.value, description.value);
    addReminder(newReminder);
});

showRemindersBtn.addEventListener("click", function () {
    populateTable(reminders);
});

