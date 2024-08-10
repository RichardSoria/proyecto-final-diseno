import React from "react";
import { Link } from 'react-router-dom';

function BodyNosotros() {
    return (
    <>     
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sobre Nosotros</h2>
        <div className="accordion" id="faqAccordion">
          {/* Sección Visión */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button button-custom collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h5 className="text-center mb-3">VISIÓN</h5>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                "Ser el líder global en innovación tecnológica, transformando la manera en que las personas y las empresas interactúan con el mundo digital, promoviendo un futuro más conectado, eficiente y sostenible."
              </div>
            </div>
          </div>

          {/* Sección Misión */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button button-custom collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5 className="text-center mb-3">MISIÓN</h5>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                "Proveer una amplia gama de productos tecnológicos y equipos electrónicos de alta calidad, combinados con un servicio al cliente excepcional, para satisfacer las necesidades y deseos de nuestros clientes..."
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Mapa Interactivo de Google Maps</h2>
      <div className="map-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.36028813089044!2d-78.57242847793364!3d-0.2972967351069875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1718673503114!5m2!1ses!2sec"
          width="100%"
          height="100%"
          style={{
            border: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
    </>
  );
}
export default BodyNosotros;
