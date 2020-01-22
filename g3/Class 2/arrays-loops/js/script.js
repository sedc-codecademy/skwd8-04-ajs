//Create a function that cleans an array of any values and leaves only STRINGS
function getWithoutStrings(array) {
    let result = [];
    for (const item of array) {
        if (typeof(item) === 'string') {
            result.push(item);
        }
    }
    return result;
}

let array = [1,'23', true, 'asd', 'false'];
console.log(getWithoutStrings(array));