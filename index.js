// TODO: Include packages needed for this application
const fs = require ("fs");
const inquirer = require ("inquirer")

const generatePage = require ("./utils/generateMarkdown.js");

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
        message: "What command should be run for instillation?",
        name: "instillation"
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

