import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function MostrarAbogados() {

  const [datos, setDatos] = useState([])
  const [abogados, setAbogados] = useState([])

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/abogados');
        setDatos(response.data);
        console.log(response.data);
      } catch (err) {
        console.error('Error al obtener datos:', err);
      }
    };

    fetchDatos();
  }, []);

  const cambiarEstado = async (Id, nuevoEstado) => {
    console.log("seleccionado")
    const id = Id
    try {
      await axios.patch(`http://localhost:4000/api/abogados/${id}/estado`, {
        activo: nuevoEstado
      });
      toast.success("el estado del abogado se actualizo con exito")
      setTimeout(() => {
        window.location.reload();
    }, 1500);

    } catch (err) {
      console.error('Error al cambiar el estado:', err);
    }
  };


  return (
    <div className="container mt-4">
      <h2>Lista de Abogados</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Universidad</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((datos) => (
            <tr key={datos.id}>
              <td>{datos.Id}</td>
              <td>{datos.Nombre}</td>
              <td>{datos.Especialidad}</td>
              <td>{datos.Universidad}</td>
              <td>{datos.Email}</td>
              <td>{datos.Telefono}</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={`checkbox-${datos.Id}`}
                    checked={datos.Activo}
                    onChange={(e) => cambiarEstado(datos.Id, e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor={`checkbox-${datos.Id}`}>
                    {datos.Activo ? 'Activo' : 'Inactivo'}
                  </label>
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default MostrarAbogados;
