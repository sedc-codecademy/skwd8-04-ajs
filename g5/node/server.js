const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const Users = require('./users');

app.use(express.static('www'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Middleware
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

app.get('/users', (req, res) => {

    fs.readFile('./users.json', (err, data) => {
        if(err)
        {
            res.status(412).send(err);
        }
        else
        {
            res.status(200).send(data.toString());
        }
    });
});

app.post('/users', async (req, res) => {

    let users = await fs.readFileSync('./users.json');

    users = JSON.parse(users.toString());
    req.body.uid = users.length;

    let user = new Users(req.body);
    users.push(user);
    fs.writeFile('./users.json', 
        JSON.stringify(users), 
        (err) => {
        
        if(err)
        {
            res.status(412).send(err);
        }
        else
        {
            res.status(200).send(user);
        }
    })
    
});

app.listen(3000);