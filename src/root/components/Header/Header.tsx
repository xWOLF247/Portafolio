import Reacth from 'react';
import './Header.css'; 

function Header() {
  return (
      <header id='navbar'> 
       <div className='Classnavbar' id='Classnavbar'>
           <div className='logo'><img src='' alt="" id='Logo' /></div>
           <ul className='links'>
               <li><a href="#"></a>Inicio</li>
               <li><a href="#"></a>Información sobre mi</li>
               <li><a href="#"></a>Contratame!!</li>
           </ul>
       </div>
      </header>
     );
}

export default Header;