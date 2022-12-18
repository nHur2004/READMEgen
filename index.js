// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const projectInput = () => {
    return inquirer.createPromptModule([
        { // Title Input
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
        { // Desc Input
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
        { // Install Input
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
        { // Usage Input
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
        { // Contribution Input
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
        { // Tests Input
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
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project. (Required)',
            choices: [
                "Academic Free License v3.0",
                "Apache license 2.0",
                "Artistic license 2.0",
                "Boost Software License 1.0",
                "BSD 2-clause 'Simplified' license",
                "BSD 3-clause 'New' or 'Revised' license",
                "BSD 3-clause Clear license",
                "Creative Commons license family",
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Attribution Share Alike 4.0",
                "Do What The F*ck You Want To Public License",
                "Educational Community License v2.0",
                "Eclipse Public License 1.0",
                "Eclipse Public License 2.0",
                "European Union Public License 1.1",
                "GNU Affero General Public License v3.0",
                "GNU General Public License family",
                "GNU General Public License v2.0",
                "GNU General Public License v3.0",
                "GNU Lesser General Public License family",
                "GNU Lesser General Public License v2.1",
                "GNU Lesser General Public License v3.0",
                "ISC",
                "LaTeX Project Public License v1.3c",
                "Microsoft Public License",
                "MIT",
                "Mozilla Public License 2.0",
                "Open Software License 3.0",
                "PostgreSQL License",
                "SIL Open Font License 1.1",
                "University of Illinois/NCSA Open Source License",
                "The Unlicense",
                "zLib License"
            ]
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
