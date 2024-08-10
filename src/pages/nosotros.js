import React from "react";
import Header from '../components/header';
import BodyNosotros from '../components/body_nosotros';
import Footer from '../components/footer';

function Nosotros() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyNosotros />
          </div>
          <Footer />
        </div>
      );
}
export default Nosotros;