let navService = {
    navItems: document.getElementsByClassName("nav-item"),
    navSearch: document.getElementById("citySearchInput"),
    searchBtn: document.getElementById("citySearchBtn"),
    pages: document.getElementById("pages").children,
    activateItem: function(item){
        for (let navItem of this.navItems) {
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    showPage(page){
        for (let pageElement of this.pages) {
            pageElement.style.display = "none";
        }
        page.style.display = "block";
    }, 
    registerNavListeners(){
        for(let i = 0; i < this.navItems.length; i++){
            this.navItems[i].addEventListener("click", function(){
                navService.activateItem(this);
                navService.showPage(navService.pages[i]);
            })
        }
        this.searchBtn.addEventListener("click", function(e){
            e.preventDefault();
            weatherService.city = navService.navSearch.value;
            weatherService.getData();
        })
        
    }
}

let weatherService = {
    apiKey: "74e59f6374abe0d9b758877616ae443b",
    city: "skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
    getData: function(){
        $.ajax({
            url: `${this.apiUrl}?q=${this.city}&units=metric&APPID=${this.apiKey}`,
            success: function (response) {
                console.log('The request succeeded!');
                console.log(response);
            }, 
            error: function(response){
                console.log('The request failed!');
                console.log(response.responseText);
            }
        });
    }
}

navService.registerNavListeners();
console.log(weatherService.getData());