import React from "react";

function BodyContacto() {
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4 text-primary">Información de Contacto</h2>
                <div className="contact-info p-4 rounded shadow-sm bg-light">
                    <p><strong>Email:</strong> <a href="mailto:contacto@ecuageizer.com" className="text-decoration-none text-dark">contacto@ecuageizer.com</a></p>
                    <p><strong>Teléfono móvil:</strong> <a href="tel:+593981497894" className="text-decoration-none text-dark">+593-98-149-7894</a></p>
                    <p><strong>Teléfono fijo:</strong> <a href="tel:+593023678127" className="text-decoration-none text-dark">(02)-3678-127</a></p>
                    <p><strong>Dirección:</strong> Av. República y Av. 10 de Agosto</p>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <h2 className="text-center mb-4 text-primary">Redes Sociales</h2>
                <div className="d-flex flex-column align-items-center social-media p-4 rounded shadow-sm bg-light">
                    <p className="w-100"><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg w-100 text-wrap">Facebook</a></p>
                    <p className="w-100"><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-lg w-100 text-wrap">Instagram</a></p>
                    <p className="w-100"><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-lg w-100 text-wrap">Twitter</a></p>
                    <p className="w-100"><a href="https://wa.me/593981497894" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-lg w-100 text-wrap">WhatsApp</a></p>
                </div>
            </div>
        </> 
    );
}

export default BodyContacto;
