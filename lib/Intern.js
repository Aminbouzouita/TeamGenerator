// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
        this.school = school;

    }
    getRole(role) {
        return this.role;
    }
    getSchool(school) {
        return this.school;
    }

}

module.exports = Intern; 