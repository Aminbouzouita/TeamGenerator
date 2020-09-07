const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
let teamNumber;
const employee = [];
const teamnumber = [
    {
        type: "input",
        message: "How many members are in the team you wants to generate",
        name: "teamnumber"
    }
];
const employerquestion = [
    {
        type: "input",
        message: "Enter Name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter ID",
        name: "id"
    },
    {
        type: "input",
        message: "Enter Email",
        name: "email"
    },
    {
        type: "list",
        message: "Enter Role",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
    }

];
const employeetype = {
    engineer: { type: "input", message: "Enter GitHub Username", name: "info" },
    manager: { type: "input", message: "Enter Office Number", name: "info" },
    intern: { type: "input", message: "Enter School", name: "info" }
};

function prompt() {
    inquirer.prompt(teamnumber).then(function (res, err) {
        if (err) {
            throw error;
        }
        teamNumber = res.teamnumber;
        Employeeprompt();
    });
};
function Employeeprompt() {
    inquirer.prompt(employerquestion).then(function (answers, err) {
        if (err) {
            throw error;
        }
        const role = answers.role;
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        switch (role) {
            case "Manager":
                inquirer.prompt(employeetype.manager).then(function (answer) {
                    const info = answer.info;
                    employee.push(new Manager(name, id, email, info, role));
                    if (employee.length == teamNumber) {
                        Writefile();
                    }
                    else {
                        Employeeprompt();
                    }
                });
                break;
            case "Engineer":
                inquirer.prompt(employeetype.engineer).then(function (answer) {
                    info = answer.info;
                    employee.push(new Engineer(name, id, email, info, role));
                    if (employee.length == teamNumber) {
                        Writefile();
                    }
                    else {
                        Employeeprompt();
                    }
                });
                break;
            case "Intern":
                inquirer.prompt(employeetype.intern).then(function (answer) {
                    info = answer.info;
                    employee.push(new Intern(name, id, email, info, role));
                    if (employee.length == teamNumber) {
                        Writefile();
                    }
                    else {
                        Employeeprompt();
                    }
                });
                break;
        };
    });
}
function Writefile() {
    const renderedHtml = render(employee);
    fs.writeFile(outputPath, renderedHtml, err => {
        if (err) throw err;
    });
};
prompt();