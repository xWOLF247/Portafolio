import React from 'react';
import './Footer.css';

function Footer() {
  return (
      <footer id='navfootbar'> 
       <div className='Classfootbar' id='Classfootbar'>
           <div className='logo'><img src='' alt="" id='Logo' /></div>
           <ul className='links'>
               <li><a href="#"></a>Linkedin</li>
               <li><a href="#"></a>Instagram</li>
               <li><a href="#"></a>Github</li>
               <li><a href="#"></a>Gmail</li>
           </ul>
       </div>
      </footer>
     );
};

export default Footer;