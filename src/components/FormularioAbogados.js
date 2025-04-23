import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function FormularioAbogados() {
    const [form, setForm] = useState({
        nombre: '',
        especialidad: '',
        universidad: '',
        email: '',
        telefono: ''
    });

    const [mensaje, setMensaje] = useState(null);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje(null);

        try {
            const response = await axios.post('http://localhost:4000/api/abogados', {
                ...form,
                activo: "true"
            });
            setMensaje(response.data.message);
            setForm({ nombre: '', especialidad: '', universidad: '', email: '', telefono: '' });
            toast.success("Abogado creado")
            setTimeout(() => {
                window.location.reload();
            }, 2000);

        } catch (err) {
            toast.error("Error al enviar el formulario");
        }
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="card">
                        <h5 className="card-title p-3 border-bottom">Formulario de creacion de abogados</h5>
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
                                    <label className="form-label">Especialidad</label>
                                    <input
                                        type="text"
                                        name="especialidad"
                                        value={form.especialidad}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Universidad</label>
                                    <input
                                        type="text"
                                        name="universidad"
                                        value={form.universidad}
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
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioAbogados;
