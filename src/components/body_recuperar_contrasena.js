import React, { useState } from "react";
import { Link } from 'react-router-dom';

function BodyRecuperarContrasena() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita la redirección por defecto
        setEmail(""); // Limpia el campo de correo electrónico
    };

    return (
        <div className="container mt-4 mb-4">
            <h1 className="mt-3 mb-3 text-primary display-1 ms-3">RECUPERAR CONTRASEÑA</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="emailRecuperar" className="form-label">Correo Electrónico</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="emailRecuperar" 
                                aria-describedby="emailHelpRecuperar" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <div id="emailHelpRecuperar" className="form-text">Introduce tu correo electrónico para recuperar tu contraseña</div>
                        </div>
                        <button type="submit" className="btn btn-primary button-custom">Enviar</button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to="/iniciar-sesion" className="btn btn-secondary">Regresar al inicio de sesión</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyRecuperarContrasena;

