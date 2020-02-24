const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
    // res.write("<h1>Hello, this is my node.js server!</h1>");
    let obj = {
        name: "Martin",
        gender: "Male",
        age: 26
        }
    res.write(JSON.stringify(obj));
    res.end();
});

server.listen(port, hostName, () => {
    console.log(`Server running on hostname: ${hostName} and listen on port ${port}`);
});