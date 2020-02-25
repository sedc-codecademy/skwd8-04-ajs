let animals = [];
let flatAnimals = [];

const getData = async url => {
  // getting data
  const data = await fetch(url);
  //   parsing data
  const parsedData = await data.json();
  animals = [...parsedData.animals];
  flatAnimals = flattenArray(animals);
  console.log(animals);
  console.log(flatAnimals);
};

// Function call
getData(
  'https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g1/Class16_wraping_up/animals.json'
);

const allPoisonousAnimals = animals => {
  return filteredAnimals;
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
