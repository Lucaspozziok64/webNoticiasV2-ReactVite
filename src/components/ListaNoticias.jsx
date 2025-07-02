
const ListaNoticia = ({ noticia }) => {
  return (
    <div className="card p-1 mx-3">
      <div className="card-header text-center">
        <h6>
          Pais: <strong>{noticia.country}</strong>
        </h6>
      </div>
      <img src={noticia.image_url} className="card-img-top" alt={noticia.source_name} />
      <div className="card-body p-1">
        <h6 className="card-header">{noticia.title}</h6>
        <p className="card-text truncate-3-lines">{noticia.description}</p>
      </div>
      <div className="card-footer d-flex flex-column justify-content-center">
        <a className="botonVerNoticia text-white" href={noticia.link} target="blank">
          Ver noticia completa
        </a>
        <p className="card-text"><small className="text-body-secondary">{noticia.pubDate}</small></p>
      </div>
    </div>
  );
};

export default ListaNoticia;
