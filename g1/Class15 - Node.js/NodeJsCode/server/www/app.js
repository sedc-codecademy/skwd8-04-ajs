fetch('http://localhost:3000')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err));
