function simple() {
    setTimeout(function () {
        console.log("1. Firsth thing prepearing for second.");
        setTimeout(function () {
            console.log("2. Second thing");
        }, 2000)
    }, 2000)
}


// simple();

function complex() {
    setTimeout(() => {
        console.log("1. First thing prepearing for second.");
        setTimeout(() => {
            console.log("2. Second thing prepearing for third.");
            setTimeout(() => {
                console.log("3. Third thing prepearing for fourth.");
                setTimeout(() => {
                    console.log("4. Fourth thing prepearing for fifth.");
                    setTimeout(() => {
                        console.log("5. Fifth thing prepearing for sixth.");
                        setTimeout(() => {
                            console.log("6. Sixth and last thing.");
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// complex();



function first(workTime) {
    return new Promise((resolve, reject) => {
        if (workTime <= 0) {
            reject("The working time must be greater than zero.");
        } else {
            setTimeout(() => {
                resolve("First thing prepearing for second.");
            }, workTime);
        }
    })
}

function second() {
    console.log("Second thing");
}

// first(0)
//     .then(data => {
//         console.log("We get the data!");
//         console.log(data);
//         second();
//     })
//     .catch(err => console.log("ERROR: " + err))
//     .finally(() => console.log(`Evertything done in ${Math.round(performance.now())} ms.`));




function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json',
            success: function (data) {
                resolve(JSON.parse(data));
            },
            error: function (err) {
                reject(err);
            }
        })
    })
}

function showDocuments(documents) {
    if (!documents || typeof (documents) !== "object") {
        console.log("We have problem getting the documents.")
    }
    if (documents.length === 0) {
        console.log("There are no documents yet!");
    }
    documents.forEach(doc => {
        console.log(`Name: ${doc.name} | Type: ${doc.type} | Size: ${doc.size} MB | Important: ${doc.important}`);
    });
}

function getImportantDocuments(documents) {
    let importantDocs = documents.filter(doc => doc.important);
    return new Promise((resolve, reject) => {
        if (importantDocs.length === 0) {
            reject("There are no important documents!");
        } else {
            setTimeout(() => {
                resolve(importantDocs);
            }, 3000);
        }
    });
}

function checkDocuments(documents) {
    if (!documents || typeof (documents) != "object") {
        throw new Error("Problem with documents!");
    }
    if (documents.length === 0) {
        throw new Error("There is no documents!")
    }
}


// getDocuments()
//     .then(data => {
//         checkDocuments(data);
//         return getImportantDocuments(data);
//     })
//     .then(importantDocs => {
//         // let objDocs = importantDocs.map(doc => {
//         //     return {
//         //         name: doc.name
//         //     }
//         // });
//         // console.log(objDocs);
//         showDocuments(importantDocs);
//     })
//     .catch(err => console.log(err));


let url = 'https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json';
let urlSwapi = 'https://swapi.co/api/people/'
// fetch(urlSwapi)
// .then(res => res.json())
// .then(data => console.log(data.results))//showDocuments(data))
// .catch(err => console.log(err))
// .finally(() => console.log("Done!"));

//Async/await
async function getDataFromApiAsync() {
    let response = await fetch(urlSwapi);
    let data = await response.json();
    console.log(data.results);
}

// getDataFromApiAsync();

// console.log("This will be executed syncronously");


const runFunctions = async () => {

try {
    console.log(await first(0));
    second();
    console.log(`Evertything done in ${Math.round(performance.now())} ms.`);
} catch (error) {
    console.log(error);
}



}

runFunctions();

let currentLocation = window.location.href;

async function showImportantDocs(){
    let documents = await getDocuments();
    checkDocuments(documents);
    let importantDocs = await getImportantDocuments(documents);
    new Toast({message: 'Finished', type: 'danger'});
    showDocuments(importantDocs);
    console.log(`Evertything done in ${Math.round(performance.now())} ms.`);
}

showImportantDocs();









