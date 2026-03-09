import { useParams, Link } from 'react-router-dom';
import proyecto from '../img/proyecto.jpeg';

const categorias = {
  residenciales: {
    titulo: 'Residenciales',
    proyectos: [
      { titulo: 'Proyecto 1', img: proyecto },
      { titulo: 'Proyecto 2', img: proyecto },
      { titulo: 'Proyecto 3', img: proyecto },
      { titulo: 'Proyecto 4', img: proyecto },
      { titulo: 'Proyecto 5', img: proyecto },
      { titulo: 'Proyecto 6', img: proyecto },
    ],
  },
  comerciales: {
    titulo: 'Comerciales',
    proyectos: [
      { titulo: 'Proyecto 1', img: proyecto },
      { titulo: 'Proyecto 2', img: proyecto },
      { titulo: 'Proyecto 3', img: proyecto },
      { titulo: 'Proyecto 4', img: proyecto },
      { titulo: 'Proyecto 5', img: proyecto },
      { titulo: 'Proyecto 6', img: proyecto },
    ],
  },
  corporativos: {
    titulo: 'Corporativos',
    proyectos: [
      { titulo: 'Proyecto 1', img: proyecto },
      { titulo: 'Proyecto 2', img: proyecto },
      { titulo: 'Proyecto 3', img: proyecto },
      { titulo: 'Proyecto 4', img: proyecto },
      { titulo: 'Proyecto 5', img: proyecto },
      { titulo: 'Proyecto 6', img: proyecto },
    ],
  },
  hotelero: {
    titulo: 'Hotelero',
    proyectos: [
      { titulo: 'Proyecto 1', img: proyecto },
      { titulo: 'Proyecto 2', img: proyecto },
      { titulo: 'Proyecto 3', img: proyecto },
      { titulo: 'Proyecto 4', img: proyecto },
      { titulo: 'Proyecto 5', img: proyecto },
      { titulo: 'Proyecto 6', img: proyecto },
    ],
  },
};

function ProyectoCategoria() {
  const { categoria } = useParams();
  const data = categorias[categoria];

  if (!data) {
    return (
      <section className="proyecto-categoria section-padding page-section">
        <div className="container">
          <p>Categoría no encontrada.</p>
          <Link to="/proyectos" className="categoria-back-link">Volver a Proyectos</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="proyecto-categoria section-padding page-section">
      <div className="container">
        <Link to="/proyectos" className="categoria-back-link">&#8592; Volver a Proyectos</Link>

        <div className="section-header-left">
          <h2 className="section-title-left">{data.titulo}</h2>
          <p className="section-subtitle-left">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="categoria-grid">
          {data.proyectos.map((proj, index) => (
            <div key={index} className="categoria-card">
              <div className="categoria-card-img-wrapper">
                <img src={proj.img} alt={proj.titulo} className="categoria-card-img" />
                <div className="categoria-card-overlay">
                  <h3 className="categoria-card-title">{proj.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProyectoCategoria;