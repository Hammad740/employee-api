

# Employee Management API

A simple CRUD (Create, Read, Update, Delete) API to manage employees, built with Express.js and documented using Swagger.

## Features

- **Create** a new employee
- **Read** the list of employees or an individual employee's details
- **Update** an existing employee's information
- **Delete** an employee by ID

## Technologies Used

- **Node.js** and **Express.js** for building the API
- **Swagger** for API documentation
- **Swagger UI** for an interactive API testing environment

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/employee-management-api.git
   cd employee-management-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The API should now be running on `http://localhost:3000/`.

### API Documentation

Swagger UI is integrated to provide interactive API documentation. To access the Swagger UI:

1. Start the API server.
2. Go to `http://localhost:3000/api-docs` in your browser.
3. You can see all the available routes and try them out directly from the browser.

### Available Routes

- **GET** `/employees`: Returns a list of all employees.
- **GET** `/employees/:id`: Returns the details of an employee by their ID.
- **POST** `/employees`: Adds a new employee.
- **PUT** `/employees/:id`: Updates an existing employee by their ID.
- **DELETE** `/employees/:id`: Deletes an employee by their ID.

### Example Request

#### Add a new employee

```bash
POST /employees
```

Body:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "gender": "Male",
  "job_title": "Software Engineer",
  "department": "Engineering",
  "salary": 80000,
  "hire_date": "2023-01-10"
}
```

## Project Structure

```
.
├── app.js            # Main entry point for the API
├── package.json      # Project metadata and dependencies
├── node_modules/     # Installed dependencies
└── README.md         # This README file
```

## How to Contribute

1. Fork the project
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

