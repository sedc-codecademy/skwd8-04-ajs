let animals = [];
let flatAnimals = [];

const getData = async url => {
  // getting data
  const data = await fetch(url);
  //   parsing data
  const parsedData = await data.json();
  animals = [...parsedData.animals];
  flatAnimals = flattenArray(animals);
  allPoisonousAnimals(flatAnimals);

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
