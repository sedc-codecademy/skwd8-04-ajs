const express = require('express');
const port = 3000;

let app = express();

app.get('/people', (req, res) => {
    const data = [
        { id: 1, name: "Viktor Jakovlev"},
        { id: 2, name: "John Snow"},
        { id: 3, name: "Duffy Duck"}
    ];
    res.send(data);
})

app.get('/planets', (req, res) => {
    const data = [
        { id: 1, name: "Mars"},
        { id: 2, name: "Saturn"},
        { id: 3, name: "Neptune"}
    ];
    res.send(data);
})

app.listen(port, () => console.log(`Server listening on port ${port}`));