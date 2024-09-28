import React, { useState, useEffect } from 'react';
import AuthForm from './components/AuthForm';
import RobotPage from './components/RobotPage';
import './App.css';
import {FormattedMessage} from 'react-intl';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [robots, setRobots] = useState([]);

  const handleLogin = async (username, password, setError) => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: username, password }),
      });
      
      const data = await response.json();
      if (data.status === 'success') {
        setIsAuthenticated(true);
        setError({ username: false, password: false }); // Resetea errores si es exitoso
      } else {
        setIsAuthenticated(false);
        setError({ username: true, password: true }); // Marca errores en ambos campos
      }
    } catch (error) {
      console.error('Error:', error);
      setError({ username: true, password: true });
    }
  };

  useEffect(() => {
    const fetchRobots = async () => {
      if (isAuthenticated) {
        try {
          const response = await fetch('http://localhost:3001/robots');
          const data = await response.json();
          for (const robot of data) {
            robot.imagen = robot.imagen.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
          }
          setRobots(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };
    
    fetchRobots();
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="header-container">
        <h2><FormattedMessage id="titulo"/></h2>
        <img src="robots-banner.png" alt="Robots Banner" className="robots-banner" />
      </div>

      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <AuthForm onLogin={handleLogin} /> : <Navigate to="/robots" />}
        />
        <Route
          path="/robots"
          element={isAuthenticated ? <RobotPage robots={robots} /> : <Navigate to="/" />}
        />
      </Routes>

      <footer className="footer">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </Router>
  );
}

export default App;