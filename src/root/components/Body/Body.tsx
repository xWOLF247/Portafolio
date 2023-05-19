import React from 'react';
import BodyStyles from './Body.css';

function Body({ showInfo, showContract}) {

return (
    <div className="body-container">
      {showInfo && (
        <div className="info-container">
          <h1>Información sobre mí</h1>
          <p>Jarol Joseph Salazar Cerdas</p>
          <p>Estudiante de Ingeniería en Computación</p>
          <p>Universidad de Costa Rica</p>
          <p>Correo: jarolsalazar@gmail.com</p>
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