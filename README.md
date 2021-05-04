# TEAM PROFILE GENERATOR

![license](https://img.shields.io/badge/License-[MIT]-blue?style=for-the-badge&logo=appveyor.svg)
![license](https://img.shields.io/badge/JavaScript-100%25-yellow?style=for-the-badge&logo=appveyor.svg)

# Table of Contents 

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Questions](#questions)
5. [Repositories](#repositories)

## Acceptance Criteria:

For this homework assignment, I was task with creating a Team Profile Generator.
The following is the acceptance criteria for this homework:

     * GIVEN a command-line application that accepts user input
     * WHEN I am prompted for my team members and their information
     * THEN an HTML file is generated that displays a nicely formatted team roster based on user input
     * WHEN I click on an email address in the HTML
     * THEN my default email program opens and populates the TO field of the email with the address
     * WHEN I click on the GitHub username
     * THEN that GitHub profile opens in a new tab
     * WHEN I start the application
     * THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
     * WHEN I enter the team manager’s name, employee ID, email address, and office number
     * THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
     * WHEN I select the engineer option
     * THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
     * WHEN I select the intern option
     * THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
     * WHEN I decide to finish building my team
     * THEN I exit the application, and the HTML is generated

## Description:
For this project, I was tasked with creating a Team Profile Generator that would create an HTML file from the command line. When the generator is initiated, the generator will prompt the user a series of questions. It will first ask what is the name of the user's team. After the user have typed in their response, it will ask the user to add in a manager. After that, it will ask the user if they would like to add anymore team members. It will prompt the user to choose between an "engineer", an "intern" or it will prompt the user if they are done and if the team is completed. If the engineer or intern are selected, the user will be prompt to answer more questions. When the user is done adding their team members and have chosen to complete their team, an HTML file will be created. The information the user inputted into the command line will be transferred over to the HTML file. When the HTML file is opened, it will display that team's name at the top. Then, it will list each team member below. It will list their name, role, id and email. If they are a manager, it will list their office number. If they are an engineer, it will list their GitHub page. If they are an intern, it will list the school that they are attending.

## Installation:
To run this application, the following installs will be required:

        * Node.js
        * npm init
        * npm install inquirer
        * npm install jest

## Usage:
This project is intended to be used to generate an HTML file using the user's response from a Node.js command-line application.

## Testing:
Please refer to the video to see how I tested my application. 

<img src = "https://github.com/vickphat/team-profile-generator/blob/master/images/teamprofile.JPG">

https://www.youtube.com/watch?v=X6dsSpjfi7E

## Demo:
The following link is a video that will showcase how to run the application.

https://www.youtube.com/watch?v=C5RLvQy7fSg

## Questions: 
If there are any questions that you may have, please contact me by the following:

* Github: https://github.com/vickphat
* Email: vickphat@gmail.com 
