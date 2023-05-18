import Reacth from 'react';
import './Header.css'; 

function Header() {
    return (
      <header id='navbar'> 
        <div className='Classnavbar' id='Classnavbar'>
          <div className='logo'><img src="./icons/faLinkedin.svg" alt="" id='Logo' /></div>
          <div className='text-left' style={{ marginLeft: 0 }}>texto a la izquierda prueba</div> {/* prueba de texto a la izquierda */}
          <ul className='links'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Información sobre mí</a></li>
            <li><a href="#">Contrátame!!</a></li>
          </ul>
         
        </div>
      </header>
    );
  }

export default Header;