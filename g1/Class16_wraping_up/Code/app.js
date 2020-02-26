let animals = [];
let flatAnimals = [];
let isAsc = false;

const getData = async url => {
  // getting data
  const data = await fetch(url);
  //   parsing data
  const parsedData = await data.json();
  animals = [...parsedData.animals];
  flatAnimals = flattenArray(animals);
  allPoisonousAnimals(flatAnimals);
  printAnimals(animals);
  //   console.log(animals.filter(a => a.isPoisonous));
  console.table(animals);
  // console.log(flatAnimals);
};

// Function call
getData(
  'https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g1/Class16_wraping_up/animals.json'
);

const allPoisonousAnimals = animals => {
  const poisonousAnimals = animals.filter(animal => animal.isPoisonous);

  //   console.log(poisonousAnimals);
  return poisonousAnimals;
};

const flattenArray = animals => {
  let flatAnimals = [];

  animals.forEach(animal => {
    flatAnimals = [...flatAnimals, animal];
    if (animal.children && animal.children.length > 0) {
      flatAnimals = [...flatAnimals, ...flattenArray(animal.children)];
    }
  });

  return flatAnimals;
};

// Print Animals in the DOM
const printAnimals = animals => {
  // SELECT TBODY BY ID table-data
  const tbody = document.querySelector('#table-data');
  tbody.innerHTML = '';
  animals.forEach((animal, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.legs ? animal.legs : 'N/A'}</td>
        <td>${animal.eyes ? animal.eyes : 'N/A'}</td>
        <td>${animal.wings ? animal.wings : 'N/A'}</td>
        <td>${animal.tail ? animal.tail : 'N/A'}</td>
        <td>${animal.age ? animal.age : 'N/A'}</td>
        <td>${animal.children.length}</td>
        <td>${animal.provides && animal.provides.length > 0 ? animal.provides : 'N/A'}</td>
        <td>${animal.isPoisonous ? 'Yes' : 'No'}</td>
      </tr>
    `;
  });
};

// Sort Animals by clicing on the age header

const sortAnimals = animals => {
  let sortedAnimals = [];
  if (isAsc) {
    sortedAnimals = [...animals.sort((a, b) => a.age - b.age)];
  } else {
    sortedAnimals = [...animals.sort((a, b) => b.age - a.age)];
  }
  printAnimals(sortedAnimals);
};

document.querySelector('#age').addEventListener('click', () => {
  sortAnimals(animals);
  isAsc = !isAsc;
});

//Filter animals by type by entering type in input and clicking filter btn

const filterByType = animals => {
  const value = document.querySelector('#input').value;
  const filteredAnimals = animals.filter(a => a.type.toLowerCase() === value.toLowerCase());
  printAnimals(filteredAnimals);
  document.querySelector('#input').value = '';
};

document.querySelector('#filter').addEventListener('click', () => filterByType(flatAnimals));

// CLasses

class Animal {
  constructor(name, type, age, children) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.children = children;
  }
}

class LeggedAnimals extends Animal {
  constructor(name, type, age, children, legs) {
    super(name, type, age, children);
    this.legs = legs;
  }
}

class LeggedAnimalsWithEyes extends LeggedAnimals {
  constructor(name, type, age, children, legs, eyes) {
    super(name, type, age, children, legs);
    this.eyes = eyes;
  }
}

class FLyingAnimals extends LeggedAnimalsWithEyes {
  constructor(name, type, age, children, legs, eyes, wings) {
    super(name, type, age, children, legs, eyes);
    this.wings = wings;
  }
}

class PoisonousAnimals extends Animal {
  constructor(name, type, age, children, isPoisonous, legs = null, eyes = null) {
    super(name, type, age, children);
    this.isPoisonous = isPoisonous;
  }
}

class TailedAnimals extends LeggedAnimalsWithEyes {
  constructor(name, type, age, children, legs, eyes, tail) {
    super(name, type, age, children, legs, eyes);
    this.tail = tail;
  }
}

class AnimalsWithFins extends Animal {
  constructor(name, type, age, children, fins) {
    super(name, type, age, children);
    this.fins = fins;
  }
}

class AnimalsProviders extends LeggedAnimalsWithEyes {
  constructor(name, type, age, children, legs, eyes, provides) {
    super(name, type, age, children, legs, eyes);
    this.provides = provides;
  }
}
