import React from "react";
import { Link } from 'react-router-dom';
import img_1 from '../images/user.png';

function BodyIniciarSesion() {
    return(
        <div class="container mt-4 mb-4">
        <h1 class="mt-3 mb-3 text-primary display-1 ms-3">INICIAR SESIÓN</h1>
        <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <img src={img_1} height="250" alt="Imagen de inicio de sesión" />
            </div>
            <div class="col-md-6">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Recordar mis credenciales</label>
                    </div>
                    <Link to="/" type="submit" class="btn btn-primary button-custom">Iniciar Sesión</Link>
                </form>
            </div>
        </div>
    </div>
    );
}
export default BodyIniciarSesion;