import React from 'react';
import { Link } from 'react-router-dom';

function BodyFactura() {
  // Datos de ejemplo para la factura
  const items = [
    { id: 1, name: 'Generador de Energía 1000W', quantity: 2, price: 120.00 },
    { id: 2, name: 'Cable Eléctrico 5m', quantity: 1, price: 15.00 },
  ];

  // Calcula el total
  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="container mt-4 mb-4">
      <h1 className="mt-3 mb-3 text-primary display-1 ms-3">Factura de Compra</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Detalles de la Compra</h5>
              {items.length === 0 ? (
                <p className="text-center">No hay artículos para mostrar.</p>
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
              <h5 className="mt-4">Resumen</h5>
              <p>Total a Pagar: ${total}</p>
              <p>Gracias por tu compra. La factura será enviada a tu correo electrónico.</p>
              <Link to="/" className="btn btn-primary w-100 mb-2">Volver al Inicio</Link>
              <Link to="/carrito" className="btn btn-secondary w-100">Regresar al Carrito</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyFactura;
