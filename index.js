// const express = require('express');
// const app = express();
// const PORT = 3000;
// app.use(express.json());
// let employees = [
//   {
//     employee_id: 1,
//     first_name: 'Dewey',
//     last_name: 'Dello',
//     age: 34,
//     email: 'ddello0@live.com',
//     gender: 'Male',
//     job_title: 'Human Resources Assistant IV',
//     department: 'Accounting',
//     salary: 111749.17,
//     hire_date: '4/9/2014',
//   },
//   {
//     employee_id: 2,
//     first_name: 'Daryl',
//     last_name: 'Bale',
//     age: 58,
//     email: 'dbale1@slate.com',
//     gender: 'Male',
//     job_title: 'Research Associate',
//     department: 'Engineering',
//     salary: 123679.3,
//     hire_date: '11/28/2017',
//   },
//   {
//     employee_id: 3,
//     first_name: 'Trude',
//     last_name: 'Boatman',
//     age: 53,
//     email: 'tboatman2@wikipedia.org',
//     gender: 'Female',
//     job_title: 'Research Nurse',
//     department: 'Research and Development',
//     salary: 53623.39,
//     hire_date: '12/31/2012',
//   },
//   {
//     employee_id: 4,
//     first_name: 'Lock',
//     last_name: 'Westcarr',
//     age: 24,
//     email: 'lwestcarr3@bravesites.com',
//     gender: 'Male',
//     job_title: 'Research Associate',
//     department: 'Legal',
//     salary: 143120.13,
//     hire_date: '8/22/2011',
//   },
//   {
//     employee_id: 5,
//     first_name: 'Hillard',
//     last_name: 'Hesser',
//     age: 65,
//     email: 'hhesser4@constantcontact.com',
//     gender: 'Male',
//     job_title: 'Geological Engineer',
//     department: 'Business Development',
//     salary: 105744.52,
//     hire_date: '6/23/2019',
//   },
//   {
//     employee_id: 6,
//     first_name: 'Herc',
//     last_name: 'Goulborne',
//     age: 48,
//     email: 'hgoulborne5@china.com.cn',
//     gender: 'Male',
//     job_title: 'Web Developer IV',
//     department: 'Training',
//     salary: 146975.62,
//     hire_date: '1/21/2019',
//   },
//   {
//     employee_id: 7,
//     first_name: 'Elna',
//     last_name: 'Henworth',
//     age: 49,
//     email: 'ehenworth6@example.com',
//     gender: 'Female',
//     job_title: 'Budget/Accounting Analyst I',
//     department: 'Sales',
//     salary: 78895.27,
//     hire_date: '10/19/2015',
//   },
//   {
//     employee_id: 8,
//     first_name: 'Nealson',
//     last_name: 'Pernell',
//     age: 50,
//     email: 'npernell7@un.org',
//     gender: 'Male',
//     job_title: 'Safety Technician I',
//     department: 'Human Resources',
//     salary: 64123.79,
//     hire_date: '3/22/2011',
//   },
//   {
//     employee_id: 9,
//     first_name: 'Luelle',
//     last_name: 'Semrad',
//     age: 56,
//     email: 'lsemrad8@indiegogo.com',
//     gender: 'Female',
//     job_title: 'Data Coordinator',
//     department: 'Marketing',
//     salary: 148057.86,
//     hire_date: '10/26/2016',
//   },
//   {
//     employee_id: 10,
//     first_name: 'Bambi',
//     last_name: 'de Merida',
//     age: 59,
//     email: 'bdemerida9@yellowbook.com',
//     gender: 'Female',
//     job_title: 'Business Systems Development Analyst',
//     department: 'Services',
//     salary: 79530.83,
//     hire_date: '11/29/2016',
//   },
// ];

// //? GET ALL EMPLOYEES
// app.get('/employees', (req, res) => {
//   res.send(employees);
// });

// //? GET EMPLOYEE BY ID
// app.get('/employees/:id', (req, res) => {
//   const id = parseInt(req.params.id);

//   const employee = employees.find((employee) => employee.employee_id === id);
//   if (!employee) {
//     return res.status(404).send('Employee not found');
//   }
//   res.json(employee);
// });

// //? ADD A NEW EMPLOYEE
// app.post('/employees', (req, res) => {
//   const newEmployee = {
//     employee_id: employees.length + 1,
//     ...req.body,
//   };
//   employees.push(newEmployee);
//   res.send('Employee added successfully');
// });
// //? UPDATE AN EMPLOYEE
// app.put('/employees/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const employee = employees.find((employee) => employee.employee_id === id);
//   if (!employee) {
//     return res.status(404).send('Employee not found');
//   }
//   const {
//     first_name,
//     last_name,
//     age,
//     email,
//     gender,
//     job_title,
//     department,
//     salary,
//     hire_date,
//   } = req.body;
//   Object.assign(employee, req.body);
//   res.send('Employee updated successfully');
// });

// //? DELETE AN EMPLOYEE
// app.delete('/employees/:id', (req, res) => {
//   const id = parseInt(req.params.id);

//   const employeeIndex = employees.findIndex(
//     (employee) => employee.employee_id === id
//   );
//   if (employeeIndex === -1) {
//     return res.status(404).send('Employee not found');
//   }
//   employees.splice(employeeIndex, 1);
//   res.json(employees);
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const PORT = 3000;

app.use(express.json());

let employees = [
  // ... your employees data
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
