import { useEffect, useState } from "react";

function Body({ showWelcome, showStart, showInfo, showProyect, showContract }: { showWelcome: boolean, showStart: boolean, showInfo: boolean, showProyect: boolean, showContract: boolean }) {
  
  interface Proyect {
    id: number;
    name: string;
    html_url: string;
  }

  const [proyects, setProyects] = useState<Proyect[]>([]);

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
          <h1>Bienvenido a mi portafolio</h1>
          <p>Haz clic en las opciones en la parte superior derecha de la barra para obtener más información</p>
          <p>Mis redes sociales se encuentran en la parte inferior izquierda</p>
        </div>
      )}


      {showInfo && (
        <div className="info-container">
          <h1>Información sobre mí</h1>
          <p>Jarol Joseph Salazar Cerdas</p>
          <p>Estudiante de Ingeniería en Computación</p>
          <p>Universidad de Costa Rica</p>
          <p>Correo: jarolsalazar@gmail.com</p>
          <a href="https://drive.google.com/file/d/19uxUtLp3MMfyAFGmIhQlPkKPRu6OuyS2/view?usp=share_link">Descarga mi CV</a>
        </div>
      )}

      {showProyect && (
        <div className="proyect-container">
          <h1>Proyectos</h1>
          {proyects.length > 0 ? (
            <div className="carousel">
              {proyects.map((proyect) => (
                <div className="proyect" key={proyect.id}>
                  <h2>
                    <a href={proyect.html_url} target="_blank" rel="noreferrer">
                      {proyect.name}
                    </a>
                  </h2>
                </div>
              ))}
            </div>
          ) : (
            <p>No se encontraron proyectos públicos.</p>
          )}
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