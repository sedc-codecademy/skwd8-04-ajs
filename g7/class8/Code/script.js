console.log("We are live");
// PROMISES

// Function that "works" for a certain ammount of time ( the waiting simulates working )
// We create a function that returns a Promise
function work(workTime){
    // We return a promise because we know this function will have to wait for something
    return new Promise((resolve, reject) =>{
        // Validation if there is no work to be done
        if(workTime <= 0){
            // Whatever we send in this reject, it will transfer in the error paramter in the .catch() ( Automatically connected )
            reject("There is no work to be done :) ");
        } else {
            console.log("Work is being done...");
        }
        // This setTimeout represents working the ammount of time given as parameter
        setTimeout(()=>{
            // Whatever we send in this resolve, it will transfer in the result paramter in the .then() ( Automatically connected )
            resolve("The work is done!");
        }, workTime);
    })
}

// This is a notification function that will notify the user about something in the console
function notification(text){
    console.log("NOTIFICATION");
    console.log(text);
    console.log("NOTIFICATION");
}

// USING PROMISES
// Example to see what a promise looks like and what are its states
// let promise = work(8000);

// Legit way of using this function that returns a promise
// .then(anonymousFunction(result)) - When/If the promise is resolved, the anonymousFunction that we give it, is executed
// The result inside of the anonymousFunction is the result we get from the promise resolve 
// .catch(anonymousFunction(result)) - When the promise is rejected OR if there is any error or issue regarding the promise or Then
// error - parameter that will put the reject data in it
work(1000).then((result) => {
    console.log("The promise is resolved!");
    notification(result);
}).catch((error) =>{
    console.log("The promise is rejected!");
    notification(error);
})
