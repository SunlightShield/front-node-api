import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function FormularioContacto() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/contactos', form);
            setForm({ nombre: '', email: '', telefono: '', mensaje: '' });
            toast.success("solicitud de contacto enviada")
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            toast.error("No se pudo crear el Contacto")
        }
    };

    return (
        <div className="container my-4 ">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="card">
                        <h5 className="card-title p-3 border-bottom">Formulario de contacto</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={form.telefono}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FormularioContacto;
