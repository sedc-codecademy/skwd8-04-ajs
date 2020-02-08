// ------------------ PROMISES ---------------------

// CREATING our own simple promise
function first(workTime) {
    return new Promise((resolve, reject) => {

        if(workTime <= 0) {
            reject("This is too short of a work time. Please try again!")
        }

        if(workTime >= 500) {
            reject("This is too long of a work time. Please try again!")
        }

        setTimeout(() => {

            let person = {
                name: "Viktor",
                surrname: "Jakovlev",
                age: 30
            }
            
            resolve(person)
        }, workTime)

    })
}

function second() {
    console.log("Second thing.")
}

//Resolvin promise
first(250)
    .then(response => {
        console.log(response)
        second()
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log("Finally has been invoked")
    }) 


// Handling AJAX call with a promise
function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json",
            success: response => {
                resolve(JSON.parse(response))
            },
            error: error => {
                reject(error)
            }
        })
    })
}

function showDocuments(documents) {
    if(!documents && typeof(documents) != "object"){
        console.log("error")
        return;
    }

    if(documents.length === 0){
        console.log("error")
        return;
    }

    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
}

getDocuments()
    .then(data => {
        console.log("We got the documents!")
        showDocuments(data)
    })
    .catch(error => console.log(error))


// Handling AJAX call with a multimple promises
function getImportantDocuments(documents){
    let importantDocuments = documents.filter(doc => doc.important);

    return new Promise((resolve, reject) => {

        if(importantDocuments.length === 0) {
          reject("There are no important documents!");
        }

        setTimeout(() => {
          resolve(importantDocuments);
        }, 3000);
    })
}

function showDocuments(documents){
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
}

getDocuments()
    .then(data => {
        console.log("We got the documents!");
        return getImportantDocuments(data);
    })
    .then(data => {
        showDocuments(data);
    })
    .catch(error => console.log(error.message));

// using FETCH
fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json")
    .then(response => response.json())
    .then(response => {
        console.log("We got the documents!");
        return getImportantDocuments(response);
    })
    .then(response => showDocuments(response))
    .catch(err => console.log(err))
    .finally(() => console.log("Done"))


// ------------------ ASYNC/AWAIT ---------------------
// this is just syntactic sugar, it works on promises too

function Document(name) {
    this.name = name;
}

let mapObjects = (array) => {
    return array.map(doc => new Document(doc.name))
};

async function getDataAsync() {
    // throw new Error("ja untavme rabotava");
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json");
    let realData = await response.json();

    console.log("this is the real data:", realData);
    let filteredData = await getImportantDocuments(realData); // we are filtering data
    console.log("this is the filtered data:", filteredData);

    let mappedData = mapObjects(filteredData); // we are mapping data
    console.log("this is the mappedData data:", mappedData);

    mappedData.forEach(doc => console.log(doc.name)); // displaying data with high order function
}

//some error handling
try{
    getDataAsync();
    // normal js code
}
catch(error){
    console.log(error);
}
// console.log("i am random text");
