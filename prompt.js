const inquirer = require("inquirer");
const fs = require("fs")
const template_src = require("./src/page-template")
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { writeFile } = require("./utils/generate-site");
const teamArray = [];

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
      },

      {
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
    .then((answers) => {
      const managername = answers.managerName;
      const managerid = answers.managerId;
      const manageremail = answers.managerEmail;
      const managerofficenumber = answers.managerOfficeNumber;
      const newManager = new Manager(
        managername,
        managerid,
        manageremail,
        managerofficenumber
      );
      teamArray.push(newManager);
      addmemberfunction();
    });
}

//-----------------------------------------------------------------------------
// function that ask for employee info

  const AddNewMemberQuestion = [
    {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to add members on your team",
      },
    
    {
      type: "list",
      name: "addMember",
      message: "Which one of these member are you trying to add",
      choices: ["software Engineer", "intern", "manager"],
      when: ({ confirmAddMember }) => {
        if (confirmAddMember) {
            return true;
            // addmemberfunction();
        } else {
            return false;
        }
      },
    },
  ]

function addmemberfunction() {
  inquirer.prompt(AddNewMemberQuestion).then((answers) => {
      console.log(answers)
    if (answers.addMember == "software Engineer") {
      softwareEngineer();
    } else if (answers.addMember == "intern") {
      intern();
    } else if (answers.addMember == "manager") {
        makeManager();
    }else {
        teamArray.push(answers);
        createTeam(teamArray);
    }
  });
}

function softwareEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's his name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("What is the name of the engineer?");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
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
        name: "engineerEmail",
        message: "What is the engineer's email?",
        validate: (answer) => {
          const pass = answer.match(/^[^\s@]+@[^\s@]+$/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email.";
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github?",
        validate: (answer) => {
          const pass = answer.match(/^[^\s@]+@[^\s@]+$/);
          if (pass) {
            return true;
          }
          return "Please enter a valid github.";
        },
      },
    ])
    .then((answers) => {
      const name = answers.name;
      const id = answers.engineerId;
      const email = answers.engineerEmail;
      const github = answers.engineerGithub;
      const newEngineer = new Engineer(name, id, email, github);
      teamArray.push(newEngineer);
      addmemberfunction();
    });
}


function intern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What's his name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("What is the name of the intern?");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID?",
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
          name: "internEmail",
          message: "What is the intern's email?",
          validate: (answer) => {
            const pass = answer.match(/^[^\s@]+@[^\s@]+$/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email.";
          },
        },
        {
          type: "input",
          name: "school",
          message: "What school is he from?",
          validate: (answer) => {
            const pass = answer.match(/^[^\s@]+@[^\s@]+$/);
            if (pass) {
              return true;
            }
            return "Please enter a valid school.";
          },
        },
      ])
      .then((answers) => {
        const name = answers.name;
        const id = answers.internId;
        const email = answers.internEmail;
        const school = answers.school;
        const newIntern = new Intern(name, id, email, school);
        teamArray.push(newIntern);
        addmemberfunction();
      });
  }

  function createTeam(array){
      console.log(array)
    //   console.log(array[0].name);
      template_src(array)
      const indexData = template_src(array);
      console.log(indexData)
      fs.writeFileSync("./dist/index.html", indexData, "utf-8", (err) => {
          if(err){
              console.log(err);
          } else {
              console.log("file was created");
          }
      })
  }


makeManager()
