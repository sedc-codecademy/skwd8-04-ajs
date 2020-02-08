//Inheritance of prototypes

let o = {
    name: "some name",
    age: 10
};

//o1 has inherited the prototype of o
let o1 = Object.create(o);
/*
    o1 = {
        __proto__: {
            name: "some name",
            age: 10
        },
        email: "asfda@sdas.com"
    }
*/

let animals = {
    name: undefined,
    sounds: false
};

let walk = Object.create(animals);
walk = Object.assign(walk, {
    eyes: true,
    legs: undefined,
    hands: false,
    hair: true,
});

let human = Object.create(walk);
human = Object.assign(human, {
    race: undefined
});

let trajko = Object.create(human);

trajko.hair = false;
trajko.hands = true;
trajko.race = 'yellow';
trajko.name = 'Trajko';

let yellow = Object.create(human);
yellow = Object.assign(yellow, {
    race: 'yellow',
    hands: true,
    sounds: true,
    legs: 2
});

let chinese = Object.create(yellow);

//Constructor (template) functions inheritance

function animal()
{
    this.name = undefined;
    this.sounds = false;
}

function walk()
{
    Object.assign(this, new animal());
    this.eyes = true;
    this.legs = undefined;
    this.hands = false;
    this.hair = true;
}

function human(legs, hands, hair, name, sounds)
{
    Object.assign(this, new walk());
    this.legs = legs || this.legs;
    this.hands = hands || true;
    this.hair = hair || this.hair;
    this.name = name || this.name;
    this.sounds = sounds || this.sounds;
}

let petko = new human();

/*
    Create transport center which will have a main station,
    the main station will have a bus stops (peron), also should
    have busses and each bus should have its own spot in main station,
    line and status is it moving or parked.

    1. Transport center (main station, station)
        - num. of spots
        - free spots
        - list of busses in station

    2. Lines
        - start destination
        - end destination
        - num. of stations
        - line number

    3. Buses (status is prop of bus, station)
        - Free sits
        - Moving
        - Current station
        - Color
        
    Bonus: 
    Make limited spaces in main station for busses e.g 10 max
    so the program will check how many busses are created and is 
    there a spot to create new one. (11th bus can't be created)

    Bonus of Bonus:
    Make a function that will print all buses and their current state
    in a table, so you will have a visual report of all busses at once.

    For 5ka 
    Use the (window) screen as a map of a town. define points with names
    that represent a bus station. Set interval of 5s and display the
    busses on the map according their curent station.
*/

let main_station = {
    freeSpots: 10,
    listOfBusses: []
};
//Define a property into the object with extra attributes
Object.defineProperty(main_station, 'totalSpots', {value: 10, writable: false});

let bus_lines = Object.create(main_station);
Object.assign(bus_lines, {
    start: undefined,
    end: undefined,
    numOfStations: undefined,
    lineNumber: undefined
});

let bus = Object.create(bus_lines);
Object.assign(bus, {
    freeSeats: undefined,
    moving: false,
    currentStation: undefined,
    color: undefined
})


