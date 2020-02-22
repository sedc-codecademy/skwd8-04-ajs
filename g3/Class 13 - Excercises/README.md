# Exercises
## Let's build JavaScript service objects
Service objects are objects no different than any other objects, we call them "sevice objects" or simply "service" because mostly they keep methods that offer us some kind of service, for example: a method that can render data to the UI (HTML/CSS), another method that can read data from the UI (`<input>`, `prompt()`)... They help us organize and categorize the similar functionalities/methods in our app into one "service object", so we can have a better development day.

## How we will build them
All service objects should be written as classes, all properties should be in the consructor, the methods should be in the prototype (outside of the construtor)

### UI Service
*This service object is used to contact the UI*
* Create a table
* Add item to a table
* Show loading gif (bonus)
* Hide loading gif (bonus)

### Async Service
*A requirement in this service object is that every async action should be handled with async-await*  
* Get from-to numbers in one request from http://numbersapi.com/  
Example usage: http://numbersapi.com/4..24
* A method that takes numbers and print them in the table one by one, but waits random seconds between 1-3 before it prints the next number (async for)
* A method that waits random seconds and does nothing (should be used in the previous method)

### Data Service (Bonus)
*Data service offer us service for working with some kind of data*
* Take array and add suffix 