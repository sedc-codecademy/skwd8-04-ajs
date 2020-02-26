const logger = require("./logger");

let addToSum = function(sum, num) {
  let result = sum + num;
  logger.log(result);

  return result;
}

let multiplySum = function(sum, num) {
  let result = sum * num;
  logger.log(result);
  
  return result;
}

let privateFunc = function() {
  console.log("No body can see me outside of this .js script, because I am not in the module.exports property")
}

module.exports = {
  addToSum,
  multiplySum
}
