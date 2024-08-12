import React from "react";
import Header from '../components/header';
import BodyAyuda from '../components/body_ayuda';
import Footer from '../components/footer';

function Ayuda() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyAyuda />
          </div>
          <Footer />
        </div>
      );
}
export default Ayuda;