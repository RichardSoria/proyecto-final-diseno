import React from 'react';
import Header from '../components/header';
import BodyCarrito from '../components/body_carrito';
import Footer from '../components/footer';

function Carrito() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <BodyCarrito />
      </div>
      <Footer />
    </div>
  );
}

export default Carrito;
