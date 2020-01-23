let student = {
    firstName:"Trajko",
    lastName:"Trajkovski",
    birthDate: new Date(1990, 08, 20),
    academy: "SEDC",
    subjects: ["js-advanced", "js-basic", "html"],
    grades:[7, 8, 9],
    city: "Skopje"
};
console.log(`student: ${student}`);

let studentAsJson = JSON.stringify(student);
console.log(`studentAsJson: ${studentAsJson}`);

let studentFromJson = JSON.parse(studentAsJson);

//Exercise1:
//Create object Actor with following properties:
/*
fullName: string,
isAlive: bool,
movies: array,
oscars: number,
birthDate: date
*/
//convert it to JSON and vice versa

let actor = {
    fullName: "Mel Gibson",
    isAlive: true,
    movies: ["Lethal weapon"],
    oscars: 0,
    birthDate: new Date(1960, 9, 9)
};

let actorAsJson = JSON.stringify(actor);
console.log(actorAsJson);

let actorFromJson = JSON.parse(actorAsJson);