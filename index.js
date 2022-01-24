const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { prompt } = require('inquirer');
const path = require('path');
const fs = require('fs');

const roles = {
    Employee: [],
    Manager: [],
    Engineer: [],
    Intern: []
};

prompt(
    {
        type:'list',
        name:'role',
        message:'Which role would you like to fill?',
        choices:Object.keys(roles)
    }
).then(({role})=>{
    let items = ['name','id','email'];
    // items.push(role=='Manager'?'officeNumber':role=='Engineer'?'github':role=='Intern'?'school');
    if (role == 'Manager' ) {
        items.push('officeNumber')
    } else if (role =='Engineer') {
        items.push('github')
    }else if (role=='Intern') {
        items.push('school')
    };
    let questions = [];

    items.forEach(item => {
        questions.push(
            {
            type:'input',
            name: item ,
            message:`What is your ${item}?`
        })
    })

    prompt(questions).then(console.log);
});


//generating the site 

//Generate page 

// const generatePage = () => 