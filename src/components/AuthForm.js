import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AuthForm.css'; // Asegúrate de importar los estilos

function AuthForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="auth-form-container">
      <Form onSubmit={handleSubmit} className="auth-form">
        <Form.Group controlId='auth-title'>
            <Form.Text><strong>Inicio de sesión</strong></Form.Text>
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label><strong>Nombre de usuario</strong></Form.Label>
          <Form.Control
            className="auth-input"
            type="text"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label><strong>Contraseña</strong></Form.Label>
          <Form.Control
            className="auth-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <Button variant="danger" style={{ marginLeft: '10px' }}>
            Cancelar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;

