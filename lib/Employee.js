// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";

    }
    getName(name) {
        return this.name;
    }
    getId(id) {
        return this.id;
    }
    getEmail(email) {
        return this.email;
    }
    getRole(role) {
        return this.role;
    }

}

module.exports = Employee; 