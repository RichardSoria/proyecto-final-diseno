import React from "react";
import Header from '../components/header';
import BodyProductosGeneradores from '../components/body_productos_generadores';
import Footer from '../components/footer';

function Generadores() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyProductosGeneradores />
          </div>
          <Footer />
        </div>
      );
}
export default Generadores;