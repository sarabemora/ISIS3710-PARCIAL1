import React from 'react';
import { Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

function RobotDetail({ robot }) {
  if (!robot) {
    return <p></p>; 
  }

  return (
    <Card className="robot-card">
      <Card.Body>
        <Card.Title className="robot-name">{robot.nombre}</Card.Title>
        <div className="robot-image">
          <img src={robot.imagen} alt={robot.nombre} />
        </div>
        <Card.Text>
          <strong><FormattedMessage id="anio" /></strong> {robot.añoFabricacion}
          <br />
          <strong><FormattedMessage id="procesamiento" /></strong> {robot.capacidadProcesamiento}
          <br />
          <strong><FormattedMessage id="humor" /></strong> {robot.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RobotDetail;