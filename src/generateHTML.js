const Employee = require("../lib/Employee");
const { manager } = require("./questions");

function genHTML(team) {
  const generateManager = (manager) => {
    console.log(manager);
    return `
<div class="card" style="width: 18rem; margin: 1em auto; text-align: left;">
<header style="background-color: #c7cfd2; padding: 1em;">
<h4>${manager.name}</h4>
<h5>☕ Manager</h5>
</header>
<div class="card-body">
  <p>Manager ID: ${manager.id}</p>
  <p>Office Number: ${manager.officeNumber}</p>
  <a id="mailto" href="mailto:${manager.email}" class="btn btn-primary">Contact Managment</a>
</div>
</div> `
  };

  const output = [];
  output.push(
    team
      .filter((e) => e.getRole() === "Manager")
      .map((employee) => generateManager(employee))
  );
  output.push(
    team
      .filter((e) => e.getRole() === "Engineer")
      .map((employee) => generateManager(employee))
  );
  output.push(
    team
      .filter((e) => e.getRole() === "Intern")
      .map((employee) => generateManager(employee))
  );
  return output.join("");
}

module.exports = (team) => {
  return `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>My Team</title>
  </head>

  <body>
    <h1 style="text-align: center; padding: 2.5em; background-color: #f08080;">My Team</h1>
<div>${genHTML(team)}</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>
    `;
};
