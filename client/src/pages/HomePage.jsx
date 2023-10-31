import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; // Ruta de la imagen
import carlosdj from "../images/carlosdj.jpeg"; // Ruta de la imagen

import foto1 from "../images/slider/01.png"; // Ruta de la imagen
import foto2 from "../images/slider/02.jpeg"; // Ruta de la imagen
import foto3 from "../images/slider/03.jpeg"; // Ruta de la imagen
import foto4 from "../images/slider/04.png"; // Ruta de la imagen
import foto5 from "../images/slider/05.png"; // Ruta de la imagen
import foto6 from "../images/slider/06.png"; // Ruta de la imagen

//Home página o página principal
//Web básica con los colores corporativos de la empresa, contiene NavBar presente en todas las páginas para poder hacer login y registro. Además tambien contiene botones en la propia página de inicio

function HomePage() {
  return (
    <div style={{ backgroundColor: "black", color: "#ff7200" }}>
      {/* Barra de navegación */}
      <nav
        style={{
          backgroundColor: "#ff7200",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          Inicio
        </Link>
      </nav>

      {/* Banner principal con logo */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img
          src={logo}
          alt="Logo de la empresa"
          style={{ width: "30%", margin: "100px auto" }}
        />
        <h1>¡Bienvenido a nuestra página!</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ff7200",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Link to="/login" className="white">
            Login
          </Link>

          
        </button>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ff7200",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Link to="/register" className="white">
            Registrate
          </Link>
        </button>
      </div>

      {/* Recuadro de información con fotos */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div
          style={{ width: "60%", padding: "20px", border: "3px solid #ff7200" }}
        >
          <p style={{ color: "white", textAlign: "justify", margin: "15px" }}>
            Pim Pam Music es una empresa experta en llevar toda la música y la
            animación a bodas y otros eventos sociales de alto nivel. Esta
            compañía trabaja con grandes profesionales que os darán toda la
            confianza para que tengáis la fiesta perfecta con la que tanto
            habéis soñado para ese día tan importante. No os lo penséis más y
            gracias a esta empresa convertiréis vuestra celebración en un evento
            inolvidable.{" "}
          </p>
          <img
            src={carlosdj}
            alt="Imagen 1"
            style={{ width: "70%", margin: "auto" }}
          />
        </div>
      </div>

      {/* Formulario de correo */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Suscríbete para recibir noticias</h2>
        <form>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            style={{ padding: "10px", margin: "10px" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff7200",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Suscribirse
          </button>
        </form>
      </div>

      {/* Sección de galería para 6 fotos */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "50%"
          }}
        >
          <img
            src={foto1}
            alt="Foto 1"
            style={{ width: "calc(50% - 10px)", margin: "5px" }}
          />
          <img
            src={foto2}
            alt="Foto 2"
            style={{ width: "calc(50% - 10px)", margin: "5px" }}
          />
          <img
            src={foto3}
            alt="Foto 3"
            style={{ width: "calc(50% - 10px)", margin: "5px" }}
          />
          <img
            src={foto4}
            alt="Foto 4"
            style={{ width: "calc(50% - 10px)", margin: "5px" }}
          />
          <img
            src={foto5}
            alt="Foto 5"
            style={{ width: "calc(50% - 10px)", margin: "5px" }}
          />
          <img
            src={foto6}
            alt="Foto 6"
            style={{ width: "calc(50% - 10px)", margin: "5px" }}
          />
        </div>
      </div>

      {/* Pie de página */}
      <footer style={{
      backgroundColor: "#ff7200",
      color: "white",
      textAlign: "center",
      padding: "10px",
      position: "relative",
      bottom: "0",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ width: "20%", marginRight: "10px" }} />
        
      </div>
      <div>
      <p style={{ margin: "10px" }}>Contacto: carlosmorenosvq@gmail.com</p>
        <p style={{ margin: "10px" }}>Teléfono: 666 165 660</p>
        <p style={{ margin: "10px" }}>Sevilla, Sevilla</p>
      </div>
    </footer>
    </div>
  );
}

export default HomePage;
