const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email)
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