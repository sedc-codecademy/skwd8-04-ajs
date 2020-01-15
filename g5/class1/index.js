let obj1 = {};

let obj2 = {
    key: value, //valid
    key-new: value2, //invalid
    "key-new": value3, //valid
    "0": value4 // valid
};

obj2.key; //get value from key with name key
obj2['key']; //same as above 

let b = "key";
obj2[b]; //same as obj2['key']

obj2["key-new"]; //get value from key with name key-new

obj2[0]; // or obj2["0"]

//Add new key-value pair
obj2.somethingNew = 10;
//{somethingNew: 10}

//Delete key
delete obj2.somethingNew;

//Update key value
obj2.key = 11;

// let obj2 = {
//  let  key: value, 
//  let  "key-new": value3, 
//  let  "0": value4 
// };

let fnObj = {
    users: [],
    addNewUser: function(username)
    {
        this.users.push(username);
    },
    getUsers: function()
    {
        //function listUsers(){}
        let listUsers = () => //Arrow function
        {
            console.log(this);
        }

        function listUsers2()
        {
            console.log(this);
        }

        listUsers();
        listUsers2();
        return this.users;
    }
}

fnObj.addNewUser('user1');
console.log(fnObj.getUsers());

//Ex1
//Create array with 100 elements and put every element to be a key
//and value of an object
//example {"0": 0}

let arr1 = [];
let newObj = {};
for(let i = 0; i < 100; i++)
arr1.push(i+1);

arr1.map(function(i){    
    newObj[i] = i;
})

// for(let i = 0; i < arr1.length; i++)
// newObj[i] = arr1[i];

//Ex2
// Create function that will fill array with students objects where
// each student should have name, lastname, age, department

//function('Name', 'LAstName', 10, 'IT');
//array[{name: 'Name', lastname: 'LAstName' .....}]

let students = [];

function addStudent(name, lastname, age, department)
{
    let studentObject = {
        firstname: name,
        lastname: lastname,
        age: age,
        department: department
    }

    students.push(studentObject);
}

addStudent('Name 1', 'Lastname 2', 10, 'IT');
console.log(students);

/*
Create a function which will create a new team under an object with teams
each team array should have name, lastname and number

expected result
let teams = {
    team1: [
        {name: player1, lastname: player1Ln, 1},
        ....
    ],
    team2: [...],
    mkd: [..]
}
*/

let teams = {};

function addTeamPlayer(teamName, firstname, lastname, playerNumber)
{
    if( ! teams[teamName] )
    teams[teamName] = [];

    let player = {};
    teams[teamName].push(player)
}

addTeamPlayer('MKD', 'Pepi', 'Manaskov', 5);
addTeamPlayer('MKD', 'Pepi', 'Manaskov', 5);

addTeamPlayer('SRB', 'Pepi', 'Manaskov', 5);
addTeamPlayer('SRB', 'Pepi', 'Manaskov', 5);

addTeamPlayer('SRB', 'Pepi', 'Manaskov', 5);
addTeamPlayer('SRB', 'Pepi', 'Manaskov', 5);

addTeamPlayer('SRB', 'Pepi', 'Manaskov', 5);
addTeamPlayer('SRB', 'Pepi', 'Manaskov', 5);

/*
 Expand previous exercise to have following object

 let game = {
    teams: {
        team1: [
            {name: player1, lastname: player1Ln, 1},
            ....
        ],
        team2: [...],
        mkd: [..]
    },
    tournaments: {
        game1: ['MKD', 'SRB', '13.02.2020'],
        game2: ['AST', 'UAE, '14.02.2020']
    }
 }
*/

let tournaments = {};
//HERE CODE FOR TOURNAMENTS

function addTournamentGame(homeTeam, awayTeam, date){

    if(teams[homeTeam] && teams[awayTeam])
    tournaments[`game${Object.keys(tournaments).length + 1}`] = 
    [homeTeam, awayTeam, date];
    
    // let c = 0;
    // for(let x in tournaments)
    // c++;
    // c = c+1;
    // tournaments[`game${c}`] = [homeTeam, awayTeam, date];
}

addTournamentGame('MKD', 'AST', new Date());
addTournamentGame('MKD', 'SRB', new Date());
addTournamentGame('RUS', 'SRB', new Date());

let game = { //game.teams = teams
    teams : teams,
    tournaments: tournaments
}

console.log(game);

//Arr

let a = [];

for(let i = 0; i < 50; i++)
a.push(i+10);

a.map(function(value, index){
    console.log(value, index);
})

for(let i = 0; i < a.length; i++)
console.log(a[i], i);

a.map(function(value) {
    if(value % 2 === 0 && value > 0)
    console.log(value)
})















