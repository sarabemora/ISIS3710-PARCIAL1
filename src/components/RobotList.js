import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RobotList.css';

function RobotList({ robots }) {
  return (
    <div className="robot-list-container">
      <h2>Adopta un Robot con Robot Lovers!</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id}>
              <td>{robot.id}</td>
              <td>
                <Link to={`/robots/${robot.id}`}>{robot.nombre}</Link>
              </td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default RobotList;

