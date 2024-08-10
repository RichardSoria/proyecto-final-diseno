import React from "react";
import Header from '../components/header';
import BodyRegistrar from '../components/body_registrar';
import Footer from '../components/footer';

function Registrar() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyRegistrar />
          </div>
          <Footer />
        </div>
      );
}
export default Registrar;

