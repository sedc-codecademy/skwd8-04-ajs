function sayHello(name) {
    return `Hello ${name}`;
}

function sayBye(name) {
    return `Goodbye ${name}`;
}
const me = {
    name: "Kristina",
    lastName: "Spasevska",
    age: 32
}
// this will export only the last function
// module.exports = sayHello;
// module.exports = sayBye;
module.exports = {
    hello: sayHello,
    bye: sayBye,
    me
}