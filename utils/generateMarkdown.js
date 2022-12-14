// TODO: This is a function to generate markdown for README
function generateMarkdown (data) {
  return `
  # Project Title
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Content
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Contact Information
  * If you have any enquiries please contact me on the following email.
  ${data.email}
  `;
};

module.exports = generateMarkdown;

