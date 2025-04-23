import './App.css';
import MostrarAbogados from './components/MostrarAbogados.js'
import MostrarContacto from './components/MostrarContacto.js'
import FormularioContacto from './components/FormularioContacto.js';
import FormularioAbogados from './components/FormularioAbogados.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="abogados-tab"
            data-bs-toggle="tab"
            data-bs-target="#abogados"
            type="button"
            role="tab"
            aria-controls="abogados"
            aria-selected="true"
          >
            Abogados
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="otro-tab"
            data-bs-toggle="tab"
            data-bs-target="#otro"
            type="button"
            role="tab"
            aria-controls="otro"
            aria-selected="false"
          >
            Contacto
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="abogados"
          role="tabpanel"
          aria-labelledby="abogados-tab"
        >
          <MostrarAbogados />
          <FormularioAbogados />
        </div>
        <div
          className="tab-pane fade"
          id="otro"
          role="tabpanel"
          aria-labelledby="otro-tab"
        >
          <MostrarContacto />
          <FormularioContacto />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
