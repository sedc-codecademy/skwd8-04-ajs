const state = {
  pageType: null,
  currentPage: null
}

const navService = {
  peopleBtn: document.getElementById("peopleBtn"),
  shipsBtn: document.getElementById("shipsBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),

  registerListeners: function() {
    this.peopleBtn.addEventListener("click", e => {
      state.currentPage = 1;
      state.pageType = "people"
      starWarsService.getPeople(state.currentPage)
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
      starWarsService.getPeople(state.currentPage);
    }
    else if(state.pageType === "ships") {
      state.currentPage++;
      starWarsService.getShips(state.currentPage);
    }
  },
  prevPage: function(e) {
    if(state.pageType === "people") {
      state.currentPage--;
      starWarsService.getPeople(state.currentPage);
    }
    else if(state.pageType === "ships") {
      state.currentPage--;
      starWarsService.getShips(state.currentPage);
    }
  }
}

const starWarsService = {
  url: "https://swapi.co/api",
  getPeople: function(page) {
    const peopleUrl = `${this.url}/people/?page=${page}`;
    fetch(peopleUrl)
      .then(res => res.json())
      .then(data => {
        this.checkPrevNext(data.previous, data.next);
        uiService.renderPeople(data.results);
      })
      .catch(err => console.log(err));
  },
  getShips: function(page) {
    const shipsUrl = `${this.url}/starships/?page=${page}`;
    fetch(shipsUrl)
      .then(res => res.json())
      .then(data => {
        this.checkPrevNext(data.previous, data.next);
        uiService.renderShips(data.results);
      })
      .catch(err => console.log(err))
  },
  checkPrevNext: function(prev, next) {
    if(prev)
      uiService.showNode(navService.prevBtn);
    else
      uiService.hideNode(navService.prevBtn);

    if(next)
      uiService.showNode(navService.nextBtn);
    else
      uiService.hideNode(navService.nextBtn);
  }
}

const uiService = {
  resultNode: document.getElementById("result"),
  renderPeople: function(people) {
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
  renderShips: function(ships) {
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
  showNode: function(node) {
    node.classList.remove("invisible");
    node.classList.add("visible");
  },
  hideNode: function(node) {
    node.classList.remove("visible");
    node.classList.add("invisible");
  }
}

document.addEventListener("DOMContentLoaded", e => navService.registerListeners());
