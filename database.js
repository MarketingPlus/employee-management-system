const util = require("util");
const mysql = require("mysql");

// MySQL DB Connection Information
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "employee_tracker",
});

connection.connect(err => {
	if (err) {
		return console.error(`error connecting: ${err.stack}`);
	}
	console.log(`connected as id ${connection.threadId}`);
});

const query = util.promisify(connection.query.bind(connection));

class DB {
	// READ
	viewEmployees(type, answer) {
		let searchQuery =
			"SELECT e.id, e.first_name AS 'First Name', e.last_name AS 'Last Name', title AS Title, ";
		searchQuery +=
			"salary AS Salary, name AS Department, CONCAT(m.first_name, ' ', m.last_name) AS Manager ";
		searchQuery += "FROM employee e ";
		searchQuery += "INNER JOIN role ON e.role_id = role.id ";
		searchQuery +=
			"INNER JOIN department ON role.department_id = department.id ";
		searchQuery += "LEFT JOIN employee m ON e.manager_id = m.id ";

		if (type === "department") {
			searchQuery += "WHERE department.name = ? ";
		}

		if (type === "manager") {
			searchQuery += "WHERE CONCAT(m.first_name, ' ', m.last_name) = ? ";
		}

		searchQuery += "ORDER BY e.id ASC";

		return query(searchQuery, answer);
	}
    viewRoles() {
		let searchQuery =
			"SELECT title AS Title, salary AS Salary, name AS Department ";
		searchQuery += "FROM role ";
		searchQuery +=
			"INNER JOIN department ON role.department_id = department.id ";

		return query(searchQuery);
	}
}

module.exports = new DB();
