import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AuthForm.css';

function AuthForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ username: false, password: false });
  const [submitted, setSubmitted] = useState(false); // Nueva variable para controlar el envío del formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Marca que el formulario ha sido enviado
    onLogin(username, password, setError); // Pasa setError al método de login
  };

  return (
    <div className="auth-form-container">
      
      <Form onSubmit={handleSubmit} className="auth-form">
        <h1 className='auth-title'><strong>Inicio de sesión</strong></h1>
        <Form.Group controlId="formUsername">
          <Form.Label><strong>Nombre de usuario</strong></Form.Label>
          <Form.Control
            type="text"
            className='auth-input'
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isInvalid={error.username}
          />
          {error.username && (
            <Form.Text className="text-danger">
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label><strong>Contraseña</strong></Form.Label>
          <Form.Control
            type="password"
            className='auth-input'
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={error.password}
          />
          {error.password && (
            <Form.Text className="text-danger">
            </Form.Text>
          )}
        </Form.Group>

        <div className="auth-button-container">
          <Button 
            variant="primary" 
            type="submit"
            className="submit-button"
          >
            Ingresar
          </Button>
          <Button 
            variant="danger" 
            className="cancel-button"
          >
            Cancelar
          </Button>
        </div>

        {/* Mostrar mensaje general de error solo si el formulario ha sido enviado y hay errores */}
        {submitted && (error.username || error.password) && (
          <div className="error-message">
            Error de autenticación. Revise sus credenciales
          </div>
        )}
      </Form>
    </div>
  );
}

export default AuthForm;