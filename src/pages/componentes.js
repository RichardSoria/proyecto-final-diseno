import React from "react";
import Header from '../components/header';
import BodyProductosComponentes from '../components/body_productos_componentes';
import Footer from '../components/footer';

function Componentes() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyProductosComponentes />
          </div>
          <Footer />
        </div>
      );
}
export default Componentes;