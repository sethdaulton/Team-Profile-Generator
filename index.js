const inquirer = require("inquirer");
const fs = require("fs");

function generateEmployee() {
  // generate employee and add to
}

//create a global variable for teamMembers
const arrayofTeamMembers = []

const generateHTML = ({
  name,
  title,
  id,
  email,
  officeNumber,

}) =>
  `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./dist/style.css">
  <script src="https://kit.fontawesome.com/df8f81ca80.js" crossorigin="anonymous"></script>
  <title>Team Profile</title>
</head>
<body>
    <div class="header">
    <h1>My Team</h1>
</div>
 
<div class="body">

<div class="person-card">
  <div class="title-container">
    <h2>${name}</h2>
    <h3> <i class="fa-solid fa-mug-hot"></i> ${title}</h3>
    </div>
    <div class="info">
    <div class="info-container">
        <p>ID: ${id}</p>
    </div>
    <div class="info-container">
        <p>Email: <a href = "mailto: ${email}">${email}</a></p>
    </div>
    <div class="info-container">
        <p>Office number: ${officeNumber}</p>
    </div>
</div>
</div>

<div class="person-card">
    <div class="title-container">
      <h2>${name2}</h2>
      <h3> <i class="fa-solid fa-glasses"></i> ${title2}</h3>
      </div>
      <div class="info">
      <div class="info-container">
          <p>ID: ${id2}</p>
      </div>
      <div class="info-container">
      <p>Email: <a href = "mailto: ${email2}">${email2}</a></p>
      </div>
      <div class="info-container">
          <p>GitHub: <a href="${githubUrl}">${github}</a></p>
      </div>
  </div>
  </div>

  <div class="person-card">
    <div class="title-container">
      <h2>${name3}</h2>
      <h3> <i class="fa-solid fa-glasses"></i> ${title3}</h3>
      </div>
      <div class="info">
      <div class="info-container">
          <p>ID: ${id3}</p>
      </div>
      <div class="info-container">
      <p>Email: <a href = "mailto: ${email3}">${email3}</a></p>
      </div>
      <div class="info-container">
      <p>GitHub: <a href="${githubUrl2}">${github2}</a></p>
      </div>
  </div>
  </div>

  <div class="person-card">
    <div class="title-container">
      <h2>${name4}</h2>
      <h3> <i class="fa-solid fa-glasses"></i> ${title4}</h3>
      </div>
      <div class="info">
      <div class="info-container">
          <p>ID: ${id4}</p>
      </div>
      <div class="info-container">
      <p>Email: <a href = "mailto: ${email4}">${email4}</a></p>
      </div>
      <div class="info-container">
      <p>GitHub: <a href="${githubUrl3}">${github3}</a></p>
      </div>
  </div>
  </div>

  <div class="person-card">
    <div class="title-container">
      <h2>${name5}</h2>
      <h3> <i class="fa-solid fa-graduation-cap"></i> ${title5}</h3>
      </div>
      <div class="info">
      <div class="info-container">
          <p>ID: ${id5}</p>
      </div>
      <div class="info-container">
      <p>Email: <a href = "mailto: ${email5}">${email5}</a></p>
      </div>
      <div class="info-container">
          <p>School: ${school}</p>
      </div>
  </div>
  </div>
</div>
</body>
</html>`;

function displayMenu() {
  inquirer.prompt([
    {
      type: "list",
      name: "menuChoice",
      message: "Please select an option from the menu",
      choices: ["Add an engineer", "Add an intern", "Finish"]
    }
  ])
  .then((answers) => {
  const menuChoice = answers.menuChoice
  console.log(menuChoice);
switch (menuChoice) {
  case "Add an engineer":
    addEngineer()
    break;
// add cases for adding intern and finish
  default:
    break;
}
});
}

function addEngineer() {
    // implement this function to start an inquirer that gathers input to create an engineer

}

inquirer
  .prompt([
    // Questions for Employee #1
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager?",
    },
    {
      type: "input",
      name: "title",
      message: "What title is this employee?",
    },
    {
      type: "input",
      name: "id",
      message: "What is this employee's id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is this employee's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is this employee's office number?",
    },
    
  ])
  .then((answers) => {
    // 1 use answers from inquirer to create a new instance of manager
    // 2 push new manager instance into global team member array
    displayMenu()
    // const htmlPageContent = generateHTML(answers);
    // console.log(answers);
    // fs.writeFile("index.html", htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log("Successfully created index.html!")
    // );
  });
