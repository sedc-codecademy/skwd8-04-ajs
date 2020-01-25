let button = document.getElementById("sendRequest");
let display = document.getElementById("person");

button.addEventListener('click', function(){
    fetch('https://swapi.co/api/planets/1/')
    .then(function(response) {  
        return response.json(); 
    })
    .then(function(response) { 
        printInfo(display, response); 
    })
})

function printInfo(element, object) {
    element.innerHTML = "";
    element.innerHTML += `
        <p>Name: ${object.name}</p>
        <p>Rotation Period: ${object.rotation_period}</p>
        <p>Diameter: ${object.diameter}</p>
        <p>Climate: ${object.climate}</p>
        <p>Gravity: ${object.gravity}</p>
        <p>Terrain: ${object.terrain}</p>
        <p>Population: ${object.population}</p>
        <p>Created: ${object.created}</p>
    `
}