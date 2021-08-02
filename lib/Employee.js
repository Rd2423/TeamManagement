const inquirer = require("inquirer");

class Employee {
  constructor(name, position, id) {
    this.name = name;
    this.position = position;
    this.id = id;
    this.title = "Employee"
  }
  
  getName(){
      return this.name;
  };

  getId() {
    return this.id;
};

getEmail() {
    return this.email;
};

getRole(){
    return this.title;
};

};
module.exports = Employee;
