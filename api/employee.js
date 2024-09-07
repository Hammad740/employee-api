// api/employees.js
import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { createServer } from 'http';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

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
        url: 'http://localhost:3000',
        description: 'Local server',
      },
    ],
  },
  apis: ['api/employees.js'], // Path to the API docs
};

// Swagger Docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

router.get('/employees', (req, res) => {
  res.send(employees);
});

router.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((employee) => employee.employee_id === id);
  if (!employee) {
    return res.status(404).send('Employee not found');
  }
  res.json(employee);
});

router.post('/employees', (req, res) => {
  const newEmployee = {
    employee_id: employees.length + 1,
    ...req.body,
  };
  employees.push(newEmployee);
  res.send('Employee added successfully');
});

router.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((employee) => employee.employee_id === id);
  if (!employee) {
    return res.status(404).send('Employee not found');
  }
  Object.assign(employee, req.body);
  res.send('Employee updated successfully');
});

router.delete('/employees/:id', (req, res) => {
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

app.use('/api', router);

const server = createServer(app);

export default serverless(server);
