import React from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';*/
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Este es el pie de página</p>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/jarol-salazar-a92589276/" target="_blank" rel="noopener noreferrer">
          {/*<FontAwesomeIcon icon={faLinkedin} />*/}
        </a>
      </div>
    </footer>
  );
};

export default Footer;