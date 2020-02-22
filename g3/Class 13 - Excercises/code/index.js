class NumFact { // This class represents: one item(row) in the table or one item in the json from numbersapi
  constructor(num, funFact) {
    this.num = num;
    this.funFact = funFact;
  }
}

// The static properties mean that we don't need to create an object from UiService to use it, we can use it directly with the Class
class UiService { // This is the service that we should use to contact the UI
  static table = null; // In this property we will keep the <table> HTML element, initialy it's null
  static tableHead = null; // same as above, but we will keep the <thead> element 
  static tableBody = null; // same as above, but we will keep the <tbody> element

  static createTable(...columns) { // Find the bug with the columns, tip: use console.log()
    this.table = document.createElement("table");
    this.tableHead = document.createElement("thead");
    this.tableBody = document.createElement("tbody");
    this.table.append(this.tableHead);
    this.table.append(this.tableBody);

    const trHead = document.createElement("tr");
    for (const column of columns) {
      const th = document.createElement("th");
      th.textContent = column;
      trHead.append(th);
    }
    this.tableHead.append(trHead);

    const root = document.getElementById("root");
    root.append(this.table);
  }

  static addItemToTable(item) {
    const tr = document.createElement("tr");
    
    for (const key in item) { // for-in loop, loops for each property in an object
      const td = document.createElement("td");
      td.textContent = item[key];
      tr.append(td);
    }

    this.tableBody.append(tr);
  }
}

class AsyncService {
  static async getData(from, to) { // async functions always return promise, if we want to use the returned data, we need to extract it from the promise using .then() or await keyword
    let res = await fetch(`http://numbersapi.com/${from}..${to}`);
    let data = await res.json();
    return data;
  }

  static async printOneByOne(numbers) { // Gets numbers object as parameter(from the api)
    UiService.createTable(Object.keys(new NumFact())); // Generates a sample object from NumFact(), gets the keys from the sample object and sends them to createTable as columns. Find the bug...

    for (const key in numbers) {
      await this.wait(50); // waits 50 ms before it continues with the code
      UiService.addItemToTable(new NumFact(key, numbers[key]));
    }
  }

  static wait(ms) { // The actual waiting is happening in this function
    return new Promise(res => {
      setTimeout(() => res(), ms); // after the timer finishes, res() is beeing executed, the execution of res() automaticaly changes the status of the promise to resolved
    })
  }
}

// class DataService {
//   constructor() {

//   }
// }

document.addEventListener("DOMContentLoaded", async e => { // the event handler also needs to be async because inside we use await...
  // let mySyncService = new AsyncService() // We don't need to create an object from the classes since we are using static methods and properties
  let data = await AsyncService.getData(10, 20); 
  AsyncService.printOneByOne(data); // Even though printOneByOne is an async function(which means that it returns a promise), we don't need it's result that means we are not using await or .then()
});

// let result = (async function() {
//   let mySyncService = new AsyncService()
  
//   console.log(await mySyncService.getData(40, 45))
//   // mySyncService.getData(40, 45).then(data => console.log(data))
// })()

// function print(printFunc) {
//   const data = {
//     "1": "1 is the number of Gods in monotheism.",
//     "2": "2 is the number of stars in a binary star system (a stellar system consisting of two stars orbiting around their center of mass).",
//     "3": "3 is cans of Spam consumed every second in the United States."
//    }

//    for (const key in data) {
//     const element = data[key]
//     printFunc(element)
//    }
// }

// print(console.log)
// print(alert)
// print(document.write)