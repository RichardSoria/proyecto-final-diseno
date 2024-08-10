import React from "react";
import Header from '../components/header';
import BodyProductosRespaldo from '../components/body_productos_respaldo';
import Footer from '../components/footer';

function Respaldo() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyProductosRespaldo />
          </div>
          <Footer />
        </div>
      );
}
export default Respaldo;