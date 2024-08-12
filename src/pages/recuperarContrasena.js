import React from "react";
import Header from '../components/header';
import BodyRecuperarContrasena from '../components/body_recuperar_contrasena';
import Footer from '../components/footer';

function RecuperarContrasena() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1">
                <BodyRecuperarContrasena />
            </div>
            <Footer />
        </div>
    );
}

export default RecuperarContrasena;
