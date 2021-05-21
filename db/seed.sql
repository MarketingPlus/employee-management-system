USE employee_tracker;

-- DEPARTMENT 1
INSERT INTO department (name)
VALUES ('Development');

-- DEPARTMENT 2
INSERT INTO department (name)
VALUES ('Quality Assurance');

-- DEPARTMENT 3
INSERT INTO department (name)
VALUES ('Operations');

-- ROLE 1
INSERT INTO role (title, salary, department_id)
VALUES ('Lead Engineer', 120000.00, 1);

-- ROLE 2
INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 90000.00, 1);

-- ROLE 3
INSERT INTO role (title, salary, department_id)
VALUES ('Lead QA Engineer', 100000.00, 2);

-- ROLE 4
INSERT INTO role (title, salary, department_id)
VALUES ('QA Engineer', 70000.00, 2);

-- ROLE 5
INSERT INTO role (title, salary, department_id)
VALUES ('Lead DevOps Engineer', 110000.00, 3);

-- ROLE 6
INSERT INTO role (title, salary, department_id)
VALUES ('DevOps Engineer', 80000.00, 3);

-- EMPLOYEE 1
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Benjamin', 'Wilson', 1);

-- EMPLOYEE 2
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kate', 'Smith', 2, 1);

-- EMPLOYEE 3
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Rachel', 'Co', 3);

-- EMPLOYEE 4
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jordan', 'Sharpe', 4, 3);

-- EMPLOYEE 5
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Liam', 'Dozer', 5);

-- EMPLOYEE 6
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sam', 'Plummer', 6, 5);