import proyecto from '../img/proyecto.png';

function Proyectos() {
  const proyectos = [
    { titulo: 'Residenciales' },
    { titulo: 'Comerciales' },
    { titulo: 'Corporativos' },
    { titulo: 'Hotelero' },
  ];

  return (
    <section className="proyectos section-padding page-section">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title-left">Proyectos</h2>
          <p className="section-subtitle-left">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="proyectos-grid">
          {proyectos.map((proj, index) => (
            <div key={index} className="proyecto-card">
              <div className="proyecto-card-img-wrapper">
                <img src={proyecto} alt={proj.titulo} className="proyecto-card-img" />
                <div className="proyecto-card-overlay">
                  <h3 className="proyecto-card-title">{proj.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;