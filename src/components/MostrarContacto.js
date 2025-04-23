import axios from "axios";
import { useEffect, useState } from "react";

function MostrarContacto() {

    const [datos, setDatos] = useState([])
    const [abogados, setAbogados] = useState([])

    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/contactos');
                setDatos(response.data);
                console.log(response.data);
            } catch (err) {
                console.error('Error al obtener datos:', err);
            }
        };

        fetchDatos();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Lista de Contactos</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((datos) => (
                        <tr key={datos.id}>
                            <td>{datos.Id}</td>
                            <td>{datos.Nombre}</td>
                            <td>{datos.Email}</td>
                            <td>{datos.Mensaje}</td>
                            <td>{datos.Telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default MostrarContacto;
