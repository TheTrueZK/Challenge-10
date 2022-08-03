const createHTML = require('./src/createHTML');

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const fs = require('fs');
const inquirer = require('inquirer');

const employeeArr = [];

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'position',
            message: "Select your employee's position",
            choices: ['Employee', 'Engineer', 'Intern', 'Manager']
        },
        type: 'input',
        name: 'name',
        message: "What's your employee's name?",
        validate: nameEntry => {
            if (nameEntry) {
                return true;
            } else {
                console.log("Enter a name");
                return false;
            }
        },
        {
            type: 'input'
            name: 'id'
            message: "Enter the employee's email",
            // validate: email => {
                // valid = expect(email).toEqual(expect.any(String));
                // if (valid)
                //finish later
            // }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter a github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the employee's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the employee's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }

    ])
}