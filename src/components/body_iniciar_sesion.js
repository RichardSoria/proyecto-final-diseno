import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img_1 from '../images/user.png';

function BodyIniciarSesion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Hook para la navegación

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulación de envío del formulario
      console.log('Formulario enviado:', { email, password });
      // Limpiar campos
      setEmail('');
      setPassword('');
      // Redirigir al inicio
      navigate('/');
    }
  };

  return (
    <div className="container mt-4 mb-4">
      <h1 className="mt-3 mb-3 text-primary display-1 ms-3">INICIAR SESIÓN</h1>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={img_1} height="250" alt="Imagen de inicio de sesión" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie.</div>
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">Recordar mis credenciales</label>
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            <Link to="/recuperar-contrasena" className="btn btn-link">Olvidé mi contraseña</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BodyIniciarSesion;

