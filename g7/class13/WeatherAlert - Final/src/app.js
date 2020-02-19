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
    apiKey: "74e59f6374abe0d9b758877616ae444c",
    city: "skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
    currentData: {}, // ?
    getData: function(){
        $.ajax({
            url: `${this.apiUrl}?q=${this.city}&units=metric&APPID=${this.apiKey}`,
            success: function (response) {
                console.log('The request succeeded!');
                console.log(response);
                uiService.loadStatistics(response);
                uiService.loadHourlyTable(response);
            }, 
            error: function(response){
                console.log('The request failed!');
                console.log(response.responseText);
            }
        });
    },
    aggregateStatistics: function(data){
        let temperatureSum = 0;
        let highestTemp = data.list[0];
        let lowestTemp = data.list[0];
        let humiditySum = 0;
        let highestHumidity = data.list[0];
        let lowestHumidity = data.list[0];
        for (let reading of data.list) {
            temperatureSum += reading.main.temp;
            humiditySum += reading.main.humidity;
            if(highestTemp.main.temp < reading.main.temp) highestTemp = reading;
            if(lowestTemp.main.temp > reading.main.temp) lowestTemp = reading;
            if(highestHumidity.main.humidity < reading.main.humidity) highestHumidity = reading;
            if(lowestHumidity.main.humidity > reading.main.humidity) lowestHumidity = reading;
        }
        return {
            temperature:{
                highest: Math.round(highestTemp.main.temp),
                average: Math.round(temperatureSum/data.list.length),
                lowest: Math.round(lowestTemp.main.temp)
            },
            humidity:{
                highest: Math.round(highestHumidity.main.humidity),
                average: Math.round(humiditySum/data.list.length),
                lowest: Math.round(lowestHumidity.main.humidity)
            },
            warmestTime: helperService.unixTimeStampToDate(highestTemp.dt),
            coldestTime: helperService.unixTimeStampToDate(lowestTemp.dt)
        }
    }
}

let uiService = {
    statisticsResult: document.getElementById("statisticsResult"),
    tableResult: document.getElementById("tableResult"),
    loadStatistics: function(data){
        let statisticsData = weatherService.aggregateStatistics(data);
        this.statisticsResult.innerHTML = `
        <div class="row">
            <div class="col-md-6">MAX TEMP: ${statisticsData.temperature.highest} C</div>
            <div class="col-md-6">MAX HUMD: ${statisticsData.humidity.highest} %</div>
        </div>
        <div class="row">
            <div class="col-md-6">AVG TEMP: ${statisticsData.temperature.average} C</div>
            <div class="col-md-6">AVG HUMD: ${statisticsData.humidity.average} %</div>
        </div>
        <div class="row">
            <div class="col-md-6">LOW TEMP: ${statisticsData.temperature.lowest} C</div>
            <div class="col-md-6">LOW HUMD: ${statisticsData.humidity.lowest} %</div>
        </div>
        <h3>Warmest time of the following period: ${statisticsData.warmestTime.toDateString()}</h3>
        <h3>Coldest time of the following period: ${statisticsData.coldestTime.toDateString()}</h3>
        `;
    },
    loadHourlyTable: function(data){
        let readings = data.list;
        tableResult.innerHTML = "";
        for (let reading of readings) {
            let dateTime = helperService.unixTimeStampToDate(reading.dt);
            tableResult.innerHTML += `
            <div class="row">
                <div class="col-md-2"><img src="http://openweathermap.org/img/w/${reading.weather[0].icon}.png"></div>
                <div class="col-md-2">${reading.weather[0].description}</div>
                <div class="col-md-2">${dateTime.toLocaleString()}</div>
                <div class="col-md-2">${Math.round(reading.main.temp)} C (${Math.round(reading.main.feels_like)} C)</div>
                <div class="col-md-2">${Math.round(reading.main.humidity)} %</div>
                <div class="col-md-2">${reading.wind.speed} km/h</div>
            </div>
            `;
        }
    }
}

let helperService = {
    unixTimeStampToDate: function(unixTimeStamp){
        return new Date(unixTimeStamp * 1000);
    }
}

navService.registerNavListeners();
weatherService.getData();