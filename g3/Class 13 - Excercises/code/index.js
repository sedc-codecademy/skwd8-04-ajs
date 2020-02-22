class NumFact {
  constructor(num, fact) {
    this.num = num;
    this.fact = fact;
  }
}

class UiService {
  static table = null;
  static tableHead = null;
  static tableBody = null;

  static createTable(...columns) {
    this.table = document.createElement("table")
    this.tableHead = document.createElement("thead")
    let trHead = document.createElement("tr")
    this.tableHead.append(trHead)
    this.tableBody = document.createElement("tbody")
    this.table.append(this.tableHead)
    this.table.append(this.tableBody)

    for (const column of columns) {
      let th = document.createElement("th")
      th.textContent = column
      trHead.append(th)
    }

    let root = document.getElementById("root")
    root.append(this.table)
  }
  static addItemToTable(item) {
    let tr = document.createElement("tr")
    
    for (const key in item) {
      let td = document.createElement("td")
      td.textContent = item[key];
      tr.append(td)
    }

    this.tableBody.append(tr)
  }
}

class AsyncService {
  static async getData(from, to) {
    let res = await fetch(`http://numbersapi.com/${from}..${to}`);
    let data = await res.json();
    return data;
  }
  static async printOneByOne(numbers) {
    UiService.createTable(...Object.keys(new NumFact()))

    for (const key in numbers) {
      await this.wait(50)
      UiService.addItemToTable(new NumFact(key, numbers[key]))
    }
  }
  static wait(ms) {
    return new Promise(res => {
      setTimeout(() => res(), ms)
    })
  }
}

// class DataService {
//   constructor() {

//   }
// }

// let result = (async function() {
//   let mySyncService = new AsyncService()
  
//   console.log(await mySyncService.getData(40, 45))
//   // mySyncService.getData(40, 45).then(data => console.log(data))
// })()
document.addEventListener("DOMContentLoaded", async e => {
  // let mySyncService = new AsyncService()
  let data = await AsyncService.getData(10, 20)
  AsyncService.printOneByOne(data, console.log)
})
