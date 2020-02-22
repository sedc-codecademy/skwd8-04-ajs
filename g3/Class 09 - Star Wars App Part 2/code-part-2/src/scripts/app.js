// BEFORE READING ANY COMMENTS, ANALIZE THE HTML AND THE APP IN BROWSER

// a global object where we keep changable data like "currentPage"
// we keep that kind of data in a state obejct because we could need it in multiple places through our app and it could be changed by different behaviours
const state = {
  pageType: null, // pageType can have two values: "people" and "ships", both strings, primary used for "next page" and "prev page" buttons, we use this property to determine if we want to render People or Ships tables/lists
  currentPage: null, // currentPage is used to tell "fetch" which page should get from swapi, by ?page={currentPage} query parameter
  sortBy: null // sortBy property is used to sort elements in the current page
}

// objects representations insead of hard-coded strings
const PageType = {
  people: "people",
  ships: "ships"
}

const SortBy = {
  asc: "asc",
  desc: "desc"
}

const SortProperties = {
  name: "name"
}

// The first of the 4 services we have in our app
// This service is named navService or Navigation Service for one reason: 
// this object contains all elements and functinality in our app that has to do with navigation
const navService = {
  peopleBtn: document.getElementById("peopleBtn"),
  shipsBtn: document.getElementById("shipsBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  peopleName: document.getElementById("peopleName"),
  shipsName: document.getElementById("shipsName"),

  registerListeners: function() { // This method is used to set all event listeners later, in line 155, after the DOM/HTML is loaded
    this.peopleBtn.addEventListener("click", e => {
      state.currentPage = 1;
      state.pageType = PageType.people;
      state.sortBy = null;
      starWarsService.getPeople(state.currentPage); // We call starWarsService to getPeople from swapi, the flow continues in starWarsService
    });
    this.shipsBtn.addEventListener("click", e => {
      state.currentPage = 1;
      state.pageType = PageType.ships;
      state.sortBy = null;
      starWarsService.getShips(state.currentPage);
    });
    this.prevBtn.addEventListener("click", this.prevPage);
    this.nextBtn.addEventListener("click", this.nextPage);

    this.peopleName.addEventListener("click", e => {
      this.updateSortBy();
      starWarsService.getPeople(state.currentPage, SortProperties.name);
    })
    this.shipsName.addEventListener("click", e => {
      this.updateSortBy();
      starWarsService.getShips(state.currentPage, SortProperties.name);
    })
  },
  nextPage: function(e) {
    if(state.pageType === PageType.people) {
      state.currentPage++;
      starWarsService.getPeople(state.currentPage); // After we iterate the currentPage by +1, we need to make another call to swapi to get the data from the next page
    }
    else if(state.pageType === PageType.ships) {
      state.currentPage++;
      starWarsService.getShips(state.currentPage); // same as getPeople, but for ships
    }
  },
  prevPage: function(e) {
    if(state.pageType === PageType.people) {
      state.currentPage--;
      starWarsService.getPeople(state.currentPage); // After we iterate the currentPage by -1, we need to make another call to swapi to get the data from the previous page
    }
    else if(state.pageType === PageType.ships) {
      state.currentPage--;
      starWarsService.getShips(state.currentPage); // Same as getPeople, but for ships
    }
  },
  updateSortBy: function() { // updates the sortBy property in the state automaticaly determened
      if (state.sortBy === SortBy.asc)
        state.sortBy = SortBy.desc;
      else if(state.sortBy === SortBy.desc)
        state.sortBy = SortBy.asc
      else
        state.sortBy = SortBy.asc;
  }
}

// The second service of 4
// This service is used to get data from swapi
const starWarsService = {
  url: "https://swapi.co/api", // base URL
  getPeople: function(page, sortProperty) { // In "page" we typcally send currentPage from the state
    const peopleUrl = `${this.url}/people/?page=${page}`; // URL construction
    uiService.showNode(uiService.loaderNode); // Before we send the request to swapi we are showing the loader onto the HTML
    fetch(peopleUrl)
      .then(res => res.json())
      .then(data => {
        // uiService.hideNode(uiService.loader) // In this moment we know that the request is finished, so we are hiding the loader from the HTML
        uiService.checkPrevNext(data.previous, data.next); // This method is used to enable or disable "prev" and "next" buttons in the HTML depending whether swapi response json has data.previous and data.next pages
        
        const sortedData = sortProperty ? dataService.sort(data.results, sortProperty) : data.results;
        uiService.renderPeople(sortedData); // After everythings is checked, we call renderPeople to generete table/list in the HTML from the data we got from swapi
      })
      .catch(err => this.handleError(err))
      .finally(() => uiService.hideNode(uiService.loaderNode)); // Finally is a better option, because it will be executed even if the promise is rejected
  },
  getShips: function(page, sortProperty) {
    const shipsUrl = `${this.url}/starships/?page=${page}`; // URL construction, if you want to throw an error on purpose(for example: to test the error handling), just mess-up the URL
    uiService.showNode(uiService.loaderNode);
    fetch(shipsUrl)
      .then(res => res.json())
      .then(data => {
        uiService.checkPrevNext(data.previous, data.next);

        const sortedData = sortProperty ? dataService.sort(data.results, sortProperty) : data.results;
        uiService.renderShips(sortedData);
      })
      .catch(err => this.handleError(err))
      .finally(() => uiService.hideNode(uiService.loaderNode));
  },
  handleError: function(errorMsg) { // Check the comment in line 113 in this script to test error handling, or you can just turn off the WI-FI on you laptop to test it
    $("#errorModalBody").text(errorMsg) // Sets the text in the popup to the error message, see the HTML
    $("#errorModal").modal('show') // .modal() is bootstrap built-in method that opens a modal
  }
}

// The third service of 4
const dataService = {
  sort: function(data, sortProperty) {
    if (state.sortBy === SortBy.asc)
      return data.sort((e1, e2) => this.compare(e1[sortProperty], e2[sortProperty]))
    else if (state.sortBy === SortBy.desc)
      return data.sort((e1, e2) => this.compare(e2[sortProperty], e1[sortProperty]))
    else
      return data.sort((e1, e2) => this.compare(e1[sortProperty], e2[sortProperty]))
  },
  compare: function(e1, e2) { // this function is used to help .sort(), you could also add new logic to compare numbers also
    if (typeof e1 === "string" && typeof e2 === "string")
      return e1.localeCompare(e2); // localeCompare, compares the ASCII codes of each character in the string
    else
      return 0;
  }
}

// The fourth service of 4
// This service is named uiService or User Interface Service also for one reason:
// this object contains all functionalty that has to do with HTML and Rendering
const uiService = {
  resultNode: document.getElementById("result"), // this is the last <div> in the HTML with id "result", this div is used to render the tables
  peopleHeaderNode: document.getElementById("peopleHeader"),
  shipsHeaderNode: document.getElementById("shipsHeader"),
  loaderNode: document.getElementById("loader"),
  
  renderPeople: function(people) { // In the parameter "people" actually "data.results" is passed from swapi response json, also this method is called in starWarsService, when we finally have successful response(people) from swapi
    this.hideNode(this.shipsHeaderNode);
    this.showNode(this.peopleHeaderNode);

    this.resultNode.innerHTML = "";
    for (const person of people) {
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
    this.hideNode(this.peopleHeaderNode);
    this.showNode(this.shipsHeaderNode);
  
    this.resultNode.innerHTML = "";
    for (const ship of ships) {
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
