function Header({onStartClick, onInfoClick, onProyectClick, onContractClick}: { 
  onStartClick: () => void, 
  onInfoClick: () => void, 
  onProyectClick: () => void, 
  onContractClick: () => void, 
  showStart: boolean }) {

  return (
    <header id="navbar">
      <div className="Classnavbar" id="Classnavbar">
        <div className="logoMini">
          <img src="https://res.cloudinary.com/di5vjucp6/image/upload/v1684627907/logo_ng0xhu.png" alt="logo" id="logo" />
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
