// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "None";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/license/mit/)";
    case "Mozilla 2.0":
      return "[Mozilla 2.0 License](https://opensource.org/license/mpl-2-0/)";
    default:
      return "None";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `Copyright <YEAR> <COPYRIGHT HOLDER>

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
      `;
    case "Mozilla 2.0":
      return `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description-header)
* [Installation](#installation-header)
* [Usage](#usage-header)
* [Contributing](#contribution-header)
* [Tests](#testing-header)
* [License](#license-header)
* [Questions](#question-header)
## Description: {#description-header}
${data.description}
## Installation: {#installation-header}
${data.installation}
## Usage: {#usage-header}
${data.usage}
## Contributing: {#contribution-header}
${data.contribution}
## Tests: {#testing-header}
${data.test}
## License: {#license-header}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
## Questions: {#question-header}
Feel free to contact me at either of the two sources below for any questions, concerns, or collaborations. 
* Email: ${data.email}
* GitHub: [${data.user}](https://github.com/${data.user})
`;
}

module.exports = {generateMarkdown};
