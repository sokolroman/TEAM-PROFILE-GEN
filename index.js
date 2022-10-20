// node modules
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];
const questions = require("./src/questions");

const team = [];

const renderHTML = require("./src/generateHTML");

const createManager = async () => {
  var managerData = await inquirer.prompt(questions.manager);
  console.log(team);
  const managerObj = new Manager(
    managerData.name,
    managerData.id,
    managerData.email,
    managerData.number
  );
  team.push(managerObj);
  menu()
};

const menu = async () => {
  var menuData = await inquirer.prompt(questions.menu);
  console.log(menuData)
  if(menuData.choice === "Add intern") {
    createIntern()
  } else if(menuData.choice === "Add engineer") {
    createEngineer()
  } else {
    buildIt()
  }
};

// const createIntern = async () => {
//   var managerData = await inquirer.prompt(questions.manager);
//   console.log(team);
//   const managerObj = new Manager(
//     managerData.name,
//     managerData.id,
//     managerData.email,
//     managerData.number
//   );
//   team.push(managerObj);
//   buildIt(team);
// };

// const createEngineer = async () => {
//   var managerData = await inquirer.prompt(questions.manager);
//   console.log(team);
//   const managerObj = new Manager(
//     managerData.name,
//     managerData.id,
//     managerData.email,
//     managerData.number
//   );
//   team.push(managerObj);
//   buildIt(team);
// };

const buildIt = () => {
  fs.writeFileSync(distPath, renderHTML(team), "UTF-8");
};

createManager();
