import React from "react";

function BodyPreguntas() {
    return (
        <div className="container mt-5">
            <div className="accordion" id="faqAccordion">
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
                            ¿Qué productos ofrecen?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Ofrecemos una gran variedad de productos electrónicos de marcas reconocidas para mayor confianza del cliente.
                        </div>
                    </div>
                </div>
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
                            ¿Cuáles son los métodos de envío disponibles?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento y un enlace para rastrear tu paquete en línea. También puedes rastrear tu pedido desde tu cuenta en nuestra página web.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button button-custom collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            ¿Cuál es la política de devoluciones?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Los productos deben estar en su estado original y con todos los accesorios incluidos. Para iniciar una devolución, contacta a nuestro servicio al cliente y te proporcionaremos un número de autorización y las instrucciones para el envío.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button button-custom collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            ¿Ofrecen garantía en sus productos?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Sí, todos nuestros productos vienen con una garantía del fabricante. La duración y los términos de la garantía varían según el producto y el fabricante. Consulta la descripción del producto para obtener más detalles sobre la garantía específica.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button button-custom collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            ¿Cómo puedo realizar una compra?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Para realizar una compra, navega por nuestras categorías de productos, añade los artículos que deseas al carrito y sigue las instrucciones para completar la compra. Puedes pagar con tarjeta de crédito, débito o PayPal.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BodyPreguntas;
