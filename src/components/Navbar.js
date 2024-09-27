import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Robot Lovers</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;