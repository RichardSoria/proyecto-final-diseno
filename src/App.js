import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import IniciarSesion from './pages/iniciar_sesion';
import Registrar from './pages/registrar';
import Nosotros from './pages/nosotros';
import Contacto from './pages/contactos';
import Preguntas from './pages/preguntas';
import Generadores from './pages/generadores';
import Componentes from './pages/componentes';
import Accesorios from './pages/accesorios';
import Sistemas from './pages/sistemas';
import Seguimiento from './pages/seguimiento';
import Respaldo from './pages/respaldo';
import TodoArticulos from './pages/todo_articulos';
import Ayuda from './pages/ayuda';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrar />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/generadores" element={<Generadores />} />
        <Route path="/componentes" element={<Componentes />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/sistemas" element={<Sistemas />} />
        <Route path="/respaldo" element={<Respaldo />} />
        <Route path="/todos-articulos" element={<TodoArticulos />} />
      </Routes>
    </Router>
  );
}

export default App;
