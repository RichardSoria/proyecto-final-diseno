import React from "react";
import Header from '../components/header';
import BodyContacto from '../components/body_contacto';
import Footer from '../components/footer';

function Contacto() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyContacto />
          </div>
        </div>
      );
}
export default Contacto;