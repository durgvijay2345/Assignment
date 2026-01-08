# Task Manager Web App

A simple and clean task management application built with React and Node.js.

## What is this?

This is a full-stack web app where you can:
- Create an account and login securely
- Manage your daily tasks
- Search and filter your tasks
- Track your progress with statistics

## Tech Stack

**Frontend:** React, TailwindCSS  
**Backend:** Node.js, Express  
**Database:** MongoDB  
**Authentication:** JWT (JSON Web Tokens)

## Quick Start

### What you need first

- Node.js installed on your computer
- MongoDB installed (or use MongoDB Atlas for free cloud database)

### Setup in 3 steps

**1. Start MongoDB**
```bash
mongod
```

**2. Backend Setup**
```bash
cd backend
npm install
npm start
```
Server runs at: http://localhost:5000

**3. Frontend Setup** (open new terminal)
```bash
cd frontend
npm install
npm start
```
App opens at: http://localhost:3000

### First time setup

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:3000
```

## How to use

1. Open http://localhost:3000
2. Click "Register" to create your account
3. Login with your credentials
4. Start creating and managing tasks!

## Features

- ✅ Secure user authentication
- ✅ Create, edit, and delete tasks
- ✅ Search tasks by title
- ✅ Filter by status (pending, in-progress, completed)
- ✅ Filter by priority (low, medium, high)
- ✅ View task statistics
- ✅ Fully responsive design

## Project Structure

```
├── backend/          # Node.js API
│   ├── models/       # Database models
│   ├── routes/       # API endpoints
│   └── controllers/  # Business logic
│
└── frontend/         # React app
    ├── components/   # Reusable UI components
    ├── pages/        # Main pages
    └── services/     # API calls
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Common Issues

**MongoDB not connecting?**
- Make sure MongoDB is running: `mongod`
- Check if port 27017 is available

**Port already in use?**
- Backend: Change `PORT` in `.env`
- Frontend: React will ask to use another port

**Module not found?**
- Delete `node_modules` folder
- Run `npm install` again

## Deployment

This app is ready to deploy on:
- **Frontend**: Vercel, Netlify
- **Backend**: Heroku, Railway, Render
- **Database**: MongoDB Atlas (free tier available)

## Security Features

- Passwords are hashed (bcrypt)
- JWT tokens for authentication
- Protected API routes
- Input validation on both frontend and backend
- Rate limiting to prevent abuse

## Need Help?

- Check `QUICKSTART.md` for detailed setup
- See `SCALABILITY.md` for production deployment
- Import `Postman_Collection.json` to test APIs

## License

MIT License - feel free to use this project however you want!


