// const createHTML = require('./src/createHTML');

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
        {
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
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your employee's ID?",
            validate: idEntry => {
                if (idEntry) {
                    return true;
                } else {
                    console.log("Enter employee id");
                    return false;
                }
            }
        },
        // {
        //     type: 'input'
        //     name: 'email'
        //     message: "Enter the employee's email",
            // validate: email => {
                // valid = expect(email).toEqual(expect.any(String));
                // if (valid)
                //finish later
            // }
        // },
        {
            type: 'input',
            name: 'managerNumber',
            message: "Enter the employee's manager number",
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter a manager number")
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
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
        }
    ])
}


