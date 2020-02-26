1.
```javascript
owners =  [
{ id: 1, firstName:"Alek", lastName: "Aleksovski", age: 19 },
{ id: 2, firstName:"Tony", lastName: "Trajkov", age: 20 },
{ id: 3, firstName:"Dejan",lastName: "Blazevski", age: 23 }
]

pets = [
{ petId: 1, ownerId: 1, petName: "Dog1" },
{ petId: 2, ownerId: 1, petName: "Cat1" },
{ petId: 3, ownerId: 2, petName: "Cat2" },
{ petId: 4, ownerId: 3, petName: "Dog3" }
]
```

Expected Result
```
OwnerName   PetName
Alek	    Dog1
Alek	    Cat1
Vule        Cat2
DD	    Dog3
```

2.
```javascript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Dragan": 500,
  "Dejan": 350, 
  "Vukashin": 900
};
```

* Create the function topSalary(salaries), use Destructuring assignment, and return the name of the top-paid person.

* If salaries is empty, it should return null.
* If there are multiple top-paid persons, return any of them.


