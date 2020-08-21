const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email)
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
    getRole(role) {
        return this.role;
    }
    getOfficeNumber(officeNumber) {
        return this.officeNumber;
    }
}

module.exports = Manager; 