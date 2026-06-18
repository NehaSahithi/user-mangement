# User Management App - Frontend

A modern and responsive User Management Application frontend built using React. This application allows users to manage user information efficiently through an intuitive interface with features such as user creation, editing, viewing, and deletion.

## Features

- User Registration Form
- View All Users
- Update User Details
- Delete Users
- Responsive Design
- Form Validation
- API Integration with Backend
- Loading and Error Handling
- Clean and User-Friendly UI

## Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- React Router DOM

## Project Structure

```text
src/
│
├── components/
│   ├── AddUser.jsx
|   |__ Footer.jsx
│   ├── UserList.jsx
│   ├── User.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── AddUser.jsx
│   ├── EditUser.jsx
│
├── services/
│   └── userService.js
│
├── App.js
├── index.js
└── styles/
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to Project Directory

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

The application will run on:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Update the URL according to your backend server configuration.

## API Endpoints Used

| Method | Endpoint | Description |
|----------|-----------|-------------|
| GET | /users | Fetch all users |
| GET | /users/:id | Fetch single user |
| POST | /users | Create a new user |
| PUT | /users/:id | Update user details |
| DELETE | /users/:id | Delete a user |

## Available Scripts

### Run Development Server

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Screenshots

Add application screenshots here.

### Home Page

```
Screenshot Here
```

### Add User Page

```
Screenshot Here
```

### User List Page

```
Screenshot Here
```

## Future Enhancements

- User Authentication
- Role-Based Access Control
- Search and Filtering
- Pagination
- Dark Mode
- Profile Picture Upload
- Dashboard Analytics

## Learning Outcomes

Through this project, I gained experience in:

- Building reusable React components
- Managing application state
- Integrating frontend with REST APIs
- Handling forms and validations
- Implementing CRUD operations
- Creating responsive user interfaces
