const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const PORT = 3000;
const cors=require('cors')
app.use(cors());
app.use(express.json());

let employees = [
  {
    employee_id: 1,
    first_name: 'Dewey',
    last_name: 'Dello',
    age: 34,
    email: 'ddello0@live.com',
    gender: 'Male',
    job_title: 'Human Resources Assistant IV',
    department: 'Accounting',
    salary: 111749.17,
    hire_date: '4/9/2014',
  },
  {
    employee_id: 2,
    first_name: 'Daryl',
    last_name: 'Bale',
    age: 58,
    email: 'dbale1@slate.com',
    gender: 'Male',
    job_title: 'Research Associate',
    department: 'Engineering',
    salary: 123679.3,
    hire_date: '11/28/2017',
  },
  {
    employee_id: 3,
    first_name: 'Trude',
    last_name: 'Boatman',
    age: 53,
    email: 'tboatman2@wikipedia.org',
    gender: 'Female',
    job_title: 'Research Nurse',
    department: 'Research and Development',
    salary: 53623.39,
    hire_date: '12/31/2012',
  },
  {
    employee_id: 4,
    first_name: 'Lock',
    last_name: 'Westcarr',
    age: 24,
    email: 'lwestcarr3@bravesites.com',
    gender: 'Male',
    job_title: 'Research Associate',
    department: 'Legal',
    salary: 143120.13,
    hire_date: '8/22/2011',
  },
];

// Swagger Configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Employee Management API',
      version: '1.0.0',
      description: 'A simple CRUD API to manage employees',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Local server',
      },
    ],
  },
  apis: ['index.js'], // Path to the API docs
};

// Swagger Docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - employee_id
 *         - first_name
 *         - last_name
 *         - age
 *         - email
 *         - gender
 *         - job_title
 *         - department
 *         - salary
 *         - hire_date
 *       properties:
 *         employee_id:
 *           type: integer
 *           description: The auto-generated ID of the employee
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         age:
 *           type: integer
 *         email:
 *           type: string
 *         gender:
 *           type: string
 *         job_title:
 *           type: string
 *         department:
 *           type: string
 *         salary:
 *           type: number
 *         hire_date:
 *           type: string
 *           format: date
 *       example:
 *         employee_id: 1
 *         first_name: Dewey
 *         last_name: Dello
 *         age: 34
 *         email: ddello0@live.com
 *         gender: Male
 *         job_title: Human Resources Assistant IV
 *         department: Accounting
 *         salary: 111749.17
 *         hire_date: '2014-04-09'
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Returns the list of all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */

// redirect to api docs page
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Get all employees
app.get('/employees', (req, res) => {
  res.send(employees);
});

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The employee ID
 *     responses:
 *       200:
 *         description: The employee description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee not found
 */
app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((employee) => employee.employee_id === id);
  if (!employee) {
    return res.status(404).send('Employee not found');
  }
  res.json(employee);
});

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Add a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Employee added successfully
 */
app.post('/employees', (req, res) => {
  const newEmployee = {
    employee_id: employees.length + 1,
    ...req.body,
  };
  employees.push(newEmployee);
  res.send('Employee added successfully');
});

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Update an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *       404:
 *         description: Employee not found
 */
app.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((employee) => employee.employee_id === id);
  if (!employee) {
    return res.status(404).send('Employee not found');
  }
  Object.assign(employee, req.body);
  res.send('Employee updated successfully');
});

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The employee ID
 *     responses:
 *       200:
 *         description: The employee was deleted
 *       404:
 *         description: Employee not found
 */
app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employeeIndex = employees.findIndex(
    (employee) => employee.employee_id === id
  );
  if (employeeIndex === -1) {
    return res.status(404).send('Employee not found');
  }
  employees.splice(employeeIndex, 1);
  res.json(employees);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
