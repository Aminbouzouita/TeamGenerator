// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
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