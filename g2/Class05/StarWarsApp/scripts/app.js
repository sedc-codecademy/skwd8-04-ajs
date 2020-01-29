// alert("Connection test!")

const btnPeople = document.getElementById("btnPeople");
const btnShips = document.getElementById("btnShips");
const result = document.getElementById("result");
const loader = document.getElementById("loader");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

const getPeople = () => {
    const url = "https://swapi.co/api/people/?page=1";
    toggleLoader(true);
    $.ajax({
        url: url,
        success: (data) => {
            console.log("The request succedeed!", data);
            toggleLoader(false);
            displayPeople(data.results);
        },
        error: (err) => {
            console.log(err);
        }
    })
}

const toggleLoader = (toggle) => {
    if (toggle)
        loader.style.display = 'block';
    else
        loader.style.display = 'none';
}

const displayPeople = (people) => {
    if (people != null) {
        result.innerHTML = '';
        result.innerHTML += `
        <div class="row">
            <div class="col-md-3">Name</div>
            <div class="col-md-2">Height</div>
            <div class="col-md-2">Mass</div>
            <div class="col-md-2">Gender</div>
            <div class="col-md-2">Birth year</div>
            <div class="col-md-1">Films</div>
        </div>`;
        for (const person of people) {
            result.innerHTML += `
        <div class="row">
            <div class="col-md-3">${person.name}</div>
            <div class="col-md-2">${person.height}</div>
            <div class="col-md-2">${person.mass}</div>
            <div class="col-md-2">${person.gender}</div>
            <div class="col-md-2">${person.birth_year}</div>
            <div class="col-md-1">${person.films.length}</div>
        </div>`;
        }
    } else {
        result.innerHTML += '<h2>There is something wrong with the data!</h2>'
    }
}

btnPeople.addEventListener("click", getPeople);