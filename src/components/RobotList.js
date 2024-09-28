import React from 'react';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

function RobotList({ robots, onRobotClick }) {
  return (
    <div className="robot-list">
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th><FormattedMessage id="nombre" /></th>
            <th><FormattedMessage id="modelo" /></th>
            <th><FormattedMessage id="empresaFabricante" /></th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id} onClick={() => onRobotClick(robot)}>
              <td><strong>{robot.id}</strong></td>
              <td>{robot.nombre}</td>
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