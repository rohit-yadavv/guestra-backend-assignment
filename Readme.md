# Menu Management API

## Backend Assignment by Guestra

### Submitted by: Rohit Yadav

#### Live Link:  [https://guestra-backend-assignment.onrender.com/](https://github.com/rohit-yadavv/guestra-backend-assignment)
This is a Node.js backend for managing a menu system, allowing you to create, manage, and retrieve categories, sub-categories, and items. The API supports creating, updating, deleting, and searching for items, along with managing their associated categories and sub-categories.

## Installation Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rohit-yadavv/guestra-backend-assignment.git
   cd guestra-backend-assignment
   ```

2. **Install the required dependencies**:

   ```bash
   npm install
   ```

3. **Set up your database** (MongoDB or any database you prefer). Then, update the `.env` file with your database connection details.

4. **Start the server**:
   ```bash
   npm run start
   ```

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (chosen for its flexibility and ease of integration with Node.js)
- **ORM**: Mongoose

## Project Structure

- `config`: Contains the database connection configuration.
- `controllers`: Holds the logic for handling API requests.
- `models`: Contains the database models (schemas).
- `routes`: Defines the API endpoints.

## Q&A

- **Which database you have chosen and why?**

  - I have chosen MongoDB as the database because it is a NoSQL database and is very easy to use with Node.js. It is also very flexible and can store data in JSON format which is very easy to work with.

- **What are 3 things you learned from this project?**

  - How to manage time efficiently.
  - How to structure a backend project
  - How to design RESTful APIs.

- **What was the most difficult part of the assignment?**

  - Managing the relationships between categories, sub-categories, and items while keeping everything organized was a bit tricky.

- **What would you have done differently with more time?**

  - If I had more time, I would have added features like user authentication with JWT tokens, as well as role-based access control (RBAC). I’d also improve validation and add more middlewares for better security and error handling.
