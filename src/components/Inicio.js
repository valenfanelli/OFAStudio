import { Link } from 'react-router-dom';
import bgImage from '../img/background-inicio.avif';

function Inicio() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay">
        <h1><span className="brand-name">OFA</span> Studio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Espacios que inspiran, disenos que transforman.</p>
        <Link to="/proyectos" className="hero-cta">Ver Proyectos</Link>
      </div>
    </section>
  );
}

export default Inicio;