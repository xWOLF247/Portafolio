import Reacth, { useState } from 'react';
import HeaderStyles from './Header.css';
/*<div className='text-left' style={{ marginLeft: 0 }}>texto a la izquierda prueba</div> {/* prueba de texto a la izquierda }*/


function Header({ onInfoClick, onContractClick }) {
    return (
      <header id="navbar">
        <div className="Classnavbar" id="Classnavbar">
          <div className="logo">
            <img src="./icons/faLinkedin.svg" alt="" id="Logo" />
          </div>
  
          <ul className="links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#" onClick={onInfoClick}>Información sobre mí</a></li>
            <li><a href="#" onClick={onContractClick}>Contrátame!!</a></li>
          </ul>
        </div>
      </header>
    );
  }
  
  export default Header;
