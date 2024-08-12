import React from "react";
import Header from '../components/header';
import BodySeguimiento from '../components/body_seguimiento';
import Footer from '../components/footer';

function Seguimiento() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodySeguimiento />
          </div>
          <Footer />
        </div>
      );
}
export default Seguimiento;