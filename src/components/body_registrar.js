import React, { useState } from "react";
import { Link } from "react-router-dom";

function BodyRegistrar() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "Nombre es requerido";
        if (!formData.lastName.trim()) newErrors.lastName = "Apellido es requerido";
        if (!formData.email.trim()) {
            newErrors.email = "Email es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email no es válido";
        }
        if (!formData.password) newErrors.password = "Contraseña es requerida";
        if (!formData.address1.trim()) newErrors.address1 = "Dirección es requerida";
        if (!formData.city.trim()) newErrors.city = "Ciudad es requerida";
        if (!formData.state.trim()) newErrors.state = "Provincia es requerida";
        if (!formData.zip.trim()) newErrors.zip = "Código Postal es requerido";
        if (!formData.termsAccepted) newErrors.termsAccepted = "Debes aceptar los términos y condiciones";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulario enviado:", formData);
            // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una solicitud POST
        }
    };

    return (
        <div className="container mt-4 mb-4">
            <h1 className="mt-3 mb-3 text-primary display-1">CREAR CUENTA</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col mb-2">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="col mb-2">
                    <label className="form-label">Apellido</label>
                    <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        placeholder="Segundo Nombre"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
                <div className="col-md-6 mb-2">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="inputEmail4"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-md-6 mb-2">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="inputPassword4"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="col-12 mb-2">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className={`form-control ${errors.address1 ? 'is-invalid' : ''}`}
                        id="inputAddress"
                        placeholder="Dirección Principal"
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                    />
                    {errors.address1 && <div className="invalid-feedback">{errors.address1}</div>}
                </div>
                <div className="col-12 mb-2">
                    <label className="form-label">Dirección 2</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Dirección Secundaria"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 mb-2">
                    <label className="form-label">Ciudad</label>
                    <input
                        type="text"
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                        id="inputCity"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>
                <div className="col-md-4 mb-2">
                    <label className="form-label">Provincia</label>
                    <select
                        id="inputState"
                        className={`form-select ${errors.state ? 'is-invalid' : ''}`}
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    >
                        <option value="">Elegir...</option>
                        <option value="Provincia 1">Provincia 1</option>
                        <option value="Provincia 2">Provincia 2</option>
                        {/* Añadir más opciones aquí */}
                    </select>
                    {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                </div>
                <div className="col-md-2 mb-2">
                    <label className="form-label">Código Postal</label>
                    <input
                        type="text"
                        className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                        id="inputZip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                    />
                    {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                </div>
                <div className="col-12 mb-2">
                    <a href="#">Ver Términos y condiciones</a>
                    <div className="form-check">
                        <input
                            className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`}
                            type="checkbox"
                            id="gridCheck"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Acepto los términos y condiciones
                        </label>
                        {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary mb-3">Crear Cuenta</button>
                </div>
            </form>
        </div>
    );
}

export default BodyRegistrar;
