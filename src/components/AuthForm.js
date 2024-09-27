import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AuthForm.css';

function AuthForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular llamada a la función de login
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
          setError(false);  // Autenticación exitosa
          onLogin(username, password);
        } else {
          setError(true);  // Error en autenticación
        }
      })
      .catch(() => setError(true)); // En caso de error en el fetch
  };

  return (
    <div className="auth-container">
      <Form onSubmit={handleSubmit} className={`auth-form ${error ? 'error' : ''}`}>
        <Form.Group controlId="formUsername">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={error ? 'error-input' : ''}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? 'error-input' : ''}
          />
        </Form.Group>

        {error && <p className="error-message">Error de autenticación. Revise sus credenciales.</p>}

        <div className="button-group">
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <Button variant="danger" type="button">
            Cancelar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;