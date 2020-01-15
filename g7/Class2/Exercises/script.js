// Global functions
function resetInputs(inputs){
    for (let input of inputs) {
        input.value = "";
    }
}

function changeElementsStyle(elements, color, fontSize){
    for (let element of elements) {
        element.style.color = color;
        element.style.fontSize = fontSize + "px";
    }
}
// ## Title Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Text
// * Create a button for generating titles
// * When the button is clicked generate a new h1 element with the color, font size and text from the inputs

let ex1wrapper = document.getElementById("exercise1");
let ex1inputs = ex1wrapper.getElementsByTagName("input");
let ex1button = ex1wrapper.getElementsByTagName("button")[0];
let ex1result = document.getElementById("result1");

// One version of the function that changes values in the HTML directly in style attribute
function generateH1html(resultElement, color, fontSize, text){
    resultElement.innerHTML += `<h1 style="color:${color};font-size:${fontSize}px"> 
    ${text}
    </h1>`;
}

// Another version of the same function but with changing of the style in JavaScript
function generateH1js(resultElement, color, fontSize, text){
    resultElement.innerHTML += `<h1> ${text} </h1>`;
    let allElements = resultElement.children;
    let lastElement = allElements[allElements.length - 1];
    changeElementsStyle([lastElement], color, fontSize);
}

ex1button.addEventListener("click", function(){
    generateH1html(ex1result, ex1inputs[0].value, ex1inputs[1].value, ex1inputs[2].value);
    resetInputs(ex1inputs);
})

// ## List Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Items
// * Create a button for generating unordered lists
// * When the button is clicked generate a new ul element with the color, font size and items from the inputs 
// > Items should be added separated by , in the input

let ex2wrapper = document.getElementById("exercise2");
let ex2inputs = ex2wrapper.getElementsByTagName("input");
let ex2button = ex2wrapper.getElementsByTagName("button")[0];
let ex2result = document.getElementById("result2");

function itemsToListElements(items){
    let result = "";
    for (let item of items) {
        result += `<li> ${item} </li>`
    }
    return result;
}

// Option where we split the ul element and write text in between the <ul> and </ul>
function generateListOpt1(resultElement, color, fontSize, items){
    resultElement.innerHTML = ""; // Reset element
    resultElement.innerHTML += "<ul>";
    let itemsArray = items.split(",");
    // Checks if the input is empty
    if(itemsArray.length === 1 && itemsArray[0] === "") {
        resultElement.innerHTML += "<li> No Items :( </li>";
    } else {
        resultElement.innerHTML += itemsToListElements(items.split(","));
    }
    resultElement.innerHTML += "</ul>";
    let allElements = resultElement.children;
    changeElementsStyle(allElements, color, fontSize);
}

// Option where we first create ul then select it and then fill it with items
function generateListOpt2(resultElement, color, fontSize, items){
    resultElement.innerHTML = ""; // Reset element
    resultElement.innerHTML += `<ul id="list"></ul>`;
    let itemsArray = items.split(",");
    let list = document.getElementById("list");
    if(itemsArray.length === 1 && itemsArray[0] === "") {
        list.innerHTML += "<li> No Items :( </li>";
    } else {
        list.innerHTML += itemsToListElements(items.split(","));
    }
    let allElements = resultElement.children;
    changeElementsStyle(allElements, color, fontSize);
}

ex2button.addEventListener("click", function(){
    console.log("hey")
    generateListOpt2(ex2result, ex2inputs[0].value, ex2inputs[1].value, ex2inputs[2].value);
    resetInputs(ex2inputs);
})