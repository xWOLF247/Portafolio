import React from 'react';
import BodyStyles from './Body.css';

function Body({ showStart, showInfo, showProyect , showContract }) {

return (
    <div className="body-container">
      {showStart && (
        <div className="start-container">
          <h1>¡Hola! Soy Jarol Salazar</h1>
          </div>
      )}

      {showInfo && (
        <div className="info-container">
          <h1>Información sobre mí</h1>
          <p>Jarol Joseph Salazar Cerdas</p>
          <p>Estudiante de Ingeniería en Computación</p>
          <p>Universidad de Costa Rica</p>
          <p>Correo: jarolsalazar@gmail.com</p>
        </div>
      )}

      {showProyect && (
        <div className="proyect-container">
          <h1>Proyectos</h1>
        </div>
      )}

      {showContract && (
        <div className="contract-container">
          <p>Ponte en contacto conmigo para oportunidades laborales.</p>
          <p>Correo: jarolsalazar@gmail.com</p>
        </div>
      )}
    </div>
  );
}
  
  export default Body;