// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

let teamResult = []
// Initial function for prompts
function teamName() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your team?",
        }
    ])
        .then(function (data) {
            teamResult.push(data.name);
            addManager();
        })
};

// Function for manager prompt 
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the team's manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your team manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
    ])
    // Adds command line inputs
        .then(function (data) {
            const name = data.name;
            const id = 1;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const teamMember = new manager(name, id, email, officeNumber);
            teamResult.push(teamMember);
            addTeamMembers();
        })
};

// Function for engineer prompt 
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub profile name?"
        },
    ])
      // Adds command line inputs
        .then(function (data) {
            const name = data.name
            const id = teamResult.length
            const email = data.email
            const github = data.github
            const teamMember = new engineer(name, id, email, github)
            teamResult.push(teamMember)
            addTeamMembers()
        });
}

// Function for intern prompt 
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
        },
    ])
      // Adds command line inputs
        .then(function (data) {
            const name = data.name
            const id = teamResult.length 
            const email = data.email
            const school = data.school
            const teamMember = new intern(name, id, email, school)
            teamResult.push(teamMember)
            addTeamMembers()
        });

};

// Function to ass user if they would like to add more team members
function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamData",
            message: "Would you like to add more team members?",
            choices: ["Add an engineer", "Add an intern", "No, my team is complete"],

        }
    ])
    // Runs corresponding function according to user's choice
        .then(function (data) {
            switch (data.teamData) {
                case "Add an engineer":
                    addEngineer();
                    break;

                case "Add an intern":
                    addIntern();
                    break;

                case "No, my team is complete":
                    generateHTML();
                    break;
            }
        })
}

// Generates the HTML file
function generateHTML() {
    const html = [];
    // First section of HTML
    const htmlStart = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamResult[0]}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div>
        <h1 class="text-center bg-dark text-white">${teamResult[0]}</h1>
    </div>
    <div class="container">
    <div class="row text-center">
    `
    html.push(htmlStart);

    // Main section of HTML
    // For loop to create cards
    for (let i = 1; i < teamResult.length; i++) {
        let card = `
    <div class="card d-flex flex-row bd-highlight m-4">
        <div class="card-body">
            <h2 class="card-title bg-dark text-white text-center" style="width: 15rem;">${teamResult[i].name}</h2>
            <h4 class="card-subtitle mb-2 text-muted text-center">${teamResult[i].title}</h4>
            <p>Employee ID: ${teamResult[i].id}</p>
            <p>Email: <a href="mailto:${teamResult[i].email}">${teamResult[i].email}</a></p>
            
    `
        if (teamResult[i].officeNumber) {
            card += `
        <p>Office Number: ${teamResult[i].officeNumber}</p>
        `
        }
        if (teamResult[i].github) {
            card += `
        <p>GitHub: <a href="https://github.com/${teamResult[i].github}" target="blank">${teamResult[i].github}</a></p>
        `
        }
        if (teamResult[i].school) {
            card += `
        <p>School: ${teamResult[i].school}</p>
        `
        }
        card += `
    </div>
    </div>
    `
        html.push(card);
    }

    // Bottom of HTML
    const htmlEnd = `
    </div>
    </div>
    </body>
    </html>`

    html.push(htmlEnd);

    // Creates the index.html file in the dist folder
    fs.writeFile("./dist/index.html", html.join(""), (err) =>
    err ? console.log(err) : console.log("Success! HTML file created")
    );
}


teamName();