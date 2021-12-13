//Team profile generator
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const createCard = require('./lib/createCard');
const generateHTML = require('./lib/generateHTML');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

//Variables
let midString ="";

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = async () => {
  let promptTemp = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the NAME of the team manager:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter ID of the team manager:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter EMAIL of the team manager:',
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Enter the OFFICE NUMBER of the team manager',
    },
  ]);
  console.log(promptTemp)
  const manInfo = new Manager(promptTemp.name, promptTemp.id, promptTemp.email, promptTemp.officeNum)

  return await createCard.createManager(manInfo)

};

//Second set of questions for Engineer and Intern
const secondPrompt = async (midString) =>{
  let status ='';
  do{
    let temp = [];
    // var cardHolder = document.querySelector(".cardHolder");
    temp = await inquirer.prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'Do you want to add an employee?',
        choices: ['Engineer','Intern','No']
      },
  
      
     
    ]);
    console.log(temp)
    status = await switchCheck(temp.employeeType)
    if (status===false) {
      return midString;
    } else {
      let ogVal =midString
      let holder = status;
      midString = ogVal.concat(holder);
      console.log("in Do:"+ midString)
    }

    // return false;
  }while(status != false);
  } ;
  

const init = async () => {
  promptUser()
    .then((answers) => midString=answers)
    .then(()=>secondPrompt(midString))
    .then((midString) => writeFileAsync('index.html', generateHTML.generateMarkdown(midString)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

//starts file
init();


//Check what other roles to add
async function switchCheck(casePass) {
  switch(casePass){
    case 'Engineer':
      console.log("Engineer x")
      let engCase = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the NAME of the engineer:',
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter ID of the engineer:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter EMAIL of the engineer:',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter the GITHUB of the engineer',
        },
       
      ]);
      const engInfo = new Engineer(engCase.name, engCase.id, engCase.email, engCase.github)

      let tempEng = createCard.createEngineer(engInfo)
      
      return tempEng
    break;

    case 'Intern':
      console.log("intern x")
      let intCase = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the NAME of the intern:',
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter ID of the intern:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter EMAIL of the intern:',
        },
        {
          type: 'input',
          name: 'school',
          message: 'Enter the SCHOOL of the intern',
        },
       
      ]);
      const intInfo = new Intern(intCase.name, intCase.id, intCase.email, intCase.school)

      let tempInt = createCard.createIntern(intInfo)
      return tempInt

    break;

    default:
      console.log("nah")
      return false
  }


}

