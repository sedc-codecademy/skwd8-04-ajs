const axios = require('axios');

url = "http://localhost:3000"
axios.get(url)
    .then(response => console.log(response.data))