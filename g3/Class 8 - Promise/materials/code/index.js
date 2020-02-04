let numbers = [1, 2, 3, 4, 7, 6]
let names = [
  {
    name: "Dejan",
    type: "Macedonian"
  },
  {
    name: "John",
    type: "Engish"
  }
]

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  sum = sum + number
}


let allNames = "";
for (let index = 0; index < names.length; index++) {
  const element = numbers[index];
  allNames = allNames + element.name
}


let resultNum = numbers.reduce((sum, curr) => sum * curr, 1)
let resultObj = names.reduce((allNames, currentName) => {
  return `${allNames}${currentName.name},`
}, "")


function showTrainers(trainer, assistent, student1, student2) {
  setTimeout(() => {
    console.log(trainer)
    setTimeout(() => {
      console.log(assistent)
      setTimeout(() => {
        console.log(student1)
        setTimeout(() => {
          setTimeout(() => {
            setTimeout(() => {
              console.log("After Finished")
            }, 1000);
            console.log("Finished")
          }, 2000)
          console.log(student2)
        }, 1000);
      }, 1000);
    }, 1000)
  }, 1000)
  return "";
}


// fetch("https://swapi.co/api/starships/9/")
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))

function printName(name, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        console.log(`Hello ${name}!`)
        resolve()
      }
      else {
        reject("Error happend, Math.random() error")
      }
    }, ms);
  })
}

// printName("Dejan", 1000)
//   .then(() => printName("Vukashin", 2000))
//   .then(() => printName("Aleksandar", 1000))
//   .then(() => printName("Dushko", 1000))
//   .then(() => printName("Monika", 1500))
//   // .then(someParameter => console.log(someParameter))
//   .catch(msg => console.log("This is unsuccessful atampt ", msg))

function makeAjax(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success: resolve,
      error: reject
    })
  })
}

// makeAjax("https://swapi.co/api/starshipssss/9/")
//   .then(data => console.log(data))
//   .catch(error => document.write(error.responseText))

  // fetch("https://swapi.co/api/starships/9/")
  //   .then(res => console.log(res))

function numPromise(num, ms = 500) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        let result = num * num
        console.log(result)
        resolve(result)
      }
      else {
        let result = num + num
        console.log(result)
        resolve(result)
      }
    }, ms);
  })
}

// numPromise(8)
//   .then(result1 => numPromise(result1))
//   .then(result2 => numPromise(result2, 2000))
//   .then(result3 => {
//     result3
//   })

//   function fn1(result1){

//   }
//   function fn2(result2){
    
//   }
//   function fn3(result3){
//     result3 + result1
//   }

// numPromise(8)
//   .then(result1 => {
//     numPromise(result1)
//       .then(result2 => {
//         numPromise(result2, 2000)
//           .then(result3 => console.log(result1 + result2 + result3))
//         }
//       )
//     }
//   )

async function numAsync(num) {
  let result1 = await numPromise(num)
  let result2 = await numPromise(result1)
  let result3 = await numPromise(result2)

  console.log(result1 + result2 + result3)
}


// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json")
//   .then(res => res.json())
//   .then(data => {
//     let filteredData = data.filter(d => d.type === "pdf");
//     for (let index = 1; index < filteredData.length; index++) {
//       const element = filteredData[index];
//       setTimeout(() => {
//         console.log(element.name)
//       }, 1000 * index);
//     }
//   })


function printName(name, ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name)
      resolve(4)
    }, ms);
  })
}

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json")
  .then(res => res.json())
  .then(data => data.filter(d => d.type === "pdf"))
  .then(filteredData => {
    printName(filteredData[0].name)
      .then(name => {
        printName(filteredData[1])
          .then(name => console.log("Finished"))
      })
  })

async function printDocuments(url) {
  let res = await fetch(url)
  let data = await res.json()
  let filteredData = data.filter(d => d.type === "pdf")

  for (const doc of filteredData) {
    let result = await printName(doc.name)
  }
}

printDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json")






  // await printName(filteredData[0])
  // await printName(filteredData[1])
  // await printName(filteredData[2])
  // filteredData.forEach(async e => {
  //   await printName(e.name)
  // })