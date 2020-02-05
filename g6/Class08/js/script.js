// Create a button
// When the button is clicked, call the StarWars api for the first person. \
document.querySelector('button')
        .addEventListener('click', () => {
            let personId = document.getElementById('personId').value;

            let xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onload = function () {
                let response = xmlHttpRequest.response;
                console.log(response);
                let person = JSON.parse(response);
                displayPerson(person);
                getSpeciesAndDisplayIt(person.species);
            };
            xmlHttpRequest.open('GET', `https://swapi.co/api/people/${personId}/`);
            xmlHttpRequest.send();
        });

        function getSpeciesAndDisplayIt(url) {
            let xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onload = function () {
                let response = xmlHttpRequest.response;
                console.log(response);
                let species = JSON.parse(response);
                document.getElementById('speciesNameContainer').innerHTML = species.name;
            };
            xmlHttpRequest.open('GET', url);
            xmlHttpRequest.send();
        }

function displayPerson(person) {
    document.getElementById('personNameContainer').innerHTML = person.name;

    document.getElementById('personHeightContainer').innerHTML = person.name;
    document.getElementById('personWeightContainer').innerHTML = person.mass;
    document.getElementById('personEyeColorContainer').innerHTML = person.eye_color;
    document.getElementById('personHairColorContainer').innerHTML = person.hair_color;
}

// Print the person name in an **h1** tag. \
// Print the person stats in a **table**:
// * Height
// * Weight
// * Eye color
// * Hair color

// Bonus:
// Show the species (name) of the character  <br />
// (hint: you are not restricted to only one ajax call)

// **URL:** https://swapi.co/api/people/1 \
// **NOTE:** JQuery will autmatically parse this call (js will not).