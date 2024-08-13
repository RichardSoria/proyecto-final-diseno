import React from 'react';
import { Link } from 'react-router-dom';

import product1 from '../images/img_1.jpg';
import product2 from '../images/img_4.jpeg';
import product3 from '../images/img_3.jpeg';

import Header from '../components/header';
import Footer from '../components/footer';

function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Generador de Energía',
      image: product1,
      price: '$3,500.00',
    },
    {
      id: 2,
      name: 'Panel Solar',
      image: product2,
      price: '$400.00 por panel',
    },
    {
      id: 3,
      name: 'Kit Completo de Herramientas Aisladas para Electricistas',
      image: product3,
      price: '$250.00',
    },
  ];

  return (
    <>
      <Header />
      
      <div className="container mt-5">
        <h1 className="mb-4">Lista de Deseos</h1>
        <div className="row">
          {wishlistItems.map(item => (
            <div className="col-12 col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <Link to={`/producto/${item.id}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                  <button className="btn btn-danger ms-2">Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-secondary">
            Regresar a la página principal
          </Link>
        </div>
      </div>
      <p></p>
      <Footer />
    </>
  );
}

export default Wishlist;
