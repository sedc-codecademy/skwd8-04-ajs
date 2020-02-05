// let a;

// //Callback hell
// setTimeout(() => {
//     a = 10;
//     timeoutCallback();

//     setTimeout(() => {
//         a = 15;
//         timeoutCallback();

//         setTimeout(() => {
//             a = 25;
//             timeoutCallback();

//             setTimeout(() => {
//                 a = 45;
//                 timeoutCallback();

//                 setTimeout(() => {
//                     a = 55;
//                     timeoutCallback();
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);

// }, 500);

// console.log(a);

// function timeoutCallback()
// {
//     if(a == 10)
//     alert('A is 10');
//     else if(a == 15)
//     alert('A is 15');
//     else
//     alert('A is undefined');
// }


// //Fix the hell

// let b;

// setTimeout(() => {
//     b = 10;
//     resolveFirstTimeout();
// })

// function resolveFirstTimeout()
// {
//     if(b == 10)
//     {
//         alert(`Value of B is ${b}`);
//         makeSecondTimeout();
//     }
//     else
//     {
//         alert('B is Undefined');
//     }
// }

// function makeSecondTimeout()
// {
//     setTimeout(() => {
//         b = 15;
//         resolveSecondTimeout();
//     }, 1000);
// }

// function resolveSecondTimeout()
// {
//     if(b == 15)
//     {
//         alert(`Value of B is ${b}`);
//     }
//     else
//     {
//         alert('B is Undefined');
//     }
// }

//Promisses

// new Promise((resolve, reject) => {
//     //Code for this promise goes here.

//     // if(...success)
//     // resolve();
//     // else
//     // reject();
// });

let success = new Promise((resolve, reject) => {
    setTimeout(() => {
        //if(someting == true)
        resolve(50);
        //else(someting == error)
        reject('Greska si');
    }, 5000);
});

success.then((data) => {
    console.log(data);    
}, (error) => {
    console.log(error);
});

let a = 110;

let prom = new Promise((resolve, reject) => {
    if(a === 10)
    resolve(true);
    else
    reject(false);
});

prom.then((data) => {
    console.log(data);    
}, (error) => {
    console.log(error);
});

//Promise hell

// let p = new Promise((resolve, reject) => {

//     let a = new Promise((resolve2, reject2) => {

//         let b = new Promise((resolve3, reject3) => {

//             let c = new Promise((resolve4, reject4) => {
                
//                 resolve4(true);
//             });

//             c.then((success) => {
//                 resolve3(true);
//             },
//             (error) => {
//                 reject3(false);
//             })
//         })

//         b.then((success) => {
//             resolve2(true);
//         }, 
//         (error) => reject2(false))
//     });

//     a.then((success) => {
//         resolve(true);
//     },
//     (error) => {
//         reject(false);
//     })
// });

// p.then();

// let d = new Promise((resolve, reject) => {

//     let a = new Promise((resolve2, reject2) => {
//         //Call the API 
//     });

//     a.then((success) => {
//         resolve(true);

//         let b = new Promise((resolve3, reject3) => {
//             //Call the API
//         })

//         b.then((success) => {
//             let c = new Promise((resolve4, reject4) => {
                
//                 resolve4(true);
//             });

//             c.then((success) => {
//                 resolve3(true);
//             },
//             (error) => {
//                 reject3(false);
//             })
//         }, 
//         (error) => reject2(false))
//     },
//     (error) => {
//         reject(false);
//     })
// })

// let p = new Promise((success, error) => {
//     success(10);
// })

// p.then((success) => {

//     let a = new Promise((resolve, reject) => {
//         resolve(40);
//     });

//     a.then((success) => {

//         let b = new Promise();//...
//     }, (error) => {})
// }, (error) => {});

function testPromiseOutside(which){
    console.log(`Promise has been init ${which}`)
}

let p1 = new Promise((resolve, reject) => {

    testPromiseOutside('p1');

    if(4 % 2 === 0)
    resolve(true);
    else
    reject(false);
});
let p2 = new Promise(
    (resolve, reject) => {

        testPromiseOutside('p2');
    
        if(4 % 2 === 0)
        resolve(true);
        else
        reject(false);
    }
);
let p3 = new Promise(
    (resolve, reject) => {

        testPromiseOutside('p3');
    
        if(4 % 3 === 0)
        resolve(true);
        else
        reject(false);
    }
);

// Promise.all([p1, p2, p3]).then((success) => {
//     console.log(success);
// }, (error) => {
//     console.log(error);
// }).catch((error) => {
//     console.log(error);
// });

//some code.... 

// Promise.reject();
// Promise.resolve();

//Async/Await

async function waitPromise()
{
    let p1result = await p1.catch((e) => e);
    let p2result = await p2.catch((e) => e);
    let p3result = await p3.catch((e) => e);
    console.log(p1result, p2result, p3result);

    return Promise.resolve([p1result, p2result, p3result]);
}


async function waitForWait()
{
    let w = await waitPromise();
    console.log(w);
}

waitForWait();
