# Lets build WeatherAlert ⛅
## Phases of building an app 🏗
Applications are not built only by coding and drinking coffee. Applications are also built by thinking, researching, planning and testing. All these things are called a development cycle of an application.  Today we are going to build an application. These are the phases that we are going to pass:
* Analyzing and researching
* Planning and discussion
* Coding the planned features
* Testing the code that we have written

### Analyzing and research phase 🔹
We need to make a single page application. This application will have two views: 
* Weather statistics : Weather statistics for the following days including:
	* Average, Highest and Lowest temperature
	* Average, Highest and Lowest humidity
	* Warmest and Coldest time
* Hourly weather stats: A table with weather for the following hours including:
	* Icon for the weather
	* Description of the weather
	* Date and time of the measurements
	* Temperature ( ℃ )
	* Humidity ( % )
	* Wind Speed ( m/s )

The data about the weather will be acquired from an external api. There should also be two navigation links, one for weather statistics and one for hourly data. When clicked it should show the view that it corresponds to ( if hourly data is clicked, the hourly data table should be shown )
#### About the API 🌞
We will be using the [openWeatherMap](https://openweathermap.org/) API. This API is free but requires an account. When you make an account there would be an API keys tab that you can open. There you can find your API key. If there is no API key, you can generate it by clicking on the button on the right that says Generate. With this key you can make 60 calls a minute. Here are some usefull links:

* **API:**https://openweathermap.org/current

* **Weather for a City Link:** https://api.openweathermap.org/data/2.5/forecast?q=CITY-NAME-HERE&units=metric&APPID=API-KEY-HERE
Ex: https://api.openweathermap.org/data/2.5/forecast?q=skopje&units=metric&APPID=64e59f6374abe0d9b758877616ae444b

* **Icon Link:** http://openweathermap.org/img/w/ICON-CODE-HERE.png
Ex: http://openweathermap.org/img/w/10d.png

* **Limit:** 60 per minute

### Planning phase 🔹
In this step we already analysed the stuff that we need and the requirements for the application. Now we have to plan it. Planning is one of the most important part of the development process. We take the whole problem of building the app and create smaller chunks or tasks that we can complete. 
1. Create html page (index.html), js file(app.js), style.css and link them into html page
2. Add bootstrap to index.html
3. Create navbar with links to 3 of the needed pages(Home-statistics, hourly-weather, about)
4. Add log and application name into navbar
5. Add 3 pages (as divs to the html)
6. Add js logic for navbar links
7. Create first page details (add welcome message and text to html)
7.1 Make ajax call to http://api.openweathermap.org/ (find the appropriate url), get the needed data, aggregate it and display it into html
8. Create second page details (hourly data) get the needed data using ajax call from the api(http://api.openweathermap.org/) and display it into html table
9. Create about page details(only html info about us)
### Coding phase 🔹
In this phase we start coding all the tasks that we have planned and written in the planning phase. So we are building and creating the application here. We can always go back and add a task in the planning list if we encounter some feature that we missed in the planning. 

### Testing phase 🔹
This is a phase where we spend time testing our code and checking if the built product correlates with the requirements. When we encounter a problem, missing requirement or something out of place we go back to the coding phase to fix the problems and then go back to testing. This cycle is done when we are satisfied with the complete product. 
