require("console.table");

const database = require("./database");
const {
	runSearchPrompt,
	viewByDeptPrompt,
	viewByManagerPrompt,
	addEmployeePrompt,
	removeEmployeePrompt,
	updateRolePrompt,
	updateManagerPrompt,
	addRolePrompt,
	removeRolePrompt,
	addDepartmentPrompt,
	removeDepartmentPrompt,
	viewBudgetPrompt,
} = require("./CLI.js");

const runSearch = async () => {
	const answer = await runSearchPrompt();

	switch (answer.action) {
		case "View all employees":
			viewEmployees();
			break;
		case "View all employees by department":
			viewByDept();
			break;
		case "View all employees by manager":
			viewByManager();
			break;
		case "Add employee":
			addEmployee();
			break;
		case "Remove employee":
			removeEmployee();
			break;
		case "Update employee role":
			updateRole();
			break;
		case "Update employee manager":
			updateManager();
			break;
		case "View all roles":
			viewRoles();
			break;
		case "Add role":
			addRole();
			break;
		case "Remove role":
			removeRole();
			break;
		case "View all departments":
			viewDepartments();
			break;
		case "Add department":
			addDepartment();
			break;
		case "Remove department":
			removeDepartment();
			break;
		case "View utilised budget by department":
			viewBudget();
			break;
	}
};

const viewEmployees = async (type, answer) => {
	try {
		console.table(await database.viewEmployees(type, answer));
		runSearch();
	} catch (err) {
		throw err;
	}
};

const viewByDept = async () => {
	try {
		const query = await database.getDepartments();

		const choices = query.map(department => department.name);

		const answer = await viewByDeptPrompt(choices);

		viewEmployees("department", answer.department);
	} catch (err) {
		throw err;
	}
};