// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const projectInput = () => {
    return inquirer.createPromptModule([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install this project. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please describe how to install this project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please describe how you use this project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to add contribution guidelines?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Explain guidelines for contributions to this project.',
            when: ({ confirmContribution }) => confirmContribution
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to add test instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Explain how to run tests for this application.',
            when: ({ confirmTest }) => confirmTest
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}`, data, (err) =>
        err ? console.log(err) : console.log(`${fileName}.md was made.`)
    );
};

// TODO: Create a function to initialize app
async function init() {
    let input = projectInput();
    writeToFile(input.fileName, generateMarkdown(input));
};

// Function call to initialize app
init();
