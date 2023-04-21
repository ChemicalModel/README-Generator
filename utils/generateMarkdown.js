const generateMarkdown = (data) => {
  // Generate the badge based on selected license
  let licenseBadge = '';
  if (data.license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (data.license === 'Apache 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (data.license === 'GPL 3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (data.license === 'BSD 3-Clause') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }

  // Generate the markdown for the README
  const markdown = `
# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is covered under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions or would like to contribute to this project, please contact me at [${data.email}](mailto:${data.email}). You can also find more of my work on [GitHub](https://github.com/${data.github}/).
  `;
  return markdown;
};

module.exports = generateMarkdown;