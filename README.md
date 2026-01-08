# Scalable Web Application with Authentication & Dashboard

A full-stack web application built with React.js, Node.js/Express, and MongoDB featuring JWT authentication, CRUD operations, and a responsive dashboard.

## 🚀 Features

### Frontend
- ⚛️ Built with **React.js 18**
- 🎨 **TailwindCSS** for responsive design
- 🔐 JWT-based authentication
- 🛡️ Protected routes (login required)
- ✅ Client-side and server-side form validation
- 🔍 Search and filter functionality
- 📱 Fully responsive design
- 🎯 Modern UI with smooth animations

### Backend
- 🟢 **Node.js** with **Express.js**
- 🍃 **MongoDB** database with Mongoose ODM
- 🔐 **JWT** authentication
- 🔒 **bcrypt** password hashing
- ✅ Input validation with express-validator
- 🛡️ Security middleware (Helmet, CORS, Rate Limiting)
- 📝 RESTful API design
- ⚡ Scalable architecture

### Dashboard Features
- 📊 Task statistics dashboard
- ✏️ Create, Read, Update, Delete (CRUD) tasks
- 🔍 Search tasks by title/description
- 🏷️ Filter by status and priority
- 📅 Due date tracking
- 👤 User profile management
- 🚪 Secure logout functionality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager
- **Git** (optional, for cloning)

## 🛠️ Installation & Setup

### 1. Clone or Download the Repository

```bash
# Using Git
git clone <repository-url>
cd scalable-web-app

# Or download and extract the ZIP file
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env file with your configuration
# You need to set:
# - MONGODB_URI (your MongoDB connection string)
# - JWT_SECRET (a secure random string)
# - Other optional settings

# Start MongoDB (if running locally)
# On macOS: brew services start mongodb-community
# On Windows: net start MongoDB
# On Linux: sudo systemctl start mongod

# Run the backend server
npm start

# For development with auto-reload
npm run dev
```

The backend server will start on **http://localhost:5000**

### 3. Frontend Setup

```bash
# Open a new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will open automatically at **http://localhost:3000**

## 🔧 Environment Configuration

### Backend (.env)

```env
PORT=5000
NODE_ENV=development

# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/scalable-app

# Or MongoDB Atlas (cloud)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/scalable-app

JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

CLIENT_URL=http://localhost:3000
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.new@example.com"
}
```

### Task Endpoints

#### Get All Tasks (with filters)
```http
GET /api/tasks?status=pending&priority=high&search=meeting
Authorization: Bearer <token>
```

#### Get Single Task
```http
GET /api/tasks/:id
Authorization: Bearer <token>
```

#### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the web application",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-31"
}
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "completed"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

## 🧪 Testing the Application

### Using the UI

1. **Register a new account**
   - Go to http://localhost:3000/register
   - Fill in the registration form
   - You'll be automatically logged in

2. **Login**
   - Go to http://localhost:3000/login
   - Use demo credentials:
     - Email: demo@example.com
     - Password: demo123
   - Or use your registered credentials

3. **Dashboard**
   - View task statistics
   - Create new tasks
   - Search and filter tasks
   - Edit or delete tasks

### Using Postman

A Postman collection is included in the `docs/` directory. Import it to test all API endpoints.

## 🏗️ Project Structure

```
scalable-web-app/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── taskController.js     # Task CRUD logic
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   ├── error.js              # Error handling
│   │   └── validation.js         # Request validation
│   ├── models/
│   │   ├── User.js               # User model
│   │   └── Task.js               # Task model
│   ├── routes/
│   │   ├── auth.js               # Auth routes
│   │   └── tasks.js              # Task routes
│   ├── .env                      # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Entry point
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.js         # Reusable button
│   │   │   ├── Input.js          # Reusable input
│   │   │   ├── Navbar.js         # Navigation bar
│   │   │   ├── PrivateRoute.js   # Route protection
│   │   │   └── TaskModal.js      # Task create/edit modal
│   │   ├── context/
│   │   │   └── AuthContext.js    # Global auth state
│   │   ├── pages/
│   │   │   ├── Home.js           # Landing page
│   │   │   ├── Login.js          # Login page
│   │   │   ├── Register.js       # Register page
│   │   │   └── Dashboard.js      # Main dashboard
│   │   ├── services/
│   │   │   └── api.js            # API service
│   │   ├── App.js                # Main app component
│   │   ├── index.css             # Global styles
│   │   └── index.js              # Entry point
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
│
└── README.md
```

## 🔐 Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token authentication
- ✅ Token expiration handling
- ✅ Protected API routes
- ✅ CORS configuration
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ Helmet.js security headers
- ✅ Input validation and sanitization
- ✅ MongoDB injection prevention

## 🚀 Deployment Guide

### Backend Deployment (Heroku/Railway/Render)

1. **Create a production MongoDB database** (MongoDB Atlas recommended)
2. **Set environment variables** on your hosting platform
3. **Deploy the backend** code
4. **Note the backend URL** for frontend configuration

### Frontend Deployment (Vercel/Netlify)

1. **Build the production version**
   ```bash
   npm run build
   ```
2. **Update environment variables** with production API URL
3. **Deploy the build folder**

### Environment Variables for Production

Backend:
```env
NODE_ENV=production
MONGODB_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<strong-random-secret>
JWT_EXPIRE=7d
CLIENT_URL=<your-frontend-url>
```

Frontend:
```env
REACT_APP_API_URL=<your-backend-url>/api
```

## 📈 Scalability Considerations

See [SCALABILITY.md](./SCALABILITY.md) for detailed information on scaling this application.

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or `brew services start mongodb-community`
- Check MONGODB_URI in .env file
- Verify MongoDB port (default: 27017)

### CORS Errors
- Ensure backend CLIENT_URL matches frontend URL
- Check backend is running on correct port
- Clear browser cache

### JWT Token Issues
- Check JWT_SECRET is set in backend .env
- Verify token is being sent in Authorization header
- Token may have expired (default: 7 days)

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 3000 (frontend)
npx kill-port 3000
```

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Express.js for the backend framework
- MongoDB for the database
- TailwindCSS for the styling system
- All open-source contributors

## 📞 Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Built with ❤️ using React, Node.js, and MongoDB**
