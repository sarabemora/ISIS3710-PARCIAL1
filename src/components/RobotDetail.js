import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RobotDetail() {
  const { id } = useParams();
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/robots/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.status !== 'error') {
          setRobot(data); // Guardar detalles del robot en el estado
        } else {
          console.error('Robot no encontrado');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!robot) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{robot.nombre} - {robot.modelo}</h2>
      <p>Empresa: {robot.empresaFabricante}</p>
      <p>Año de Fabricación: {robot.añoFabricacion}</p>
      <p>Capacidad de Procesamiento: {robot.capacidadProcesamiento}</p>
      <p>Humor: {robot.humor}</p>
      <img src={robot.imagen} alt={robot.nombre} />
    </div>
  );
}

export default RobotDetail;