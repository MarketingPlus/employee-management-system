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

const viewByDeptPrompt = choices => {
	return inquirer.prompt({
		name: "department",
		type: "list",
		message: "View by which department?",
		choices,
	});
};

const viewByManagerPrompt = choices => {
	return inquirer.prompt({
		name: "manager",
		type: "list",
		message: "View by which manager?",
		choices,
	});
};

const addEmployeePrompt = (roleChoices, managerChoices) => {
	return inquirer.prompt([
		{
			name: "firstName",
			type: "input",
			message: "First name: ",
			validate(input) {
				const regex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]|\d/;

				if (!input) {
					return console.log("\nFirst name required");
				} else if (input.match(regex)) {
					return console.log("\nFirst name cannot include numbers or symbols");
				}

				return true;
			},
		},
		{
			name: "lastName",
			type: "input",
			message: "Last name: ",
			validate(input) {
				const regex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]|\d/;

				if (!input) {
					return console.log("\nLast name required");
				} else if (input.match(regex)) {
					return console.log("\nLast name cannot include numbers or symbols");
				}

				return true;
			},
		},
		{
			name: "role",
			type: "list",
			message: "Role: ",
			choices: roleChoices,
		},
		{
			name: "manager",
			type: "list",
			message: "Manager: ",
			choices: managerChoices,
		},
	]);
};

const removeEmployeePrompt = choices => {
	return inquirer.prompt({
		name: "employee",
		type: "list",
		message: "Which employee do you want to remove?",
		choices,
	});
};

const updateRolePrompt = (employeeChoices, roleChoices) => {
	return inquirer.prompt([
		{
			name: "employee",
			type: "list",
			message: "Which employee would you like to update?",
			choices: employeeChoices,
		},
		{
			name: "role",
			type: "list",
			message: "Which role should they be assigned?",
			choices: roleChoices,
		},
	]);
};