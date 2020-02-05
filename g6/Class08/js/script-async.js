// Create a button
// When the button is clicked, call the StarWars api for the first person. \
document.querySelector('button')
        .addEventListener('click', () => {
            let personId = document.getElementById('personId').value;

            getData(personId);
            console.log('after async function');
        });

        async function getData(personId) {
            console.log('before first callApi');
            try {
                let person = await callApi(`https://swapi.co/api/people/${personId}/`);
                console.log('after first callApi');
                displayPerson(person);
                //throw new Error('Something happen'); this will be catched by catch method
                let species = await callApi(person.species);
                document.getElementById('speciesNameContainer')
                        .innerHTML = species.name;
            } catch (error) {
                console.log(`Expected error: ${error}`);
            }
            
        }

        function callApi(url) {
            return new Promise((resolve, reject) => {
                let xmlHttpRequest = new XMLHttpRequest();
                xmlHttpRequest.onload = function () {
                    //something wrong happened
                    reject('something wrong happened');
                    //after reject code will not be executed
                    if (xmlHttpRequest.status > 299)
                        reject('unsucessfull response code');
                    else
                    {
                        let response = xmlHttpRequest.response;
                        console.log(response);
                        let dataParsed = JSON.parse(response);
                        resolve(dataParsed);
                    }
                };
                xmlHttpRequest.open('GET', url);
                xmlHttpRequest.send();
                });
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