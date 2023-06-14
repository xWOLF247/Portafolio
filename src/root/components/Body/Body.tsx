import { useEffect, useState } from "react";
import Slider from "react-slick";
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgStart from "../../../assets/imgStart.png";

function Body({ showWelcome, showStart, showInfo, showProyect, showContract }:
  { showWelcome: boolean, showStart: boolean, showInfo: boolean, showProyect: boolean, showContract: boolean }) {



  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    const fetchProyects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/xWOLF247/repos');
        if (response.ok) {
          const data = await response.json();
          setProyects(data);
        } else {
          console.error('Error al obtener los proyectos desde la API de GitHub');
        }
      } catch (error) {
        console.error('Error al conectarse con la API de GitHub', error);
      }
    };
    if (showProyect) {
      fetchProyects();
    }
  }, [showProyect]);


  return (
    <div className="body-container">

      {(showWelcome || showStart) && (
        <div className="welcome-container oculto">
          <img src={imgStart} alt="Imagen de inicio" className="imagen-reducida" />
          <h1>Hola mi nombre es Jarol!</h1>
          <p>Bienvenido a mi portafolio</p>
          <p>Haz clic en las opciones en la parte superior derecha de la barra para obtener más información</p>
          <p>Mis redes sociales se encuentran en la pa  rte inferior izquierda</p>
        </div>
      )}

      {showInfo && (
        <div className="info-container">
          <h1>Información sobre mí</h1>
          <p>Jarol Joseph Salazar Cerdas</p>
          <p>Soy un desarrollador back-end</p>
          <p>Estudiante de Ingeniería en Computación</p>
          <p>Universidad de Costa Rica</p>
          <p>Correo: jarolsalazar@gmail.com</p>
          <a href="https://drive.google.com/file/d/1lH3gZ0xcmPm0EWEdKIHYvI8xNP7iXnBT/view">Descarga mi CV</a>
        </div>
      )}

      {showProyect && (
        <div className="proyect-container">
          <h1>Proyectos</h1>
          {proyects.length > 0 ? (
            <Carousel proyects={proyects} />
          ) : (
            <p>No se encontraron proyectos públicos.</p>
          )}
        </div>
      )}

      {showContract && (
        <div className="contract-container">
          <p>Si lo que deseas es un programador dedicado, capaz de funcionar bajo presion  y que siempre este al dia con las nuevas tecnologias</p>
          <p> Ponte en contacto conmigo para oportunidades laborales</p>
          <p>No te arrepentiras</p>
          <p>Correo: jarolsalazar@gmail.com</p>
        </div>
      )}
    </div>
  );
}

export default Body;