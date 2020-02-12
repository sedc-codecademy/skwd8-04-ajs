// BEFORE READING ANY COMMENTS, ANALIZE THE HTML AND THE APP IN BROWSER

// a global object where we keep changable data like "currentPage"
// we keep that kind of data in a state obejct because we could need it in multiple places through our app and it could be changed by different behaviours
const state = {
  pageType: null, // pageType can have two values: "people" and "ships", both strings, primary used for "next page" and "prev page" buttons, we use this property to determine if we want to render People or Ships tables/lists
  currentPage: null // currentPage is used to tell "fetch" which page should get from swapi, by ?page={currentPage} query parameter
}

// The first of the 3 services we have in our app
// This service is named navService or Navigation Service for one reason: 
// this object contains all elements and functinality in our app that has to do with navigation
const navService = {
  peopleBtn: document.getElementById("peopleBtn"),
  shipsBtn: document.getElementById("shipsBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),

  registerListeners: function() { // This method is used to set all event listeners later, in line 155, after the DOM/HTML is loaded
    this.peopleBtn.addEventListener("click", e => {
      state.currentPage = 1;
      state.pageType = "people"
      starWarsService.getPeople(state.currentPage) // We call starWarsService to getPeople from swapi, the flow continues in starWarsService
    });
    this.shipsBtn.addEventListener("click", e => {
      state.currentPage = 1;
      state.pageType = "ships"
      starWarsService.getShips(state.currentPage)
    });
    this.prevBtn.addEventListener("click", this.prevPage);
    this.nextBtn.addEventListener("click", this.nextPage);
  },
  nextPage: function(e) {
    if(state.pageType === "people") {
      state.currentPage++;
      starWarsService.getPeople(state.currentPage); // After we iterate the currentPage by +1, we need to make another call to swapi to get the data from the next page
    }
    else if(state.pageType === "ships") {
      state.currentPage++;
      starWarsService.getShips(state.currentPage); // same as getPeople, but for ships
    }
  },
  prevPage: function(e) {
    if(state.pageType === "people") {
      state.currentPage--;
      starWarsService.getPeople(state.currentPage); // After we iterate the currentPage by -1, we need to make another call to swapi to get the data from the previous page
    }
    else if(state.pageType === "ships") {
      state.currentPage--;
      starWarsService.getShips(state.currentPage); // Same as getPeople, but for ships
    }
  }
}

// The second service of 3
// This service is used to get data from swapi
const starWarsService = {
  url: "https://swapi.co/api", // base URL
  getPeople: function(page) { // In "page" we typcally send currentPage from the state
    const peopleUrl = `${this.url}/people/?page=${page}`; // URL construction
    fetch(peopleUrl)
      .then(res => res.json())
      .then(data => {
        uiService.checkPrevNext(data.previous, data.next); // This method is used to enable or disable "prev" and "next" buttons in the HTML depending whether swapi response json has data.previous and data.next pages
        uiService.renderPeople(data.results); // After everythings is checked, we call renderPeople to generete table/list in the HTML from the data we got from swapi
      })
      .catch(err => console.log(err));
  },
  getShips: function(page) {
    const shipsUrl = `${this.url}/starships/?page=${page}`; // URL construction
    fetch(shipsUrl)
      .then(res => res.json())
      .then(data => {
        uiService.checkPrevNext(data.previous, data.next);
        uiService.renderShips(data.results);
      })
      .catch(err => console.log(err))
  }
}

// The third service of 3
// This service is named uiService or User Interface Service also for one reason:
// this object contains all functionalty that has to do with HTML and Rendering
const uiService = {
  resultNode: document.getElementById("result"), // this is the last <div> in the HTML with id "result", this div is used to render the tables
  // peopleResult: document.getElementById("peopleResult"), // comment line 85 if you use this, and change the JavaScript code appropriately
  // shipsResult: document.getElementById("shipsResult"), // comment line 85 if you use this, and change the JavaScript code appropriately
  renderPeople: function(people) { // In the parameter "people" actually "data.results" is passed from swapi response json, also this method is called in starWarsService, when we finally have successful response(people) from swapi
    // Check the index.html file line 54, if you use peopleResult(line 44) remove this statemnet
    this.resultNode.innerHTML = `
      <div class="row yellow">
        <div class="col-md-3">Name</div>
        <div class="col-md-2">Height</div>
        <div class="col-md-2">Mass</div>
        <div class="col-md-2">Gender</div>
        <div class="col-md-2">Birth Year</div>
        <div class="col-md-1">Films</div>
      </div>
    `;
    for (const person of people) {
      // if you use peopleResult(line 44) then use this.peopleResult instead of this.resultNode
      this.resultNode.innerHTML += `
      <div class="row white">
        <div class="col-md-3">${person.name}</div>
        <div class="col-md-2">${person.height} cm</div>
        <div class="col-md-2">${person.mass} kg</div>
        <div class="col-md-2">${person.gender}</div>
        <div class="col-md-2">${person.birth_year}</div>
        <div class="col-md-1">${person.films.length}</div>
      </div>
      `
    }
  },
  renderShips: function(ships) { // In the parameter "ships" actually "data.results" is passed from swapi response json, also this method is called in starWarsService, when we finally have successful response(ships) from swapi
    // Check the index.html file line 54, if you use shipsResult(line 54) remove this statemnet
    this.resultNode.innerHTML = `
      <div class="row yellow">
        <div class="col-md-3">Name</div>
        <div class="col-md-2">Model</div>
        <div class="col-md-2">Manufacturer</div>
        <div class="col-md-2">Cost</div>
        <div class="col-md-2">Capacity</div>
        <div class="col-md-1">Class</div>
      </div>
    `;
    for (const ship of ships) {
      // if you use shipsResult(line 54) then use this.shipsResult instead of this.resultNode
      this.resultNode.innerHTML += `
      <div class="row white">
        <div class="col-md-3">${ship.name}</div>
        <div class="col-md-2">${ship.model}</div>
        <div class="col-md-2">${ship.manufacturer}</div>
        <div class="col-md-2">${ship.cost_in_credits}</div>
        <div class="col-md-2">${ship.crew + ship.passengers}</div>
        <div class="col-md-1">${ship.starship_class}</div>
      </div>
      `
    }
  },
  checkPrevNext: function(prev, next) { // In "prev" and "next" we pass "data.previous" and "data.next" from the response json from swapi
    if(prev) // checks if data.previous has previous page or not, respectively shows or hides the previous button in HTML
      this.showNode(navService.prevBtn);
    else
      this.hideNode(navService.prevBtn);

    if(next) // checks if data.next has next page or not, respectively shows or hides the next button in HTML
      this.showNode(navService.nextBtn);
    else
      this.hideNode(navService.nextBtn);
  },
  showNode: function(node) {
    node.classList.remove("invisible");
    node.classList.add("visible");
  },
  hideNode: function(node) {
    node.classList.remove("visible");
    node.classList.add("invisible");
  }
}

document.addEventListener("DOMContentLoaded", e => navService.registerListeners()); // All Event Listeners are set after the DOM/HTML is loaded in the Browser, this is equivalent to $(document).ready() in JQuery


// // CHECK THE the HTML FILE AT LINE 42 AND 53 IF YOU DON'T WANT TO USE THIS WORKAROUND
// // Example for adding EventListeners to dynamicly created elements
// let exampleElement = document.getElementById("exampleElement") // Selecting some element in the DOM
// let exampleBtn = document.createElement("button") // Dynamically creating a button
// exampleElement.append(exampleBtn) // Appending the dynamically created button in the DOM(exampleElement)

// document.body.addEventListener('click', e => { // Use this workaround to "bind" an event on a dynamically created element
//   if(e.target === exampleBtn){ // e.target is the HTMLElement that the user clicks, so we simply check if the clicked element is acually the exampleBtn that we dynamically created earlier...
//     console.log("example button clicked!")
//   }
// });
