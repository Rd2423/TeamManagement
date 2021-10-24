const Employee = require("./Employee");

// create engineer class
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);

    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;