const inquirer= require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);
// const [name, github] = profileDataArgs;



// fs.writeFile('index.html', pageHTML, err =>{
//   if (err) throw new Error(err);
//   console.log('Portfolio complete! Checkout index.html to see the output!');
// });
// console.log(inquirer);
const promptUser= () => {
  return inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  { 
    type : 'input',
    name: 'github',
    message:'Enter your GitHub Username'
  },
  {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself:'
  
  }
])
};
// promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
  `);
// If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });