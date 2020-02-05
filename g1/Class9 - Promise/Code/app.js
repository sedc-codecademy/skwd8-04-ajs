// function calculate(callback, num1, num2) {
//   console.log('calculating...');
//   return callback(num1, num2);
// }

// let result = calculate((x, y) => x + y, 2, 5);
// console.log(result);

// function first() {
//   console.log('Frst thing!');
// }
// function second() {
//   console.log('Second thing');
// }
// first();
// second();

// function first() {
//   setTimeout(() => console.log('First thing'), 1000);
// }
// function second() {
//   console.log('Second thing!');
// }

// first();
// second();

// function first(callback) {
//   setTimeout(() => {
//     console.log('First thing');
//     callback();
//   }, 1000);
// }
// function second() {
//   console.log('Second thing!');
// }
// first(second);

// function makeCall(url) {
//   $.ajax({
//     url: url,
//     success: function(response) {
//       console.log('The request succeeded!');
//       return response;
//     },
//     error: function(response) {
//       console.log('The request failed!');
//       return response.responseText;
//     }
//   });
// }
// function print(results) {
//   console.log(results);
// }
// print(makeCall('https://swapi.co/api/people/1/'));

// function makeCall(url, callback) {
//   $.ajax({
//     url: url,
//     success: function(response) {
//       console.log('The request succeeded!');
//       callback(response);
//     },
//     error: function(response) {
//       console.log('The request failed!');
//       callback(response.responseText);
//     }
//   });
// }
// function print(results) {
//   console.log(results);
// }

// makeCall('https://swapi.co/api/people/1/', print);

// function simple() {
//   setTimeout(function() {
//     console.log('1. First thing, preparing for the second');
//     setTimeout(function() {
//       console.log('2. Second thing');
//     }, 2000);
//   }, 2000);
// }
// simple();

// function complex() {
//   setTimeout(function() {
//     console.log('1. First thing, preparing for the second');
//     setTimeout(function() {
//       console.log('2. Second thing, preparing for the third');
//       setTimeout(function() {
//         console.log('3. Third thing, preparing for the forth');
//         setTimeout(function() {
//           console.log('4. Forth thing, preparing for the fifth');
//           setTimeout(function() {
//             console.log('5. Fifth thing, preparing for the Sixth');
//             setTimeout(function() {
//               console.log('6. Sixth and last thing');
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }
// complex();

// function first(workTime) {
//   return new Promise((resolve, reject) => {
//     if (workTime <= 0) {
//       reject(`It's too short of a work time. Please try again.`);
//     }
//     setTimeout(() => {
//       resolve('First thing, preparing for second');
//     }, workTime);
//   });
// }
// function second() {
//   console.log('Second thing!');
// }
// first(1000)
//   .then(success => {
//     console.log(success);
//     second();
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log(`Everything is done at: ${new Date()}`));

// first(0)
//   .then(success => {
//     console.log(success);
//     second();
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log(`Everything is done at: ${new Date()}`));

function getDocuments() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url:
        'https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json',
      success: response => {
        resolve(JSON.parse(response));
      },
      error: error => {
        reject(error);
      }
    });
  });
}

function showDocuments(documents) {
  if (!documents && typeof documents !== 'object') {
    throw new Error('Problem with documents');
  }
  if (documents.length === 0) {
    throw new Error('There are no documents');
  }
  documents.forEach(document =>
    console.log(`${document.name}.${document.type} (${document.size}MB)`)
  );
}

function getImportantDocuments(documents) {
  let importantDocuments = documents.filter(d => d.important);
  return new Promise((resolve, reject) => {
    if (importantDocuments.length === 0) {
      reject('There are no important documents!');
    }
    setTimeout(() => {
      resolve(importantDocuments);
    }, 3000);
  });
}

// getDocuments()
//   .then(data => {
//     console.log('All documents');
//     showDocuments(data);
//     return getImportantDocuments(data);
//   })
//   .then(impDocs => {
//     console.log('Important documents');
//     showDocuments(impDocs);
//   })
//   .catch(err => console.log(err));

// fetch(
//   'https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json'
// )
//   .then(res => res.json())
//   .then(docs => {
//     console.log('***All Documnets***');
//     showDocuments(docs);
//     return getImportantDocuments(docs);
//   })
//   .then(impDocs => {
//     console.log('***Important Documnets***');
//     showDocuments(impDocs);
//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log(`All good at ${new Date()}`));

async function getDataFromFetch() {
  let response = await fetch(
    'https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json'
  );
  let data = await response.json();
  console.log(data);
}

getDataFromFetch();

async function runFunctions() {
  console.log(await first(0));
  second();
  console.log(`Everything is done at: ${new Date()}`);
}

async function showImportantDocs() {
  let startTime = new Date().getTime();
  let documents = await getDocuments();
  showDocuments(documents);
  let importantDocuments = await getImportantDocuments(documents);
  showDocuments(importantDocuments);
  console.log(`Done in: ${(new Date().getTime() - startTime) / 1000}s`);
}

try {
  showImportantDocs();
} catch (err) {
  alert(err);
}

// runFunctions();
// console.log('123');

function first(workTime) {
  return new Promise((resolve, reject) => {
    if (workTime <= 0) {
      reject(`It's too short of a work time. Please try again.`);
    }
    setTimeout(() => {
      resolve('First thing, preparing for second');
    }, workTime);
  });
}
function second() {
  console.log('Second thing!');
}
