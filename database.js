const util = require("util");
const mysql = require("mysql");

// MySQL DB Connection Information
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "employee_tracker",
});
