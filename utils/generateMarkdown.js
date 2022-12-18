const licenseArray = [
  "Apache license 2.0",
  "Creative Commons Zero v1.0 Universal",
  "GNU General Public License v3.0",
  "ISC",
  "MIT",
  "Mozilla Public License 2.0",
  "The Unlicense",
  "None"
];
const l = [
  "",
  ": CC0-1.0",
  ": GPL v3",
  ": ISC",
  ": MIT",
  ": MPL 2.0",
  ": Unlicense",
]
const licenseSVGArray = [
  "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  "https://licensebuttons.net/l/zero/1.0/80x15.png",
  "https://img.shields.io/badge/License-GPLv3-blue.svg",
  "https://img.shields.io/badge/License-ISC-blue.svg",
  "https://img.shields.io/badge/License-MIT-yellow.svg",
  "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
  "https://img.shields.io/badge/license-Unlicense-blue.svg",
];
const licenseArray3 = [
  "https://opensource.org/licenses/Apache-2.0",
  "http://creativecommons.org/publicdomain/zero/1.0/",
  "https://www.gnu.org/licenses/gpl-3.0",
  "https://opensource.org/licenses/ISC",
  "https://opensource.org/licenses/MIT",
  "https://opensource.org/licenses/MPL-2.0",
  "http://unlicense.org/",
];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for ( i = 0; i < licenseArray.length; i++ ) {
    if ( license === licenseArray[i] ) {
      return `[![License${l[i]}](${licenseSVGArray[i]})](${licenseArray3[i]})`;
    } if ( license === licenseArray[7] ) {
      return "";
    }
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for ( i = 0; i < licenseArray.length; i++ ) {
    if ( license === licenseArray[i] ) {
      return `[![License${l[i]}]](${licenseArray3[i]})`;
    } if ( license === licenseArray[7] ) {
      return "";
    }
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  for ( i = 0; i < licenseArray.length; i++ ) {
    if ( license === licenseArray[i] ) {
      return `Read more about ${licenseArray[i]} here:`;
    } if ( license === licenseArray[7] ) {
      return "";
    }
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Badges
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#test)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.test}
## Questions? Reach Out
- https://github.com/${data.qLink}
- ${data.qemail}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}`;
}

module.exports = generateMarkdown;
