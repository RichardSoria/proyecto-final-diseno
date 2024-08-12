import React from "react";

function BodySeguimiento() {
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4 text-primary">Seguimiento de Mis Pedidos</h2>

                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4 shadow-sm">
                            <h4 className="text-center mb-4">Buscar Pedido</h4>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="orderId" className="form-label">Número de Pedido</label>
                                    <input type="text" className="form-control" id="orderId" placeholder="Ingresa tu número de pedido" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 mb-5">
                    <div className="col-md-8 mx-auto">
                        <div className="card p-4 shadow-sm">
                            <h4 className="text-center mb-4">Detalles del Pedido</h4>
                            <div className="order-details">
                                <p><strong>Estado del Pedido:</strong> En tránsito</p>
                                <p><strong>Fecha de Pedido:</strong> 2024-08-10</p>
                                <p><strong>Fecha Estimada de Entrega:</strong> 2024-08-15</p>
                                <p><strong>Dirección de Entrega:</strong> Av. República y Av. 10 de Agosto</p>
                                <p><strong>Producto:</strong> Nombre del producto</p>
                                <p><strong>Cantidad:</strong> 1</p>
                                <p><strong>Rastreo:</strong> <a href="https://www.google.com.ec/maps/@-0.1081339,-78.4699519,18z?hl=es" target="_blank" rel="noopener noreferrer">Ver Rastreo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodySeguimiento;
