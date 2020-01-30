console.log('it works')
// api.openweathermap.org/data/2.5/weather?q=****city name****

// Elements
const searchButton = document.getElementById('citySearchBtn')
const searchInput = document.getElementById('citySearchInput')

// Events
searchButton.addEventListener('click', () => {
    const value = searchInput.value;
    if (!value) {
        return;
    }
    getData(value.trim());
})

// Functions
let getData = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
}
