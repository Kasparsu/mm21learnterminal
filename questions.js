import inquirer from 'inquirer';
inquirer
  .prompt([
    {type:'input', name:'age', message: 'How old are you?'},
    {type:'input', name:'age1', message: 'How old are you?'},
    {type:'input', name:'age2', message: 'How old are you?'},
    {type:'input', name:'age3', message: 'How old are you?'},
  ])
  .then((answers) => {
    console.log(`I am ${answers.age} years old`);
  })