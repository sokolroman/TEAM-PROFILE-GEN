// node modules
const fs = require( "fs" );
const inquirer = require( "inquirer" );

// team profiles
const Manager = require( "./lib/Manager" );
const Engineer = require( "./lib/Engineer" );
const Intern = require( "./lib/Intern" );
const employees = []
const questions = require('./src/questions');
console.log(questions)
// questions and html template
// const addEmployeeQuestion = require( "./lib/add-employee-questions" );
// const managerQuestions = require( "./lib/manager-questions" );
// const engineerQuestions = require( "./lib/engineer-questions" );
// const internQuestions = require( "./lib/intern-questions" );
// const holdHtml = require( "./lib/html-template" );


const createManager = async () =>{
    var managerData = await inquirer.prompt(questions.manager)
    console.log(managerData)


}



createManager()