import React from "react";

function BodyAyuda() {
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4 text-primary">Preguntas Frecuentes (FAQ)</h2>
                <div className="accordion" id="helpAccordion">
                    {/* Pregunta 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <strong>¿Cómo puedo restablecer mi contraseña?</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#helpAccordion"
                        >
                            <div className="accordion-body">
                                Para restablecer tu contraseña, ve a la página de inicio de sesión y haz clic en "¿Olvidaste tu contraseña?" y sigue las instrucciones.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <strong>¿Dónde puedo encontrar el número de seguimiento de mi pedido?</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#helpAccordion"
                        >
                            <div className="accordion-body">
                                El número de seguimiento de tu pedido se encuentra en el correo de confirmación que te enviamos después de realizar la compra. También puedes encontrarlo en la sección de "Mis pedidos" en tu cuenta.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <strong>¿Cómo puedo contactar con el soporte técnico?</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#helpAccordion"
                        >
                            <div className="accordion-body">
                                Puedes contactar con nuestro soporte técnico a través de nuestro formulario de contacto a continuación o enviando un correo electrónico a mateo.torres@epn.edu.ec
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <h2 className="text-center mb-4 text-primary">Formulario de Contacto</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default BodyAyuda;
