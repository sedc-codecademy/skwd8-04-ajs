console.log("We are live!");
console.log(document); // This returns the whole HTML document
console.log(window); // This returns the whole window object of the browser

// SELECTORS
let wrapper = document.getElementById("wrapper"); // Get element with id wrapper (returns ONE element)
console.log(wrapper);
let elementsInWrapper = wrapper.children; // get all elements that are contained in the wrapper element that we selected (returns COLLECTION of elements)
console.log(elementsInWrapper);
let usefullBtns = document.getElementsByClassName("btn"); // Get elements with that class name (returns COLLECTION of elements)
console.log(usefullBtns);
let header = document.getElementsByTagName("h1")[0]; // Get all elements that are h1 (returns COLLECTION of elements) AND THEN select the one on 0 position in the collection (the first h1) - Even if it is in one line, there are 2 actions.
// 1. Get all elements by tag name
// 2. Get the 0 index element from the result of getElementsByTagName function
console.log(header);
let headerParent = header.parentElement;
console.log(headerParent);

// CHANGING THE DOM
header.innerText = "This is a new text"; // This will replace the element text
header.innerText += ". This will be added after!"; // This will add new text to the previous one
// header.innerText is a normal string. Treat it as such
// "This is a new text" += ". This will be added after!"; // EXAMPLE ONLY TO THE LINE 19 CODE
console.log(header.innerText); // STRING
console.log(wrapper.innerHTML); // STRING
wrapper.innerHTML += "<h4> This is added from JS later! </h4>";
let result = 9000;
wrapper.innerHTML += `<h4> This result is over ${result} </h4>`;
// wrapper.innerHTML = ""; // This will erase all HTML from INSIDE the wrapper element (it will not erease the wrapper element it self)

// CHANGING STYLE
wrapper.style.backgroundColor = "blue";
wrapper.style.color = "white";

// EVENTS
let btn1 = usefullBtns[0];
let btn2 = usefullBtns[1];
let input = document.getElementsByTagName("input")[0];
console.log(input);

// 1 parameter -> click -> The name of the event we want to listen for
// 2 paramter -> function() {} -> A formula ( annonymous function ) that tells the handler what to do when the event happens
// function parameter e/event (optional) -> Will capture the event and put it in the variable e/event
alert(`You wrote ${input.value}!`); // this will be empty
btn1.addEventListener("click", function(e){
    // console.log(e); // -> This will show the event in the console
    alert(`You wrote ${input.value}!`); // this will have the value of the input
});
btn2.addEventListener("click", function(e){
    // console.log(e); // -> This will show the event in the console
    input.value = "";
});
input.addEventListener("keyup", function(e){
    // console.log(e); // -> This will show the event in the console
})
