const createHTML = require('./src/createHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}