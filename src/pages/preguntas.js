import React from "react";
import Header from '../components/header';
import BodyPreguntas from '../components/body_preguntas';
import Footer from '../components/footer';

function Preguntas() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyPreguntas />
          </div>
          <Footer />
        </div>
      );
}
export default Preguntas;