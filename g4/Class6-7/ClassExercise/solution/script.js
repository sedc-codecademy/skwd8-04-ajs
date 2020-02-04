let inputName = document.getElementById("name");
let inputUsername = document.getElementById("username");
let inputEmail = document.getElementById("email");
let display = document.getElementById("display");

let data = [];

(function getUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
        .then(data => data.json()) 
        .then(response => {
            data = response 
        })
        .finally(() => {    
            displayUsers(display, data);
            printSumOfTheIDs(data);
        })
})()

inputName.addEventListener("input", filterDataByName);
function filterDataByName() {
    let filteredResult = data.filter(user => user.name.toLowerCase().includes(inputName.value.toLowerCase()))

    displayUsers(display, filteredResult);
    printSumOfTheIDs(filteredResult);
}

inputUsername.addEventListener("input", filterDataByUsername);
function filterDataByUsername() {
    let filteredResult = data.filter(user => user.username.toLowerCase().includes(inputUsername.value.toLowerCase()))

    displayUsers(display, filteredResult);
    printSumOfTheIDs(filteredResult);
}

inputEmail.addEventListener("input", filterDataByEmail);
function filterDataByEmail() {
    let filteredResult = data.filter(user => user.email.toLowerCase().includes(inputEmail.value.toLowerCase()))

    displayUsers(display, filteredResult);
    printSumOfTheIDs(filteredResult);
}

function displayUsers(element, data) {
    element.innerHTML = "";

    for (const item of data) {
        element.innerHTML += `
        <tr id=${item.id}>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
        </tr>
        `
    }
}

function printSumOfTheIDs(data) {
    console.log("ID sum: ", data.reduce((acc, item) => (acc += item.id), 0))
} 

