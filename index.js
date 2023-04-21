const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// Prompt user for inputs
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    }
])
.then(data => {
    const markdown = generateMarkdown(data);
    // Write markdown to README file
    fs.writeFile('README.md', markdown, (err) => {
        if (err) throw err;
        console.log('README.md file created successfully!');
    });
});

