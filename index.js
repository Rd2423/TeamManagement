const { writeFile } = require('./utils/generate-site.js');
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee.js")

// Array where all the data is going to be pushed
const managerArray = [];
const teamArray = [];


// function that ask for employee info
  function createTeam() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "what's is his name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        }
      },
      {
        type: "checkbox",
        name: "position",
        message: "What is his position on the team?",
        choices: ["Software Engineer", "intern"],
        validate: (answerInput) => {
          if (answerInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "What is your badge ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your ID");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is his email address",
        validate: (answer) => {
          const pass = answer.match(/^[^\s@]+@[^\s@]+$/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email.";
        }
      },
      {
        type: "input",
        name: "github",
        message: "What is his github username",
        validate: (answer) => {
          const pass = answer.match(/^[^\s@]+@[^\s@]+$/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email.";
        }
      },
    {
        type: 'confirm',
        name: 'addAnotherMember'
    }
    ]).then(answersData => {
        teamArray.push(answersData);
        if(answersData.addAnotherMember){
            return teamInfo(teamArray);
        } else {
            return teamArray;
        }
    })
  };
  
//-----------------------------------------------------------------------------------------------------------------------------

// function that ask the manager info
  function makeManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name with at least three characters.";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's ID?",
          validate: (answer) => {
            const pass = answer.match(/^[0-9]*$/);
            if (pass) {
              return true;
            }
            return "Please enter only numbers.";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
          validate: (answer) => {
            const pass = answer.match(/^[^\s@]+@[^\s@]+$/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email.";
          },

          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[0-9]*$/);
            if (pass) {
              return true;
            }
            return "Please enter only numbers.";
          },
        },
      ])
      .then(answers => {
        managerArray.push(answers);
        if(answers){
            return true;
        } else {
            return '';
        }
        
      });
    }

makeManager()
.then(createTeam)
.then(answers => {
    return 
})


//     function createTeam() {
//       // Prompt what is your job position
//       // If statement === "whatever job position you choose"
//       // Call function for that job positon and spepcific questions for that postion
//       // Push to team
//       // Get team to render to HTML
//     }
//   }



