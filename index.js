// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownMaker = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your repository.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your repository',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions for your repository',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage instructions for your repository',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines for your repository',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter the test instructions for your repository',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select the license type for your repository',
        choices: ['MIT', 'Mozilla 2.0',],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'user',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdownMaker.generateMarkdown(data), (err) => err ? console.log("Error") : console.log("Success"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response.title + ".md", response);
    });
}

// Function call to initialize app
init();
