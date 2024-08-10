import React from "react";
import { Link } from "react-router-dom";

function BodyRegistrar() {
    return (
        <div class="container mt-4 mb-4">
  <h1 class="mt-3 mb-3 text-primary display-1">CREAR CUENTA</h1>
  <div class="row g-3">
    <div class="col mb-2">
      <label for="inputEmail4" class="form-label">Nombre</label>
      <input type="text" class="form-control" placeholder="First name" aria-label="Primer Nombre" />
    </div>
    <div class="col">
      <label for="inputEmail4" class="form-label">Apellido</label>
      <input type="text" class="form-control" placeholder="Segundo Nombre" aria-label="Segundo Nombre" />
    </div>
  </div>
  <form class="row g-3">
    <div class="col-md-6 mb-2">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4" />
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4" />
    </div>
    <div class="col-12 mt-0">
      <label for="inputAddress" class="form-label">Dirrección</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Dirreción Principal" />
    </div>
    <div class="col-12 mt-2">
      <label for="inputAddress2" class="form-label">Dirrección 2</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Dirrección Secunadria" />
    </div>
    <div class="col-md-6 mt-2">
      <label for="inputCity" class="form-label">Ciudad</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="col-md-4 mt-2">
      <label for="inputState" class="form-label">Provincia</label>
      <select id="inputState" class="form-select">
        <option selected>Elegir...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-2 mt-2">
      <label for="inputZip" class="form-label">Código Postal</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
    <div class="col-12">
      <a href="#">Ver Términos y condiciones</a>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" />
        <label class="form-check-label" for="gridCheck">
          Acepto los términos y condiciones
        </label>
      </div>
    </div>
    <div class="col-12">
      <Link to="/" type="submit" class="btn btn-primary mb-3">Crear Cuenta</Link>
    </div>
  </form>
  </div>
    );
}
export default BodyRegistrar;