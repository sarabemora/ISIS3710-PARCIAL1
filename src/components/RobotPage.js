import React, { useState } from 'react';
import './RobotPage.css';
import RobotList from './RobotList';
import RobotDetail from './RobotDetail';

function RobotPage({ robots }) {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <div className="robot-page">
      <RobotList robots={robots} onRobotClick={handleRobotClick} />
      <div className="robot-detail">
        <RobotDetail robot={selectedRobot} />
      </div>
    </div>
  );
}

export default RobotPage;