let planetService = {
  url: "https://swapi.co/api/planets/?page=",
  getPlanets: function(page){
    return fetch(this.url + page)
    .then(response => response.json())
    .then(data => uiService.printPlanets(data.results))
    .catch(error => console.log(error));
  }
} 

let uiService = {
  getBtn: document.getElementById("getPlanetsBtn"),
  nextBtn: document.getElementById("nextBtn"),
  prevBtn: document.getElementById("previousBtn"),
  result: document.getElementById("result"),
  registerListeners: function(){
    this.getBtn.addEventListener("click", function(){
      planetService.getPlanets(1).then(() => {
        console.log("done")
        uiService.nextBtn.style.display = "block";
        uiService.getBtn.style.display = "none";
      });
    })
    this.nextBtn.addEventListener("click", function(){
      planetService.getPlanets(2).then(() => {
        uiService.prevBtn.style.display = "block";
        uiService.nextBtn.style.display = "none";
      });
    })
    this.prevBtn.addEventListener("click", function(){
      planetService.getPlanets(1).then(() => {
        uiService.nextBtn.style.display = "block";
        uiService.prevBtn.style.display = "none";
      });
    })
  },
  printPlanets: function(planets){
    this.result.innerHTML = "";
    for (let planet of planets) {
      this.result.innerHTML += `<tr>
      <td>${planet.name}</td>
      <td>${planet.population}</td>
      <td>${planet.climate}</td>
      <td>${planet.gravity}</td>
      </tr>
      `;
    }
  }
}

uiService.registerListeners();