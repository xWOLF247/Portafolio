import Reacth, { useState } from 'react';
import HeaderStyles from './Header.css'; 
/*<div className='text-left' style={{ marginLeft: 0 }}>texto a la izquierda prueba</div> {/* prueba de texto a la izquierda }*/
function Header() {
    const [showInfo, setShowInfo] = useState(false);

    const handleInfoClick = () => { 
        setShowInfo(!showInfo);
        };

        return (
            <header id='navbar' className={HeaderStyles.navbar}>
              <div className={HeaderStyles.Classnavbar}>
                <div className={HeaderStyles.logo}><img src="./icons/faLinkedin.svg" alt="" id='Logo' /></div>
                
                <ul className={HeaderStyles.links}>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#" onClick={handleInfoClick}>Información sobre mí</a></li>
                  <li><a href="#">Contrátame!!</a></li>
                </ul>
              </div>
        
              {showInfo && (
                <div className={HeaderStyles['info-container']}>
                  <div className={HeaderStyles['additional-info']}>
                    <p>Jarol Joseph Salazar Cerdas</p>
                    <p>Estudiante de Ingeniería en Computación</p>
                    <p>Universidad de Costa Rica</p>
                    <p>Correo: jarolsalazar@gmail.com</p>
                  </div>
                </div>
              )}
            </header>
    );
  }

export default Header;