import React from "react";
import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpeg'
import img_3 from '../images/img_3.jpeg'
import img_4 from '../images/img_4.jpeg'
import img_5 from '../images/img_5.jpg'
import img_6 from '../images/img_6.jpg'

function BodyPrincipal() {
      return (
    <div className="container mt-4 mb-4">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img_3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img_4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img_5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img_6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="productos" className="container my-5">
        <h2 className="text-center mb-4">Nuestros Productos</h2>
        <div className="row">
          <div className="col-md-4 product-card mb-4">
            <div className="card">
              <img src={img_1} className="card-img-top product-img" alt="Producto 1" />
              <div className="card-body">
                <h5 className="card-title">Generador de Energía Industrial GESAN</h5>
                <p className="card-text">Generador de energía industrial, ideal para asegurar el suministro eléctrico en obras y situaciones de emergencia.</p>
                <p className="card-text"><strong>$3,500.00</strong></p>
                <button type="button" className="btn btn-primary button-custom" data-bs-toggle="modal" data-bs-target="#producto1Modal">Más detalles</button>
                <button type="button" className="btn btn-warning button-custom ms-2">Añadir a la lista de deseos</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 product-card mb-4">
            <div className="card">
              <img src={img_2} className="card-img-top product-img" alt="Producto 2" />
              <div className="card-body">
                <h5 className="card-title">Kit de Herramientas y Componentes Eléctricos</h5>
                <p className="card-text">kit de herramientas y componentes eléctricos, ideal para proyectos de instalación, reparación y mantenimiento eléctrico.</p>
                <p className="card-text"><strong>$150.00</strong></p>
                <button type="button" className="btn btn-primary button-custom" data-bs-toggle="modal" data-bs-target="#producto2Modal">Más detalles</button>
                <button type="button" className="btn btn-warning button-custom ms-2">Añadir a la lista de deseos</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 product-card mb-4">
            <div className="card">
              <img src={img_3} className="card-img-top product-img" alt="Producto 1" />
              <div className="card-body">
                <h5 className="card-title">Kit Completo de Herramientas Aisladas para Electricistas</h5>
                <p className="card-text">Conjunto profesional de herramientas aisladas para electricistas, diseñado para garantizar seguridad y precisión en instalaciones y mantenimientos eléctricos.</p>
                <p className="card-text"><strong>$250.00</strong></p>
                <button type="button" className="btn btn-primary button-custom" data-bs-toggle="modal" data-bs-target="#producto3Modal">Más detalles</button>
                <button type="button" className="btn btn-warning button-custom ms-2">Añadir a la lista de deseos</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 product-card mb-4">
            <div className="card">
              <img src={img_4} className="card-img-top product-img" alt="Producto 1" />
              <div className="card-body">
                <h5 className="card-title">Panel Solar Fotovoltaico 300W </h5>
                <p className="card-text">Panel solar de alta eficiencia ideal para instalaciones residenciales o comerciales.</p>
                <p className="card-text"><strong>$400.00 por panel</strong></p>
                <button type="button" className="btn btn-primary button-custom" data-bs-toggle="modal" data-bs-target="#producto4Modal">Más detalles</button>
                <button type="button" className="btn btn-warning button-custom ms-2">Añadir a la lista de deseos</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 product-card mb-4">
            <div className="card">
              <img src={img_5} className="card-img-top product-img" alt="Producto 1" />
              <div className="card-body">
                <h5 className="card-title">Sistema de Alimentación Ininterrumpida (UPS) Minuteman</h5>
                <p className="card-text"> UPS de alta capacidad para proteger equipos críticos contra interrupciones de energía. Ideal para servidores, redes, y equipos electrónicos sensibles, garantizando un suministro continuo y estable de energía.</p>
                <p className="card-text"><strong>$800.00 - $2,000.00</strong></p>
                <button type="button" className="btn btn-primary button-custom" data-bs-toggle="modal" data-bs-target="#producto5Modal">Más detalles</button>
                <button type="button" className="btn btn-warning button-custom ms-2">Añadir a la lista de deseos</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 product-card mb-4">
            <div className="card">
              <img src={img_6} className="card-img-top product-img" alt="Producto 1" />
              <div className="card-body">
                <h5 className="card-title">Generador de Energía a Gasolina SUMEC SU7700</h5>
                <p className="card-text">Generador de 5500W de potencia de arranque, ideal para proporcionar energía confiable en situaciones de emergencia o en áreas sin acceso a la red eléctrica.</p>
                <p className="card-text"><strong>$600.00</strong></p>
                <button type="button" className="btn btn-primary button-custom" data-bs-toggle="modal" data-bs-target="#producto6Modal">Más detalles</button>
                <button type="button" className="btn btn-warning button-custom ms-2">Añadir a la lista de deseos</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modales para los productos */}
      <div className="modal fade" id="producto1Modal" tabIndex="-1" aria-labelledby="producto1ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="producto1ModalLabel">Generador de Energía</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={img_1} className="card-img-top product-img" alt="Producto 1" />
              <h4>Generador de Energía Industrial GESAN</h4>
              <p><strong>Precio: $500.00</strong></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary button-custom-close" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary button-custom">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="producto2Modal" tabIndex="-1" aria-labelledby="producto2ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="producto2ModalLabel">Componentes Eléctricos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <img src={img_2} className="card-img-top product-img" alt="Producto 2" />
              <h4>Kit de Herramientas y Componentes Eléctricos</h4>
              <p><strong>Precio: $150.00</strong></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary button-custom-close" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary button-custom">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="producto3Modal" tabIndex="-1" aria-labelledby="producto3ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="producto3ModalLabel">Accesorios y Herramientas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={img_3} className="card-img-top product-img" alt="Producto 3" />
              <h4>Kit Completo de Herramientas Aisladas para Electricistas</h4>
              <p><strong>Precio: $250.00</strong></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary button-custom-close" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary button-custom">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="producto4Modal" tabIndex="-1" aria-labelledby="producto4ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="producto4ModalLabel">Sistemas de Energía Renovable</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={img_4} className="card-img-top product-img" alt="Producto 4" />
              <h4>Panel Solar Fotovoltaico 300W</h4>
              <p><strong>Precio: $400.00 por panel</strong></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger button-custom-close" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary button-custom">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="producto5Modal" tabIndex="-1" aria-labelledby="producto5ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="producto5ModalLabel">equipos de Energía de Respaldo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={img_5} className="card-img-top product-img" alt="Producto 5" />
              <h4>Sistema de Alimentación Ininterrumpida (UPS) Minuteman</h4>
              <p><strong>Precio: $800.00 - $2,000.00</strong></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary button-custom-close" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary button-custom">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="producto6Modal" tabIndex="-1" aria-labelledby="producto6ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="producto6ModalLabel">Generadores de Energía</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <img src={img_6} className="card-img-top product-img" alt="Producto 6" />
              <h4>Generador de Energía a Gasolina SUMEC SU7700</h4>
              <p><strong>Precio: $600.00</strong></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary button-custom-close" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary button-custom">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BodyPrincipal;