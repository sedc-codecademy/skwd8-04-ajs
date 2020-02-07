// --------- setTimeout --------
// sets the waiting time for the anonymous/arrow function to be executed
// two parameters: a function and value (ms) waiting time
function first(){
    console.log("first function");
}
function next(){
    setTimeout(() => {
        console.log("next");
    }, 3000);
}
function last(){
    console.log("last function");
}
// first();
// next();
// last();

// ------------ setInterval ----------------
// used for repeating code upon a given amount of time
// two parameters: a function and value (ms) repeat time
let btn = document.querySelector("button");

let timeInterval = setInterval(() => {
    console.log("I love JS!");
}, 2000);
btn.addEventListener("click", () => {
    clearInterval(timeInterval);
})