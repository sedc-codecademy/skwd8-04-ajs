function getPromise(shouldResolve) {
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>{
            if (shouldResolve){
                resolve('Resolved');
            }
            else {
                reject('Rejected');
            }
        }, 3000)
    });
}

// getPromise(false)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

//same as above
async function getPromiseAsync(shouldResolve) {
    try {
        let result = await getPromise(shouldResolve);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getPromiseAsync(false);