const calculator = require("./src/calculator")
const people = require("./src/peopleJson");

const path = require("path");
const express = require("express")

const server = express();
const port = 5402;
const publicFolderPath = path.join(__dirname, "public")

// Example usage: http://localhost:5402/   This is the mail route, you can tell that by the "/" character after the port number
server.use("/", express.static(publicFolderPath)); // This line serves static files(everything that is in the public folder in this project, by default it takes the index.html file)

// Example usage: http://localhost:5402/api/people/
server.get("/api/people", (req, res) => { // This lines does not server any files, but when the user from front-end goes to this route it will give him a json data
  const data = people.filter(p => p.height > 160);

  res.send(data);
});

// Example usage: http://localhost:5402/addToSum?sum=120&num=5
server.get("/addToSum", (req, res) => {
  const sum = Number(req.query["sum"]);
  const num = Number(req.query["num"]);
  const result = calculator.addToSum(sum, num);

  res.send(result.toString());
});

// Example usage: http://localhost:5402/multiplySum?sum=130&num=2
server.get("/multiplySum", (req, res) => {
  const sum = Number(req.query["sum"]);
  const num = Number(req.query["num"]);
  const result = calculator.multiplySum(sum, num);

  res.send(result.toString());
});

server.listen(port, () => { // This line starts the server(opens the port 5402) and sets up a listener to listen to requests on that port
  console.log(`Server is listening on port: ${port}`)
})