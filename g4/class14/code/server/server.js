const http = require("http");
const logService = require("./logService")

const hostName = "127.0.0.1"; 
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    let user = [
        {
            name: "Viktor",
            age: 30
        },
        {
            name: "Kristina",
            age: 32
        }
    ]

    logService.log("\nsome very inportant log!")
    logService.log("\n=============")

    res.write(JSON.stringify(user))
    res.end()
})

server.listen(port, hostName, () => {
    console.log(`Server running on hostname: ${hostName} and listen on port ${port}`)
})