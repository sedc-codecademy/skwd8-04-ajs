function log(thingToLog) {
  console.log(new Date())
  console.log(`Logged: ${thingToLog}`)
}

module.exports = {
  log
}