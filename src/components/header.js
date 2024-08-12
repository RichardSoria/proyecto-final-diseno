import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="container-fluid color-custom">
      <div className="row align-items-center">
        <div className="col-12 col-md-3 d-flex align-items-center mb-2 mb-md-0">
          <img src={logo} alt="logo" className="img-fluid me-2" />
          <div>
            <h2 className="h4 mb-0">EcuaGeizer</h2>
            <p className="small mb-0">Soluciones elécticas para problemas corrientes</p>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <ul className="nav nav-pills flex-column flex-md-row justify-content-end py-2 fs-6 fs-md-5 nav-custom">
            <li className="nav-item">
              <Link to="/" className="nav-link text-center mb-2 mb-md-0" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-center mb-2 mb-md-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
              <ul className="dropdown-menu">
                <li><Link to="/generadores" className="dropdown-item">Generadores de energía</Link></li>
                <li><Link to="/componentes" className="dropdown-item">Componentes Eléctricos</Link></li>
                <li><Link to="/accesorios" className="dropdown-item">Accesorios y Herramientas</Link></li>
                <li><Link to="/sistemas" className="dropdown-item">Sistemas de Energía Renovable</Link></li>
                <li><Link to="/respaldo" className="dropdown-item">Equipos de Energía de Respaldo</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/todos-articulos" className="dropdown-item">Todos los artículos</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link text-center mb-2 mb-md-0">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link text-center mb-2 mb-md-0">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactos" className="nav-link text-center mb-2 mb-md-0">Contacto</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-center mb-2 mb-md-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 20 20">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/iniciar-sesion" className="dropdown-item">Iniciar Sesión</Link></li>
                <li><Link to="/registrarse" className="dropdown-item">Registrarse</Link></li>
                <li><Link to="/seguimiento" className="dropdown-item">Seguir mis pedidos</Link></li>
                <li><Link to="/ayuda" className="dropdown-item">Ayuda</Link></li>
                <li><Link to="/preguntas" className="dropdown-item">Preguntas Frecuentes</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/otros" className="dropdown-item">Otros</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
