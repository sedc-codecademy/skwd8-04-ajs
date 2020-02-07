let input = document.getElementById("searchInput");
let display = document.getElementById("display");

let data = [];

(function getData() {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
        .then(response => response.json())
        .then(response => data = response)
        .finally(() => {
            console.log(data);
            renderData(display, data)
            printSumIfIds(data)
        })

})()

function renderData(elemnt, data) {
    elemnt.innerHTML = "";

    for (const user of data) {
        elemnt.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
            </tr>
        `;
    }
}

input.addEventListener("input", filterData)
function filterData() {
    let filteredData = data.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase()))
    renderData(display, filteredData)
    printSumIfIds(filteredData)
}

function printSumIfIds(data) {
    let result = data.reduce((sum, user) => (sum += user.id), 0)
    console.log(result)
}