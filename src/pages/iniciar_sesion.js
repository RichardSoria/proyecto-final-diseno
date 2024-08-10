import React from "react";
import Header from '../components/header';
import BodyIniciarSesion from '../components/body_iniciar_sesion';
import Footer from '../components/footer';

function IniciarSesion() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <BodyIniciarSesion />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default IniciarSesion;
  