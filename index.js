const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

let teamResult = []

function teamName() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your team?",
        }
    ])
        .then(function (data) {
            const teamNameInput = data.name;
            teamResult.push(teamNameInput);
            addManager();
        })
};

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
        .then(function (data) {
            const name = data.name
            const id = teamResult.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new engineer(name, id, email, github)
            teamResult.push(teamMember)
            addTeamMembers()
        });
}

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
        .then(function (data) {
            const name = data.name
            const id = teamResult.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new intern(name, id, email, school)
            teamResult.push(teamMember)
            addTeamMembers()
        });

};

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamData",
            message: "Would you like to add more team members?",
            choices: ["Add an engineer", "Add an intern", "No, my team is complete"],

        }
    ])
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

function generateHTML() {
    const html = [];
    const htmlStart = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamResult[0]}</title>
</head>
<body>
    <div class="banner-bar">
        <h1>${teamResult[0]}</h1>
    </div>
    <div class="card-container">
    `
    html.push(htmlStart);

    for (let i = 1; i < teamResult.length; i++) {
        let card = `
    <div class="member-card">
        <div class="card-top">
            <h2>${teamResult[i].name}</h2>
            <h2>${teamResult[i].title}</h2>
        </div>
        <div class="card-bottom">
            <p>Employee ID: ${teamResult[i].id}</p>
            <p>Email: <a href="mailto:${teamResult[i].email}">${teamResult[i].email}</a>></p>
    `
        if (teamResult[i].officeNumber) {
            card += `
        <p>${teamResult[i].officeNumber}</p>
        `
        }
        if (teamResult[i].github) {
            card += `
        <p>GitHub: <a href="https://github.com/${teamResult[i].github}">${teamResult[i].github}</a></p>
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

    const htmlEnd = `
    </div>
    </body>
    </html>`

    html.push(htmlEnd);

    fs.writeFile("index.html", html.join(""), (err) =>
    err ? console.log(err) : console.log("Success! HTML file created")
    );
}


teamName();