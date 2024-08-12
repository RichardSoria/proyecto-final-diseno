import React from 'react';
import { useParams, Link } from 'react-router-dom';
import product1 from '../images/img_1.jpg';
import product2 from '../images/img_4.jpeg';
import product3 from '../images/img_3.jpeg';

const products = [
  {
    id: 1,
    name: 'Generador de Energía',
    description: 'Generador de energía industrial, ideal para asegurar el suministro eléctrico en obras y situaciones de emergencia.',
    image: product1,
    price: '$3,500.00',
  },
  {
    id: 2,
    name: 'Panel Solar',
    description: 'Panel solar de alta eficiencia ideal para instalaciones residenciales o comerciales.',
    image: product2,
    price: '$400.00 por panel',
  },
  {
    id: 3,
    name: 'Kit Completo de Herramientas Aisladas para Electricistas',
    description: 'Conjunto profesional de herramientas aisladas para electricistas, diseñado para garantizar seguridad y precisión en instalaciones y mantenimientos eléctricos.',
    image: product3,
    price: '$250.00',
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-12 col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p><strong>Precio: {product.price}</strong></p>
          <Link to="/" className="btn btn-primary">Regresar a la página principal</Link>
          <p></p>
          <div>
            <Link to="/listaDeseos" className="btn btn-secondary">Regresar a la lista de deseos</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
