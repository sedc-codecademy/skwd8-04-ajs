// JSON WITH FETCH

let person = `{
    "name": "Petar",
    "surname": "Petrovski",
    "age": 40,
    "hasDog": true,
    "children": [
        "Tomy",
        "Maria"
    ],
    "animal": {
        "name": "Sharko",
        "breed": "Sharplaninec",
        "bites": false
    }
}`;

// FROM JSON TO OBJECT
let parsedPerson = JSON.parse(person);

// FROM OBJECT TO JSON
let person2 = JSON.stringify(parsedPerson);

fetch('https://api.myjson.com/bins/s908e')
  .then(response => {
    console.log('response:', response);
    console.log('response has arrived');
    // Extract response text and parse JSON to Object - .json()
    return response.json();
  })
  .then(newPerson => {
    console.log('fixedResponse', newPerson);
    showChildren(newPerson);
  });
let ul = document.getElementById('list');
function showChildren(person) {
  for (const child of person.children) {
    ul.innerHTML += `<li>${child}</li>`;
  }
}
let nikola = {
  children: ['Kole', 'David']
};
showChildren(nikola);
