const questions = {
  manager: [
    {
      type: "input",
      message: "Enter your managers name",
      name: "name",
    },
    {
      type: "input",
      message: "Enter your managers id",
      name: "id",
    },
    {
      type: "input",
      message: "Enter your managers email",
      name: "email",
    },
    {
      type: "input",
      message: "Enter your managers office number",
      name: "number",
    },
  ],
  menu: [
    {
      type: "list",
      message: "choose to build your team or finish building",
      name: "choice",
      choices: ["Add intern", "Add engineer", "Finish building team"],
    },
  ],
  engineer: [
    {
      type: "input",
      name: "engineerName",
      message: "Engineer Name?",
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "Engineer's Email?",
    },
    {
      type: "input",
      name: "githubAccount",
      message: "Enter Engineer's Github Account",
    },
    {
      type: "input",
      name: "employeeId",
      message: "Employee ID?",
    },
  ],
  intern: [
    {
      type: "input",
      name: "internName",
      message: "Intern's Name?",
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "Intern's Email?",
    },
    {
      type: "input",
      name: "school",
      message: "What school does this intern attend?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "Employee ID?",
    },
  ],
};

module.exports = questions;
