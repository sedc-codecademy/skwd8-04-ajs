
//one way of importing
const service = require("./app");

//another way of importing
const {person, getInfo, sayHello} = require("./app");


// import {person, getInfo, sayHello} from './app';

//first way of access 
service.getInfo(service.person);

//second way of access
getInfo(person);