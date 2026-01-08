# Quick Start Guide - Scalable Web Application

## ⚡ Get Up and Running in 5 Minutes

### Prerequisites Check
```bash
# Check if Node.js is installed
node --version  # Should be v14 or higher

# Check if MongoDB is installed
mongod --version  # Should be v4 or higher

# Check if npm is installed
npm --version
```

### 🚀 Quick Setup

#### 1. Start MongoDB
```bash
# macOS (using Homebrew)
brew services start mongodb-community

# Windows
net start MongoDB

# Linux
sudo systemctl start mongod

# Or run manually
mongod --dbpath /path/to/data/directory
```

#### 2. Backend Setup (2 minutes)
```bash
# Navigate to backend
cd backend

# Install dependencies (first time only)
npm install

# Copy environment file
cp .env.example .env

# Start the backend server
npm start
```

✅ Backend running at: **http://localhost:5000**

#### 3. Frontend Setup (2 minutes)
```bash
# Open a NEW terminal window
# Navigate to frontend
cd frontend

# Install dependencies (first time only)
npm install

# Start the frontend server
npm start
```

✅ Frontend opens automatically at: **http://localhost:3000**

### 🎯 Test the Application

#### Option 1: Using the UI
1. Go to http://localhost:3000
2. Click **Register** button
3. Fill in your details:
   - Name: Your Name
   - Email: your.email@example.com
   - Password: password123
4. Click **Register**
5. You'll be redirected to the Dashboard
6. Start creating tasks!

#### Option 2: Test with Demo Account
First, create a demo user using the API:

```bash
# Create demo user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Demo User",
    "email": "demo@example.com",
    "password": "demo123"
  }'
```

Then login at: http://localhost:3000/login
- Email: demo@example.com
- Password: demo123

### 📝 Quick API Test with cURL

#### 1. Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "test123"
  }'
```

Save the token from the response!

#### 2. Create a Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "My First Task",
    "description": "This is a test task",
    "status": "pending",
    "priority": "high"
  }'
```

#### 3. Get All Tasks
```bash
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 🐛 Common Issues & Solutions

#### Issue: "Cannot connect to MongoDB"
**Solution:**
```bash
# Make sure MongoDB is running
ps aux | grep mongod

# If not running, start it
mongod --dbpath /path/to/data
```

#### Issue: "Port 5000 already in use"
**Solution:**
```bash
# Kill the process
npx kill-port 5000

# Or change port in backend/.env
PORT=5001
```

#### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Kill the process
npx kill-port 3000

# Or React will prompt to use another port (3001)
```

#### Issue: "Module not found"
**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### 📦 Project Structure Overview

```
scalable-web-app/
│
├── backend/              # Node.js/Express API
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Auth, validation, error handling
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   └── server.js        # Entry point
│
├── frontend/            # React application
│   ├── public/          # Static files
│   └── src/
│       ├── components/  # Reusable components
│       ├── context/     # Global state
│       ├── pages/       # Route pages
│       ├── services/    # API calls
│       └── App.js       # Main component
│
└── README.md            # Documentation
```

### 🎨 Available Features

#### Dashboard Features:
- ✅ View task statistics
- ✅ Create new tasks
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ Search tasks
- ✅ Filter by status (pending/in-progress/completed)
- ✅ Filter by priority (low/medium/high)
- ✅ Sort tasks
- ✅ User profile

#### Authentication Features:
- ✅ User registration
- ✅ User login
- ✅ JWT token authentication
- ✅ Protected routes
- ✅ Auto-login on registration
- ✅ Logout

### 🔧 Environment Variables

#### Backend (.env)
```env
PORT=5000                                    # Server port
MONGODB_URI=mongodb://localhost:27017/scalable-app  # Database
JWT_SECRET=your_secret_key                   # JWT secret
JWT_EXPIRE=7d                                # Token expiry
CLIENT_URL=http://localhost:3000             # Frontend URL
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api  # Backend API URL
```

### 📚 Next Steps

1. **Read the full documentation**: Check README.md for detailed information
2. **Explore the API**: Import Postman_Collection.json into Postman
3. **Learn about scalability**: Read SCALABILITY.md
4. **Customize**: Modify the code to fit your needs
5. **Deploy**: Follow the deployment guide in README.md

### 🆘 Need Help?

- Check the troubleshooting section in README.md
- Review the error messages in the terminal
- Make sure all prerequisites are installed
- Ensure MongoDB is running
- Verify environment variables are set correctly

### 🎉 Success Checklist

- [ ] MongoDB is running
- [ ] Backend server is running (http://localhost:5000)
- [ ] Frontend is running (http://localhost:3000)
- [ ] Can register a new user
- [ ] Can login successfully
- [ ] Can create tasks
- [ ] Can view/edit/delete tasks
- [ ] Search and filters work

---

**Congratulations! Your scalable web application is now running! 🚀**

For detailed information, please refer to the main README.md file.
