// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


// These are the array of questions for the user.
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What command should be run for installation?",
        name: "installation"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "NONE"
        ]

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, generateMarkdown(data), function (err) { 
     if (err) {
        return console.log(err);
   } else {
    console.log("Your README file has been generated");
   }
});
};

// This function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
    var fileName = 'README.md';
     writeToFile(fileName, data)

    })
}
// Function call to initialize app
init();

