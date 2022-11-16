const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, title, id, email, officeNumber,
    name2, title2, id2, email2, github,
    name3, title3, id3, email3, github2,
    name4, title4, id4, email4, github3,
    name5, title5, id5, email5, school }) =>
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
          <p>Email: ${email2}</p>
      </div>
      <div class="info-container">
          <p>GitHub: ${github}</p>
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
          <p>Email: ${email3}</p>
      </div>
      <div class="info-container">
          <p>GitHub: ${github2}</p>
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
          <p>Email: ${email4}</p>
      </div>
      <div class="info-container">
          <p>GitHub: ${github3}</p>
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
          <p>Email: ${email5}</p>
      </div>
      <div class="info-container">
          <p>School: ${school}</p>
      </div>
  </div>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    // Questions for Employee #1
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the manager?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What title is this employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: "What is this employee's id number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is this employee's email address?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is this employee's office number?",
    },
    // Questions for Employee #2
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is this employee's office number?",
      },

    
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
