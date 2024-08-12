import React from 'react';
import { Link } from 'react-router-dom';

function BodyCarrito() {
  // Ejemplo de datos de carrito
  const items = [
    { id: 1, name: 'Generador de Energía 1000W', quantity: 2, price: 120.00 },
    { id: 2, name: 'Cable Eléctrico 5m', quantity: 1, price: 15.00 },
  ];

  // Calcula el total
  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="container mt-4 mb-4">
      <h1 className="mt-3 mb-3 text-primary display-1 ms-3">Carrito de Compras</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              {items.length === 0 ? (
                <p className="text-center">Tu carrito está vacío.</p>
              ) : (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Artículo</th>
                      <th>Cantidad</th>
                      <th>Precio Unitario</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resumen</h5>
              <p className="card-text">Total: ${total}</p>
              <Link to="/factura" className="btn btn-primary w-100 mb-2">Proceder al Pago</Link>
              <Link to="/" className="btn btn-secondary w-100">Seguir Comprando</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyCarrito;
