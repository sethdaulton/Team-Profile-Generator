const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/manager");

function generateEmployee() {
  // generate employee and add to
}

//create a global variable for teamMembers
const arrayofTeamMembers = []

const generateHTML = (array) =>
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

${generateTemplate(array)}


</div>
</body>
</html>`;

function generateTemplate(array) {
  let template = ''
  for (let i = 0; i < array.length; i++) {
    if (array[i].getRole()==='Manager'){
      template+=`
      <div class="person-card">
  <div class="title-container">
    <h2>${array[i].getName()}</h2>
    <h3> <i class="fa-solid fa-mug-hot"></i> ${array[i].getRole()}</h3>
    </div>
    <div class="info">
    <div class="info-container">
        <p>ID: ${array[i].getId()}</p>
    </div>
    <div class="info-container">
        <p>Email: <a href = "mailto: ${array[i].getEmail()}">${array[i].getEmail()}</a></p>
    </div>
    <div class="info-container">
        <p>Office number: ${array[i].getOfficeNumber()}</p>
    </div>
</div>
</div>`
    }
    else if (array[i].getRole()==='Engineer') {
      template+=`
      <div class="person-card">
  <div class="title-container">
    <h2>${array[i].getName()}</h2>
    <h3> <i class="fa-solid fa-glasses"></i> ${array[i].getRole()}</h3>
    </div>
    <div class="info">
    <div class="info-container">
        <p>ID: ${array[i].getId()}</p>
    </div>
    <div class="info-container">
        <p>Email: <a href = "mailto: ${array[i].getEmail()}">${array[i].getEmail()}</a></p>
    </div>
    <div class="info-container">
        <p>Github: <a href="https://github.com/${array[i].getGithub()}">${array[i].getGithub()}</a></p>
    </div>
</div>
</div>`
    }

    else if (array[i].getRole()==='Intern') {
      template+=`
      <div class="person-card">
  <div class="title-container">
    <h2>${array[i].getName()}</h2>
    <h3> <i class="fa-solid fa-graduation-cap"></i> ${array[i].getRole()}</h3>
    </div>
    <div class="info">
    <div class="info-container">
        <p>ID: ${array[i].getId()}</p>
    </div>
    <div class="info-container">
        <p>Email: <a href = "mailto: ${array[i].getEmail()}">${array[i].getEmail()}</a></p>
    </div>
    <div class="info-container">
        <p>Github: ${array[i].getSchool()}</p>
    </div>
</div>
</div>`
    }
  }
  return template
}

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
  case "Add an intern":
    addIntern()
    break;
  case "Finish":
    finish()
    break;
// add cases for adding intern and finish
  default:
    break;
}
});
}

function finish() {
  console.log(arrayofTeamMembers);
  const htmlPageContent = generateHTML(arrayofTeamMembers);
    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
}

function addEngineer() {
    // implement this function to start an inquirer that gathers input to create an engineer
 inquirer
    .prompt([
      // Questions for Engineer
      {
        type: "input",
        name: "name2",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "id2",
        message: "What is the id of this employee?",
      },
      {
        type: "input",
        name: "email2",
        message: "What is the email address of this employee?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the github username of this employee?",
      },
    ])
    .then (answers => {
      console.log(answers)
      const newEng = new Engineer(answers.name2, answers.id2, answers.email2, answers.github)
      console.log(newEng)
      arrayofTeamMembers.push(newEng)
      displayMenu()
    })
}

function addIntern() {
  // implement this function to start an inquirer that gathers input to create an intern
inquirer
  .prompt([
    // Questions for Intern
    {
      type: "input",
      name: "name3",
      message: "What is the name of the intern?",
    },
    {
      type: "input",
      name: "id3",
      message: "What is the id of this employee?",
    },
    {
      type: "input",
      name: "email3",
      message: "What is the email address of this employee?",
    },
    {
      type: "input",
      name: "school",
      message: "Where does this employee attend school?",
    },
  ])
  .then (answers => {
    console.log(answers)
    const newInt = new Intern(answers.name3, answers.id3, answers.email3, answers.school)
    arrayofTeamMembers.push(newInt)
    displayMenu()
  })
}

inquirer
  .prompt([
    // Questions for Manager
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager?",
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
    const newMan = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    arrayofTeamMembers.push(newMan)
    // 1 use answers from inquirer to create a new instance of manager
    // 2 push new manager instance into global team member array
    displayMenu()
    // const htmlPageContent = generateHTML(answers);
    // console.log(answers);
    // fs.writeFile("index.html", htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log("Successfully created index.html!")
    // );
  });
