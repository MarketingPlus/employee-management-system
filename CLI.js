const inquirer = require("inquirer");
const figlet = require("figlet");

//figlet application name
figlet("Employee \n \n Manager \n \n System", (err, data) => {
    if (err) throw err;
    console.log(data);
})

const runSearchPrompt = () => {
	return inquirer.prompt({
		name: "action",
		type: "list",
		message: "What would you like to do?",
		choices: [
			"View all employees",
			"View all employees by department",
			"View all employees by manager",
			"Add employee",
			"Remove employee",
			"Update employee role",
			"Update employee manager",
			"View all roles",
			"Add role",
			"Remove role",
			"View all departments",
			"Add department",
			"Remove department",
			"View utilized budget by department",
		],
	});
};