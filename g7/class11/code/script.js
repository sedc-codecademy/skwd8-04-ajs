console.log("We are live");

let doggo = {
    name: "Butch",
    age: 3,
    bark: function(){
        console.log("BARK! BARK! BARK!");
        return 2;
    }
}

// keys, values, entries
console.log(Object.keys(doggo));
console.log(Object.values(doggo));
console.log(Object.entries(doggo));

// freeze 
// Don't allow to add more properties or methods
// Don't allow to change the exiting ones
// console.log("Before:")
// console.log(doggo);
// Object.freeze(doggo);
// doggo.isHappy = true;
// doggo.name = "BOB";
// console.log("After:");
// console.log(doggo);

// seal
// Don't allow to add more properties or methods
// Allows changing the existing ones
console.log("Before:")
console.log(doggo);
Object.seal(doggo);
doggo.isHappy = true;
doggo.name = "BOB";
console.log("After:");
console.log(doggo);