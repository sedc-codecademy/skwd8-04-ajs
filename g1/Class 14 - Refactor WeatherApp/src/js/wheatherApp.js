//old way

//The OOP way
let navService = {
    searchButton: document.getElementById('citySearchBtn'),
    searchInput: document.getElementById('citySearchInput'),
    navItems: document.getElementsByClassName('nav-item'),
    pages: document.getElementById('pages').children,
    activateItem: function(item) {
        // resetting active state of nav items
        for (const navItem of this.navItems) {
            navItem.classList.remove('active');
        }
        // adding active to clicked nav item
        item.classList.add('active');
    },
    registerNavListeners: function() {
        for (let i = 0; i < this.navItems.length; i++) {
            this.navItems[i].addEventListener('click', function() {
                navService.activateItem(this);
                navService.showPage(i);
            });
        }
        this.searchButton.addEventListener('click', () => {
            const value = this.searchInput.value;
            if (!value) {
                return;
            }
            weatherService.getData(value.trim());
        })
    },
    showPage: function(index) {
        for (const page of this.pages) {
            page.style.display = 'none';
        }
        this.pages[index].style.display = 'block';
    }
}

let weatherService = {
    getData: function(city) {
        fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`
            )
            .then(res => res.json())
            .then(res => {
                console.log(res);
                uiService.loadStatistics(res);
                uiService.loadHourlyData(res);
            })
            .catch(error => console.log(error));
    },
    calculateStatistics: function(data) {
        let temperatureSum = 0;
        let highestTemp = data.list[0];
        let lowestTemp = data.list[0];
        let humiditySum = 0;
        let highestHumidity = data.list[0];
        let lowestHumidity = data.list[0];
        for (const item of data.list) {
            temperatureSum += item.main.temp;
            humiditySum += item.main.humidity;
            if (highestTemp.main.temp < item.main.temp) {
                highestTemp = item;
            }
            if (lowestTemp.main.temp > item.main.temp) {
                lowestTemp = item;
            }
            if (highestHumidity.main.humidity < item.main.humidity) {
                highestHumidity = item;
            }
            if (lowestHumidity.main.humidity > item.main.humidity) {
                lowestHumidity = item;
            }
        }
        return {
            temperature: {
                max: highestTemp.main.temp,
                avg: temperatureSum / data.list.length,
                min: lowestTemp.main.temp
            },
            humidity: {
                max: highestHumidity.main.humidity,
                avg: humiditySum / data.list.length,
                min: lowestHumidity.main.humidity
            },
            warmestTime: new Date(highestTemp.dt * 1000),
            coldestTime: new Date(lowestTemp.dt * 1000)
        };
    }
}

let uiService = {
    statisticsResult: document.getElementById('statisticsResult'),
    tableResult: document.getElementById('tableResult'),
    loadStatistics: function(data) {
        const s = weatherService.calculateStatistics(data);
        this.statisticsResult.innerHTML = '';
        this.statisticsResult.innerHTML = `
      <div class="row">
        <div class="col-md-6">MAX TEMP: ${s.temperature.max} C</div>
        <div class="col-md-6">MAX HUMD: ${s.humidity.max} %</div>
      </div>
      <div class="row">
        <div class="col-md-6">AVG TEMP: ${s.temperature.avg} C</div>
        <div class="col-md-6">AVG HUMD: ${s.humidity.avg} %</div>
      </div>
      <div class="row">
        <div class="col-md-6">MIN TEMP: ${s.temperature.min} C</div>
        <div class="col-md-6">MIN HUMD: ${s.humidity.min} %</div>
      </div>
      <h3>Warmest time of the following period: ${s.warmestTime}</h3>
      <h3>Coldest time of the following period: ${s.coldestTime}</h3>
      `;
    },
    loadHourlyData: function(data) {
        ``;
        this.tableResult.innerHTML = '';
        for (const item of data.list) {
            this.tableResult.innerHTML += `
        <div class="row">
          <div class="col-md-2">
            <img src="http://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="logo" />
          </div>
          <div class="col-md-2">${item.weather[0].description}</div>
          <div class="col-md-2">${new Date(item.dt * 1000).toUTCString()}</div>
          <div class="col-md-2">${item.main.temp.toFixed(0)}C (${item.main.feels_like.toFixed(
          0
        )}C)</div>
          <div class="col-md-2">${item.main.humidity}%</div>
          <div class="col-md-2">${item.wind.speed}km/h</div>
        </div>
        `;
        }
    }
}

let helperService = {

}

navService.registerNavListeners();
//weatherService.getData(navService.searchInput.value);