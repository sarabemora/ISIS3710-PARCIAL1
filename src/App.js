import React, { useState, useEffect } from 'react';
import AuthForm from './components/AuthForm';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [robots, setRobots] = useState([]);

  const handleLogin = (username, password) => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);  // Asegúrate de resetear a false en caso de error
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetch('http://localhost:3001/robots')
        .then(response => response.json())
        .then(data => {
          setRobots(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="header-container">
        <img src="robots-banner.png" alt="Robots Banner" className="robots-banner" />
        <h2>Adopta un Robot con Robot Lovers!</h2>
      </div>
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <AuthForm onLogin={handleLogin} /> : <Navigate to="/robots" />}
        />
        <Route
          path="/robots"
          element={isAuthenticated ? <RobotList robots={robots} /> : <Navigate to="/" />}
        />
        <Route
          path="/robots/:id"
          element={isAuthenticated ? <RobotDetail robots={robots} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;