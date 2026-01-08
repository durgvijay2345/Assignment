import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckSquare, Shield, Zap, Users } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Create, organize, and track your tasks efficiently',
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'JWT-based authentication with password hashing',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Get instant updates on your tasks and projects',
    },
    {
      icon: Users,
      title: 'User Profiles',
      description: 'Manage your profile and personalize your experience',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slideIn">
            Manage Your Tasks
            <span className="text-primary-600"> Efficiently</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A scalable web application built with React and Node.js featuring
            authentication, CRUD operations, and a modern dashboard.
          </p>
          <div className="flex gap-4 justify-center">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">⚛️</div>
              <p className="font-semibold">React.js</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🟢</div>
              <p className="font-semibold">Node.js</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🍃</div>
              <p className="font-semibold">MongoDB</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎨</div>
              <p className="font-semibold">TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
