# WeatherAlert ⛅
## Idea ☄
The idea of WeatherAlert is to show the following days weather, so that people can see what the weather is in advance and plan acordingly. The application should be easy to use and should give more data on the weather like humidity and wind speed. The app should also calculate which is the coldest, warmest time, average highest, lowest and avarege humidity as well as wind speed. The application is planned to be a web application and it should be built for desktop only. 
## Requirements 🗺
The web page should be:
* Single page application
* Pages should be navigated through navbar
* Logo and the name of the app in the navbar
* Pages:
  * Home ( statistics page )
    * Temperature ( Highest, Average, Lowest )
    * Humidity ( Highest, Average, Lowest )
    * Warmest and Coldest time of the days ahead
  * Hourly Weather( Table with data )
    * Icon of weather
    * Description of weather
    * Date and Time
    * Temperature
    * Humidity
    * Wind Speed
  * About
    * Text about the app
    * Text about creator
    * Contact info
* Extra requirements
  * Add sort buttons abov the temperature, humidity and wind speed ( ascending and descending )
  * Create a message box that will show when we successfully get a response weather data and error when we don't get data from the API
  * When a request is made, there should be a loader animation while the user is waiting for the request
## Flow 🌈
1. Person opens the web app
2. Right away a welcome title and text is shown
3. Below that statistics about the weather in the coming day
4. The person wants to see hourly weahther
5. Clicks on hourly link on the navbar
6. Imidietly the view changes to hourly table of the weather ( without loading the app again )
7. The person sees the hourly weather in the table 
8. The person wants to see who made this app
9. Clicks on the About link
10. Imidietly the view changes to the about view ( without loading the app again )
