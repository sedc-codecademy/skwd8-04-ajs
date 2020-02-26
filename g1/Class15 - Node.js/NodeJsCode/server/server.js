const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  let obj = {
    name: 'Alek',
    gender: 'Male',
    job: 'Developer'
  };

  res.write(JSON.stringify(obj));
  res.end();
});

server.listen(port, hostName, () => {
  console.log(`Server running on hostname ${hostName} and listens on port ${port}`);
});
