import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import SobreOFA from './components/SobreOFA';
import Proyectos from './components/Proyectos';
import ProyectoCategoria from './components/ProyectoCategoria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-ofa" element={<SobreOFA />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:categoria" element={<ProyectoCategoria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;