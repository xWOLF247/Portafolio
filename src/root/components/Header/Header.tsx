import Reacth, { useState } from 'react';
import HeaderStyles from './Header.css';
import logoMini from './favicon.png';


function Header({onStartClick, onInfoClick, onProyectClick, onContractClick  }) {

  return (
    <header id="navbar">
      <div className="Classnavbar" id="Classnavbar">
        <div className="logoMini">
          <img src="./favicon.png" alt="logoMini" id="logoMini" />
        </div>
        <ul className="links">
          <li><a href="#"onClick={onStartClick}>Inicio</a></li>
          <li><a href="#" onClick={onInfoClick}>Información sobre mí</a></li>
          <li><a href="#"onClick={onProyectClick}>Proyectos</a></li>
          <li><a href="#" onClick={onContractClick}>Contrátame!!</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
