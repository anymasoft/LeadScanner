import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OnboardingPage from './pages/OnboardingPage';
import MainDashboard from './pages/MainDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <LoginPage setAuth={setIsAuthenticated} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/register" 
          element={!isAuthenticated ? <RegisterPage setAuth={setIsAuthenticated} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/onboarding" 
          element={isAuthenticated ? <OnboardingPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={isAuthenticated ? <MainDashboard setAuth={setIsAuthenticated} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;