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