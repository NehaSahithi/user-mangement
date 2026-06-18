# User Management App - Backend

A robust and scalable backend for the User Management Application built using Node.js, Express.js, and MongoDB. This backend provides RESTful APIs for performing CRUD operations on user data, handling requests securely, and managing database interactions efficiently.

## Features

- Create New Users
- Retrieve All Users
- Retrieve User by ID
- Update User Information
- Delete Users
- RESTful API Architecture
- MongoDB Database Integration
- Error Handling Middleware
- Environment Variable Configuration
- CORS Support
- JSON Data Processing

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Nodemon

## Project Structure

```text
backend/
│
├── API's/
│   └── userAPI.js
│
├── models/
│   └── UserModel.js
├── .env
├── server.js
├── package.json
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to Backend Directory

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Example:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-management
```

## Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will run on:

```text
http://localhost:5000
```

## API Endpoints

### Get All Users

```http
GET /api/users
```

### Get User By ID

```http
GET /api/users/:id
```

### Create User

```http
POST /api/users
```

Sample Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### Update User

```http
PUT /api/users/:id
```

Sample Request Body:

```json
{
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "age": 26
}
```

### Delete User

```http
DELETE /api/users/:id
```

## Database Schema

### User Model

```javascript
{
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number
  }
}
```

## Available Scripts

### Start Server

```bash
npm start
```

### Start Development Server

```bash
npm run dev
```

## Error Handling

The application includes:

- Validation Error Handling
- Database Error Handling
- Invalid Route Handling
- Server Error Responses

Example Error Response:

```json
{
  "success": false,
  "message": "User not found"
}
```

## Testing APIs

You can test the APIs using:

- Postman
- Thunder Client
- Insomnia

## Future Enhancements

- User Authentication using JWT
- Password Encryption with bcrypt
- Role-Based Access Control
- Pagination
- Search and Filtering
- Rate Limiting
- API Documentation with Swagger
- Unit and Integration Testing

## Learning Outcomes

Through this project, I gained experience in:

- Building RESTful APIs
- Working with Express.js
- Database Modeling using Mongoose
- Connecting MongoDB with Node.js
- Implementing CRUD Operations
- Handling Errors and Middleware
- Managing Environment Variables

