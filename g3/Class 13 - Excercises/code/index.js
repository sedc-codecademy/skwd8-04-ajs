class NumFact {
  constructor(num, fact) {
    this.num = num;
    this.fact = fact;
  }
}

// class UiService {
//   constructor() {

//   }
//   createTable(...columns) {

//   }
//   addItemToTable(item) {

//   }
// }

class AsyncService {
  static async getData(from, to) {
    let res = await fetch(`http://numbersapi.com/${from}..${to}`);
    let data = await res.json();
    return data;
  }
  static async printOneByOne(numbers, renderCallback) {
    for (const key in numbers) {
      await this.wait(1000)
      renderCallback(new NumFact(key, numbers[key]))
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
  let data = await AsyncService.getData(5, 10)
  AsyncService.printOneByOne(data, console.log)
})
