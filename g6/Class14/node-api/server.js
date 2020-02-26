const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const users = require('./users');

server.set('port', 3000);
//localhost:3000/users?firstName=Pavle&lastName=Pavleski

server.get('/users', (request, response) =>{
    let firstName = request.query.firstName;
    console.log(`FirstName from queryString: ${firstName}`);
    
    let result = users.users;
    if (firstName)
        result = result.filter(user => user.firstName === firstName);
    
    response.json(result);
});

server.listen(3000, () => console.log('Server is running'));