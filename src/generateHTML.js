const Employee = require("../lib/Employee")
const { manager } = require("./questions")

function genHTML(team) {
  const generateManager = manager => {

    console.log("=============")

    console.log(manager)

    console.log("=============")

    return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5>${manager.name}</h5>

  <a href="#" class="btn btn-primary">Go back</a>
</div>
</div> `
}

const output = []
output.push(
    team
    .filter(e => e.getRole() === "Manager")
    .map(employee => generateManager(employee))
    )
    output.push(
        team
        .filter(e => e.getRole() === "Engineer")
        .map(employee => generateManager(employee))
        )
        output.push(
            team
            .filter(e => e.getRole() === "Intern")
            .map(employee => generateManager(employee))
            )
return output.join("")  
} 
module.exports = team => {
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
    <h1>My Team</h1>
<div>${genHTML(team)}</div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>
    `
}

// <p> ${manager.getRole()}</p>
//   <p>${manager.getId()}</p>
//   <p>${manager.getOfficeNumber()}</p>
//   <p>${manager.getEmail()}</p> 