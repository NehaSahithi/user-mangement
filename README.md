# User Management

A full-stack user management application with a React frontend and an Express/MongoDB backend.

## Project Structure

- `Backend/` - Express server, MongoDB connection, user API routes
- `Frontend/` - React + Vite frontend application
- `req.http` - API request examples

## Setup

### Backend

1. Navigate to the backend folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your MongoDB connection:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend:
   ```bash
   node server.js
   ```

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

## Deployment Notes

- The backend is deployed on Render.
- The frontend is deployed on Vercel.
- CORS must be enabled on the backend for the frontend origin (`https://user-management-mocha.vercel.app`).

## API

- `POST /user-api/users` - Create a user
- `GET /user-api/users` - Get all users
- `PUT /user-api/users/:id` - Update a user
- `DELETE /user-api/users/:id` - Delete a user

## GitHub

Repository: https://github.com/Busam-Snigdha-Reddy/User-Management
