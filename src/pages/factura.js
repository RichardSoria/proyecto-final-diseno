import React from 'react';
import Header from '../components/header';
import BodyFactura from '../components/body_factura';
import Footer from '../components/footer';

function Factura() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <BodyFactura />
      </div>
      <Footer />
    </div>
  );
}

export default Factura;
