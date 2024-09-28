import React, { useState } from 'react';
import { Table, Card } from 'react-bootstrap';
import './RobotPage.css';

function RobotPage({ robots }) {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <div className="robot-page">
      <div className="robot-list">
        <Table>
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
              <tr key={robot.id} onClick={() => handleRobotClick(robot)}>
                <td><strong>{robot.id}</strong></td>
                <td>{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td>{robot.empresaFabricante}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="robot-detail">
  {selectedRobot ? (
    <Card className="robot-card">
      <Card.Body>
        <Card.Title className="robot-name">{selectedRobot.nombre}</Card.Title>
        <div className="robot-image">
          <img src={selectedRobot.imagen} alt={selectedRobot.nombre} />
        </div>
        <Card.Text>
          <strong>→ Año de Fabricación:</strong> {selectedRobot.añoFabricacion}
          <br />
          <strong>→ Capacidad de Procesamiento:</strong> {selectedRobot.capacidadProcesamiento}
          <br />
          <strong>→ Humor:</strong> {selectedRobot.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <p></p>
  )}
</div>
    </div>
  );
}

export default RobotPage;