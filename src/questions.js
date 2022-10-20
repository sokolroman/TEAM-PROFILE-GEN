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
};

module.exports = questions