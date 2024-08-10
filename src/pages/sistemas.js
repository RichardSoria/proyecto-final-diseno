import React from "react";
import Header from '../components/header';
import BodyProductosSistemas from '../components/body_productos_sistemas';
import Footer from '../components/footer';

function Sistemas() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyProductosSistemas />
          </div>
          <Footer />
        </div>
      );
}
export default Sistemas;